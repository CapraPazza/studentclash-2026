# AGENTS.md — Studia con me (hackathon)

> Letto a ogni sessione dall'agente di coding (OpenCode). Breve, concreto, veritiero.
> Se una regola qui dentro viene ignorata, la sessione va buttata.

## Cos'è

Una pagina web: lo studente incolla il materiale di un corso, l'app genera domande di
verifica o un feedback su un elaborato. Un solo utente: lo studente al primo anno, la sera
prima dell'esame.

## Percorso che conta (la demo è questa strada, non altre)

1. incollare il materiale (o caricare un `.txt`)
2. premere *Genera domande*
3. leggere le 3 domande generate
4. premere *Valuta un elaborato* sullo stesso materiale
5. aprire l'URL pubblico dal telefono: deve funzionare lì, non solo sul portatile

## Stack

- Runtime: Node 22/26, JavaScript (niente TypeScript: meno file, meno errori)
- Framework: Next.js 16, App Router, React 19
- Stile: CSS puro in `app/globals.css` (niente Tailwind: meno build da rompere)
- DB: nessuno. Lo stato vive nel browser
- Deploy: Vercel, da push su `main`
- Modello: Ollama Cloud, endpoint OpenAI-compatibile `https://ollama.com/v1`,
  key in `LLM_API_KEY` (mai nel codice)

## Comandi (usali, non inventarne altri)

```bash
npm install          # dipendenze
npm run dev          # http://localhost:3000
MOCK=1 npm run dev    # senza rete: risposte finte
npm run build        # deve passare prima di ogni push
```

## Regole di ingaggio

- Time-box: ogni task entro 30 minuti. Se sfora, fermati e proponi una scorciatoia.
- Prima funziona, poi è bello. Niente refactor non richiesti.
- Non aggiungere dipendenze senza dirlo prima (una riga: pacchetto, perché, peso).
- Non toccare `.env`, `.env.local`, `.env.*`, segreti o chiavi.
- Non riscrivere un file intero per cambiare poche righe: usa una patch.
- Se un requisito è ambiguo, scegli l'opzione più semplice e scrivila in `DECISIONS.md`.
- Il dominio si cambia SOLO in `app/config.js`: nome, tagline, azioni, prompt.

## Definition of done (per ogni task)

1. `npm run build` passa.
2. Il risultato è dimostrabile con un click, non "dovrebbe funzionare".
3. `DECISIONS.md` aggiornato con scelta e motivo.

## Cosa NON è finito (da dire apertamente nel pitch)

- Nessun login, nessun salvataggio: chi ricarica la pagina riparte da zero.
- Il testo lungo viene troncato a 12.000 caratteri.
- Un solo file per volta: niente RAG su più documenti.

## Dati di esempio

`data/mock-education/` — tre testi già pronti (microeconomia, biologia, diritto privato).
Si incollano nella textarea. Servono a non perdere i primi dieci minuti.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
