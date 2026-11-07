# DECISIONS.md

Una riga per decisione: cosa, perché, chi. Si aggiorna mentre si costruisce, non dopo.

| Data | Decisione | Motivo | Chi |
|---|---|---|---|
| 2026-11-03 | Next.js 16 + React 19, App Router | Un solo target di deploy (Vercel), streaming e API route nello stesso repo | Filippo |
| 2026-11-03 | JavaScript, non TypeScript | Meno file, meno errori di build sotto un timer | Filippo |
| 2026-11-03 | CSS puro, non Tailwind | Una build in meno che può rompersi il giorno dell'evento | Filippo |
| 2026-11-03 | Nessun database, nessun login | Il valore della demo è il percorso, non la persistenza | Filippo |
| 2026-11-03 | Due azioni configurabili (quiz / feedback) invece di una | Il caso studio non si conosce: così la scommessa vale 20 minuti, non una giornata | Filippo |
| 2026-11-03 | `MOCK=1` come modalità di prima classe | Il wifi dell'aula è il killer numero uno delle demo | Filippo |
| 2026-11-03 | Risposta non in streaming + effetto macchina da scrivere lato client | Sembra viva, ma una sola rotta da far funzionare | Filippo |
| 2026-11-07 | Produzione **senza** `MOCK`: `LLM_API_KEY` su Vercel, `MOCK` rimosso da Production | Con `MOCK=1` in produzione l'URL pubblico restituiva sempre le tre domande di microeconomia qualunque materiale si incollasse: sembrava funzionare, mentiva alla giuria | Filippo |
| 2026-11-07 | Rendering markdown minimale lato client (titoli, elenchi, grassetto) invece di stampare il testo grezzo | Il modello risponde in markdown: senza renderer la demo mostrava `**Risposta:**` e `## Domanda 1` davanti alla giuria | Filippo |
| 2026-11-07 | Il pubblico si aggiorna **solo** con codice committato: nessuna demo dal portatile | Alle 13:45 l'URL ufficiale serviva ancora la vecchia app ("Studia con me", "Genera domande") mentre il T2T era solo locale: la giuria avrebbe visto il progetto sbagliato | Filippo (con Fritz) |
| 2026-11-07 | Una sola parte nuova prima del congelamento: la memoria dei profili in `localStorage`. Quiz corretti, calibrazione e compiti restano fuori | 75 minuti al freeze: il brief chiede «one core flow well rather than many features poorly». Le parti tagliate si dichiarano nel pitch, non si costruiscono a metà | team |

## Aperte

- Modello di sabato: `deepseek-v4.1-flash` (1M contesto) oppure un modello più veloce se la risposta tarda.
- Nome del prodotto: provvisorio.
