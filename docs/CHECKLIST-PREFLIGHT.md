# Checklist pre-flight — venerdì sera

Da fare **dal tuo terminale**, non da me: io ho runtime bundled che nascondono i problemi.
Se una voce è rossa, si sistema venerdì, non sabato.

## Sistema

- ☑ Node sul sistema: **già a posto** — `C:\Users\lurag\AppData\Local\hermes\node` è nel PATH utente,
  quindi `node -v` risponde da cmd/PowerShell. NON da git-bash (lo shim senza estensione stampa
  "stdin is not a tty"): è un problema della shell, non dell'installazione. `winget install
  OpenJS.NodeJS.LTS` è facoltativo, serve solo per avere un Node indipendente da Hermes.
- ☑ `npm -v` risponde (12.0.2)
- ☑ `git --version` risponde
- ☑ identità git: impostata **locale al repo** (`Filippo Luraghi` / `luraghi.filippo@protonmail.com`).
  Manca quella globale: se crei un altro repo, rifalla.
- ☑ `gh auth status` → logged in (CapraPazza)

## Progetto

- ☐ `cd Documents/Hermes/studentclash-2026 && npm run build` → passa senza errori
- ☐ `npm run dev` → http://localhost:3000 si apre
- ☐ `MOCK=1 npm run dev` → la demo funziona **con la rete staccata** (provalo davvero)
- ☐ `.env.local` esiste con la key, e **non** è nel repo: `git status` non lo mostra
- ☐ su Vercel le stesse variabili sono impostate
- ☐ l'URL pubblico apre da telefono in 4G, non solo dal tuo wifi

## Agenti

- ☐ `opencode` risolve nel terminale che userai: **oggi no**. Il wrapper è in
  `C:\Users\lurag\.local\bin\opencode.cmd`, ma quella cartella non è nel PATH.
  Fix: `setx PATH "%PATH%;C:\Users\lurag\.local\bin"` e riapri il terminale.
- ☐ `opencode run "rispondi solo: OK"` → risponde (prova provider + modello)
- ☐ `AGENTS.md` è nella radice del repo e dice il vero
- ☐ Fritz ha fatto almeno una modifica da solo con OpenCode, e ha visto il suo commit

## Demo

- ☐ video della demo sul Desktop, in un formato che parte offline (mp4)
- ☐ QR code dell'URL stampato o a schermo
- ☐ `data/mock-education/` aperto una volta: sai quale file incollare per primo
- ☐ batteria: caricatore, adattatore, powerbank
- ☐ hotspot del telefono provato come rete di riserva
