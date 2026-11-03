# Ruoli e tool — due persone

Regola: ognuno possiede un **artefatto** che sa produrre da solo. Nessuno "impara un tool"
il giorno dell'evento.

| | Filippo (presidente) | Fritz |
|---|---|---|
| **Possiede** | L'app e l'URL pubblico; la parte tecnica del pitch | Una feature sul suo branch; la verifica end-to-end dal telefono; il video |
| **Tool** (max 2) | Hermes + `opencode run` + un push di deploy | Solo `opencode` + `AGENTS.md` + MCP doc (context7) |
| **Non tocca** | — | `main` |
| **Deve saper fare da solo** | Deploy, diagnosi da log di Vercel, rename del dominio in `config.js` | Modificare un testo/prompt, far girare la demo, rigenerare il video |

## Le 5 cose che bastano (non di più)

- `npm run dev` → l'app sul tuo PC, la vedi solo tu
- `git push` → salva e manda online; Vercel ricostruisce in ~1 minuto
- l'URL di Vercel è il sito vero, quello che apre la giuria
- `opencode run "..."` → chiedi una modifica, senza scrivere codice
- se il sito dà errore, la pagina del deploy su Vercel dice quale file: lo copi e lo dai all'agente

## Bus factor

Entrambi devono poter fare **tutto** il percorso demo. Se uno prende un raffreddore,
l'altro non può restare bloccato davanti a una textarea.
