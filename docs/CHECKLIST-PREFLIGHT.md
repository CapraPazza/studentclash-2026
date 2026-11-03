# Checklist pre-flight — venerdì sera

Da fare **dal tuo terminale**, non da me: io ho runtime bundled che nascondono i problemi.
Se una voce è rossa, si sistema venerdì, non sabato.

## Sistema

- ☐ Node installato sul sistema: `node -v` → risponde (oggi **non** risponde: va installato)
- ☐ `npm -v` risponde
- ☐ `git --version` risponde
- ☐ identità git configurata: `git config --global user.name` e `user.email` (oggi **vuoti**)
- ☐ `gh auth status` → logged in

## Progetto

- ☐ `cd Documents/Hermes/studentclash-2026 && npm run build` → passa senza errori
- ☐ `npm run dev` → http://localhost:3000 si apre
- ☐ `MOCK=1 npm run dev` → la demo funziona **con la rete staccata** (provalo davvero)
- ☐ `.env.local` esiste con la key, e **non** è nel repo: `git status` non lo mostra
- ☐ su Vercel le stesse variabili sono impostate
- ☐ l'URL pubblico apre da telefono in 4G, non solo dal tuo wifi

## Agenti

- ☐ `opencode` risolve: `which -a opencode` (oggi **non** risolve nel mio PATH)
- ☐ `opencode run "rispondi solo: OK"` → risponde (prova provider + modello)
- ☐ `AGENTS.md` è nella radice del repo e dice il vero
- ☐ Fritz ha fatto almeno una modifica da solo con OpenCode, e ha visto il suo commit

## Demo

- ☐ video della demo sul Desktop, in un formato che parte offline (mp4)
- ☐ QR code dell'URL stampato o a schermo
- ☐ `data/mock-education/` aperto una volta: sai quale file incollare per primo
- ☐ batteria: caricatore, adattatore, powerbank
- ☐ hotspot del telefono provato come rete di riserva
