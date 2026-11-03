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

## Aperte

- Modello di sabato: `deepseek-v4.1-flash` (1M contesto) oppure un modello più veloce se la risposta tarda.
- Nome del prodotto: provvisorio.
