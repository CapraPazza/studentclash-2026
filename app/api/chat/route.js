import { NextResponse } from "next/server";
import { prompts } from "../../config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MOCK = process.env.MOCK === "1";
const BASE = process.env.LLM_BASE_URL || "https://ollama.com/v1";
const MODEL = process.env.LLM_MODEL || "deepseek-v4.1-flash";
const KEY = process.env.LLM_API_KEY || "";

const MOCK_QUIZ = `## Domanda 1 (facile)
Che cosa distingue un bene rivale da un bene non rivale? Fai un esempio.

**Risposta:** Un bene è rivale se il suo consumo da parte di uno esclude quello di un altro. Un panino è rivale: se lo mangio io, non lo mangi tu. Una trasmissione radio non è rivale.

## Domanda 2
Perché il costo marginale nullo di un bene non rivale crea un problema di prezzo?

**Risposta:** Con costo marginale nullo, il prezzo efficiente è zero, ma a prezzo zero l'impresa non copre i costi fissi. Da qui il finanziamento pubblico o il bundling.

## Domanda 3 (difficile)
Se un bene è non rivale ma escludibile, quale fallimento di mercato resta e quale scompare?

**Risposta:** Scompare il problema della congestione, resta quello del monopolio naturale: l'esclusione tecnica permette di prezzare sopra il costo marginale.

**Concetti fragili:** distinzione rivale/escludibile; rapporto tra costo marginale e prezzo efficiente.`;

const MOCK_FEEDBACK = `### Chiarezza — 3/5
- Funziona: la tesi è nella prima riga, si capisce dove vuoi arrivare.
- Da rifare: due frasi usano "questo" senza dire a cosa si riferiscono.

### Uso del materiale — 2/5
- Funziona: citi correttamente la definizione di bene non rivale.
- Da rifare: il resto dell'argomento non si appoggia a nessun passaggio del testo.

### Struttura — 4/5
- Funziona: introduzione, tre argomenti, conclusione. Si segue.
- Da rifare: l'ultimo paragrafo apre un tema nuovo che non chiudi.

**La modifica più utile:** collega ogni paragrafo a una frase precisa del materiale, con la citazione tra parentesi.`;

export async function GET() {
  return NextResponse.json({ mock: MOCK, model: MODEL, hasKey: Boolean(KEY) });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const material = String(body?.material || "").trim();
  const action = body?.action === "feedback" ? "feedback" : "quiz";

  if (material.length < 40) {
    return NextResponse.json(
      { error: "Serve un po' più di materiale: almeno un paragrafo." },
      { status: 400 },
    );
  }

  if (MOCK) {
    return NextResponse.json({ text: action === "feedback" ? MOCK_FEEDBACK : MOCK_QUIZ, mock: true });
  }

  if (!KEY) {
    return NextResponse.json(
      { error: "Manca LLM_API_KEY: mettila in .env.local, oppure avvia con MOCK=1." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(`${BASE}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: prompts[action] },
          { role: "user", content: material.slice(0, 12000) },
        ],
        temperature: 0.4,
      }),
      signal: AbortSignal.timeout(60000),
    });

    if (!res.ok) {
      const detail = await res.text();
      return NextResponse.json(
        { error: `Il modello ha risposto ${res.status}.`, detail: detail.slice(0, 400) },
        { status: 502 },
      );
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content?.trim();
    if (!text) return NextResponse.json({ error: "Risposta vuota dal modello." }, { status: 502 });

    return NextResponse.json({ text, mock: false });
  } catch (err) {
    return NextResponse.json(
      { error: "Modello non raggiungibile (rete o timeout). Se sei in demo, usa il video.", detail: String(err).slice(0, 200) },
      { status: 504 },
    );
  }
}
