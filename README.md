# Studia con me — scheletro hackathon

Skeleton di partenza per lo Student Tech Clash 2026 (Bicocca, 7 novembre).
**Non è il prodotto**: è la macchina che sabato produce il prodotto in poche ore.

## Cosa fa, oggi

Una pagina, una funzione server, un modello:

1. incolli (o carichi) il materiale di un corso
2. premi un'azione: *Genera domande* oppure *Valuta un elaborato*
3. il modello legge il materiale e risponde seguendo il prompt di `app/config.js`

## Comandi

```bash
npm install          # solo la prima volta
npm run dev          # apre http://localhost:3000
MOCK=1 npm run dev    # stessa app, senza rete: risposte finte (demo di sicurezza)
npm run build        # verifica che compili (falla sempre prima di un push)
```

## Dove si tocca cosa

| File | A cosa serve | Quando lo cambi |
|---|---|---|
| `app/config.js` | nome, tagline, azioni, prompt | sabato mattina, quando arriva il caso studio |
| `app/page.js` | la pagina | raramente |
| `app/api/chat/route.js` | chiamata al modello + mock | raramente |
| `app/globals.css` | stile | se avanza tempo |
| `.env.local` | chiave API (non si committa) | una volta |

## Variabili d'ambiente

Copia `.env.example` in `.env.local`:

```
LLM_BASE_URL=https://ollama.com/v1
LLM_API_KEY=...            # la tua key Ollama Cloud
LLM_MODEL=deepseek-v4.1-flash
MOCK=0
```

Su Vercel le stesse variabili vanno messe in *Settings → Environment Variables*.

## Deploy

Push su `main` → Vercel ricostruisce da solo. L'URL pubblico è quello che apre la giuria.

## Dati di esempio

`data/mock-education/` — tre testi brevi già pronti da incollare in demo, così nessuno
perde i primi dieci minuti a inventare contenuti.
