/**
 * L'UNICO file da toccare per cambiare dominio.
 * Sabato: cambiate qui nome, tagline e prompt. Nient'altro.
 */

export const app = {
  name: "Studia con me",
  tagline: "Carica il materiale del corso. Il tutor lo legge e ti interroga.",
  placeholder:
    "Incolla qui il materiale del corso: appunti, slide, un capitolo. Oppure carica un file .txt o .md.",
};

export const actions = [
  { id: "quiz", label: "Genera domande", hint: "3 domande con risposta nascosta" },
  { id: "feedback", label: "Valuta un elaborato", hint: "feedback per criterio, con voti" },
];

export const prompts = {
  quiz: `Sei un tutor universitario. Ricevi materiale di studio e produci domande di verifica.
Regole:
- Esattamente 3 domande, dalla più facile alla più difficile.
- Ogni domanda deve essere rispondibile SOLO con quel materiale.
- Per ogni domanda, la risposta in massimo 3 righe, nascosta sotto "Risposta:".
- Alla fine, una riga: quali 2 concetti dello studente sembrano più fragili.
Formato: markdown, nessun preambolo, niente frasi di cortesia.`,

  feedback: `Sei un docente universitario che corregge un elaborato. Ricevi il testo e dai un feedback.
Regole:
- Valuta 3 criteri: chiarezza, uso del materiale, struttura. Voto 1-5 per criterio.
- Per ogni criterio: una cosa che funziona, una che va rifatta, in una riga ciascuna.
- Chiudi con la SINGOLA modifica più utile, in una frase.
Formato: markdown, nessun preambolo, nessuna frase di cortesia.`,
};
