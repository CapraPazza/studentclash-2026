# Stato — 3 novembre 2026

## Fatto e verificato

| Cosa | Prova |
|---|---|
| Cartella progetto | `C:\Users\lurag\Documents\Hermes\studentclash-2026` |
| App Next.js 16 + React 19, JS puro | `npm run build` → compilato, 3 rotte |
| Pagina + azione "quiz" + azione "feedback" | rotta `/` risponde, titolo presente nell'HTML |
| Rotta `/api/chat` | `GET` → `{"mock":true,"model":"deepseek-v4.1-flash","hasKey":false}` |
| Validazione input | materiale corto → HTTP 400 |
| **Modalità mock offline** | `MOCK=1` → risposta completa senza rete |
| Repo GitHub privato | https://github.com/CapraPazza/studentclash-2026 |
| Primo commit | `chore: scheletro hackathon Student Tech Clash 2026` |

## Da fare (in ordine)

1. **Deploy Vercel** — richiede il tuo login (GitHub/Google). Importa
   `CapraPazza/studentclash-2026` da dashboard.vercel.com, framework rilevato da solo.
2. **Variabili d'ambiente su Vercel** — `LLM_API_KEY`, `LLM_MODEL`, `LLM_BASE_URL`.
3. **`.env.local` in locale** con la stessa key (mai committato).
4. **`opencode` nel PATH** — vedi `docs/CHECKLIST-PREFLIGHT.md`.
5. **Video demo + QR** — giovedì.
6. **Prova generale 90 minuti** — giovedì sera, con `docs/PIANO-SABATO.md`.

## Come si accende

```bash
cd ~/Documents/Hermes/studentclash-2026
npm run dev            # http://localhost:3000
MOCK=1 npm run dev      # senza rete: risposte finte pronte
```

## Cosa manca al prodotto (e va detto nel pitch)

Nessun login, nessun salvataggio, un documento alla volta, testo troncato a 12.000 caratteri.
