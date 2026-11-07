import { NextResponse } from "next/server";
import { prompts, mocks } from "../../config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MOCK = process.env.MOCK === "1";
const BASE = process.env.LLM_BASE_URL || "https://ollama.com/v1";
const MODEL = process.env.LLM_MODEL || "deepseek-v4.1-flash";
const KEY = process.env.LLM_API_KEY || "";

const MIN_MATERIAL = 60;
const MIN_PREDICTION = 3;
const MIN_LOG = 20;

/** Il modello a volte incapsula il JSON nei fence o ci mette una frase davanti. */
function safeJson(text) {
  const clean = String(text)
    .replace(/^\s*```(?:json)?/i, "")
    .replace(/```\s*$/, "")
    .trim();
  try {
    return JSON.parse(clean);
  } catch {}
  const start = clean.indexOf("{");
  const end = clean.lastIndexOf("}");
  if (start >= 0 && end > start) {
    try {
      return JSON.parse(clean.slice(start, end + 1));
    } catch {}
  }
  return null;
}

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

  const action = body?.action === "debrief" ? "debrief" : "plan";
  const material = String(body?.material || "").trim().slice(0, 12000);
  const students = Array.isArray(body?.students) ? body.students.slice(0, 6) : [];

  if (material.length < MIN_MATERIAL) {
    return NextResponse.json(
      { error: "Serve il materiale vero del corso: almeno il programma in un paragrafo." },
      { status: 400 },
    );
  }
  if (!students.length) {
    return NextResponse.json({ error: "Serve almeno uno studente con il suo profilo." }, { status: 400 });
  }

  // ── Il confine, in codice: senza scommessa la lezione non si genera. ──
  if (action === "plan") {
    const missing = students.filter((s) => String(s?.prediction || "").trim().length < MIN_PREDICTION);
    if (missing.length) {
      return NextResponse.json(
        {
          blocked: true,
          error:
            missing.length === 1
              ? `Manca la previsione per ${missing[0].name}: dove si bloccherà? La lezione non esce prima.`
              : `Mancano ${missing.length} previsioni (${missing.map((s) => s.name).join(", ")}). La lezione non esce prima.`,
        },
        { status: 400 },
      );
    }
  }

  const lessonLog = String(body?.lessonLog || "").trim().slice(0, 6000);
  if (action === "debrief" && lessonLog.length < MIN_LOG) {
    return NextResponse.json(
      { error: "Racconta cosa è andato storto: almeno una frase su cosa non è passato." },
      { status: 400 },
    );
  }

  const people = students.map((s) => ({
    nome: s.name,
    livello: s.level || "",
    profilo: s.note || "",
    previsione_istruttore: String(s.prediction || "").trim(),
  }));

  const payload =
    action === "plan"
      ? { programma: material, studenti: people }
      : { programma: material, studenti: people, lezione: body?.plan || null, racconto_istruttore: lessonLog };

  if (MOCK) {
    return NextResponse.json({ data: mocks[action], mock: true });
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
          { role: "user", content: JSON.stringify(payload) },
        ],
        temperature: 0.3,
      }),
      signal: AbortSignal.timeout(90000),
    });

    if (!res.ok) {
      const detail = await res.text();
      return NextResponse.json(
        { error: `Il modello ha risposto ${res.status}.`, detail: detail.slice(0, 400) },
        { status: 502 },
      );
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content?.trim() || "";
    if (!text) return NextResponse.json({ error: "Risposta vuota dal modello." }, { status: 502 });

    const parsed = safeJson(text);
    if (!parsed) {
      return NextResponse.json(
        { error: "Il modello non ha risposto in JSON. Riprova.", raw: text.slice(0, 800) },
        { status: 502 },
      );
    }

    // Il conteggio non si delega al modello: se dice "2 su 3" ma i verdetti sono 0, la demo mente.
    if (action === "debrief" && Array.isArray(parsed.verdicts)) {
      const total = parsed.verdicts.length;
      const hits = parsed.verdicts.filter((v) => v && v.hit === true).length;
      parsed.hit_rate = `${hits} su ${total}`;
    }

    return NextResponse.json({ data: parsed, mock: false });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Modello non raggiungibile (rete o timeout). Se sei in demo, parte il video.",
        detail: String(err).slice(0, 200),
      },
      { status: 504 },
    );
  }
}
