# Brief — AI on Campus · Student Tech Clash 2026 (edizione italiana)

Fonte: `https://studentclash.reply.com/` (homepage + config del sito) e
`https://studentclash.reply.com/challenges/AI_on_Campus_IT.html` (case study), letti il 7/11/2026.

## 1. Il concorso

- 10 università europee, un solo case study condiviso, 100% gratuito, nessuna competenza tecnica richiesta.
- Domanda a cui rispondere: *come cambia l'università quando l'AI è sempre disponibile, infinitamente paziente e ogni giorno più brava?*
- Date: Bicocca 7 nov (**oggi**, registrazioni chiuse) · PoliTo 7 nov · HEC Liège 9 nov · Imperial, PoliMi, Sapienza 14 nov · TUM 27-29 nov · Sheffield 28-29 nov · Centrale Supélec 3 dic.
- L'access code per aprire il case study in aula è 2798 (Bicocca); il sito di registrazione Bicocca è `studentclash.jemib.it`.
- Attenzione: `AI_on_Campus_IT.html`, `_UK.html` e `_BE.html` sono **tre case study diversi**, non traduzioni. L'italiano è il nostro.

## 2. Cosa dà punti (la pagina che nessuno guarda)

Classifica a punti della edizione in corso, con scadenze:

| Attività | Punti | Scadenza |
|---|---|---|
| BEST CASE STUDY | 25 | entro 11 dicembre |
| AI QUIZ | 20 | entro 4 dicembre |
| INSTAGRAM BATTLE | 15 | entro 4 dicembre |
| Scroll to Unlock — TREASURE HUNT | 10 | entro 11 dicembre |

Totale disponibile: 70 punti. **45 dei 70 non sono il prototipo** e si prendono con poche ore di lavoro
(quiz, post Instagram, lo scroll del sito). Nel 2025 Bicocca ha vinto proprio l'AI Quiz.
Edizione 2025, per riferimento: BEST CASE STUDY TECH 25 (TUM + Imperial) · BEST CASE STUDY BUSINESS 25
(PoliTo) · AI QUIZ 20 (Bicocca) · INSTAGRAM BATTLE 15 (PoliTo) · BEST PICS DURING THE EVENT 10 (Sapienza).

Conseguenza pratica — **inferenza, non regola scritta**: le date qui sopra sono quelle di *assegnazione dei
punti*, non un termine di consegna dichiarato. Da nessuna parte (case study né pagina JEMIB) c'è un
"submit by" esplicito. L'unico fatto certo è che oggi la giornata è una sola e finisce con il pitch.
Nel dubbio: **trattare oggi come scadenza** e chiedere a un mentor Reply se esiste una submission digitale
del caso studio entro l'11 dicembre per la classifica europea.

## 3. Livello 1 · obbligatorio — l'idea

- Un problema reale di **apprendimento, insegnamento o valutazione**, non di amministrazione/logistica
  (fuori scope: iscrizioni, tasse, orari, aule, servizi, trasporti).
- "Start with the problem, not the tool." Le tre direzioni suggerite:
  1. **Teaching** — Q&A sul contenuto delle lezioni, bozza del corso aggiornato dalle slide dell'anno prima,
     gemello digitale del docente.
  2. **Learning** — *domande che si adattano a ciò che sbagli di continuo* (non a ciò che non hai ancora visto);
     esame orale simulato con un tutor che insiste se il ragionamento è fragile.
  3. **Assessment** — feedback che spiega *perché* l'argomento non regge; *readiness check* che dice
     quali lacune contano ancora, non solo il voto totale.
- Pro tip: parti da un tuo corso/Esame specifico (uno corso, un esame, un momento preciso), e nomina i rischi
  (dati degli studenti, se il tool cade la sera prima dell'esame, chi non ha accesso affidabile).
- **Stage 1**: pitch di 60 secondi, senza slide — problema (chi e quando), soluzione AI, impatto.
  Devi saperlo difendere: contano le scelte, non solo l'idea.
- **Stage 2**: solo le prime 3 squadre, presentazione con slide, max 5 minuti.

## 4. Livello 2 · obbligatorio — il prototipo

Rispetto a un semplice chatbot, l'agente deve:

1. **Lavorare su materiale reale** — appunti, slide, sillabo, regolamenti d'esame, esercizi passati; non solo
   quello che il modello già sa.
2. **Fare qualcosa, non solo dire qualcosa** — almeno un'azione oltre la risposta: generare *e correggere* un quiz,
   tracciare gli errori ricorrenti, creare un piano di studio o un evento in calendario, segnalare una domanda al docente.
3. **Conoscere i propri limiti** — stare sul confine tra aiutare a pensare e pensare al posto dello studente:
   un tutor che guida invece di consegnare la risposta, un feedback che spiega invece di riscrivere.

Due strade: **Path A** senza codice (istruzioni scritte come specifica: ROLE · GOAL · KNOWLEDGE · RULES ·
PROCEDURE · MEMORY) o **Path B** con codice (Open Code / qualsiasi modello via API).

Architettura di riferimento: UI → orchestratore (loop plan→act→observe, con step budget e handoff umano) →
LLM → system prompt versionato in git → guardrail in codice → log di ogni step → tool (`search_notes`,
`generate_exercise`, `grade_answer`, `schedule_review`, `notify`) → memoria strutturata (profilo studente).

Consegnabili (Path B): README (come si lancia, modelli, librerie, logica custom) · repository funzionante ·
descrizione dell'architettura (input, conoscenza, tool, decisioni, output) · **interazioni d'esempio, di cui
almeno una in cui l'agente tiene il confine** · (opzionale) interfaccia o video demo.

## 5. Livello 3 · opzionale — tre strade indipendenti

- **Multi-agent**: un *Problem Identifier Agent* che produce un brief strutturato, poi almeno due *Solver Agent*
  con responsabilità diverse che ricevono lo stesso brief, proposte indipendenti (approccio, valore, rischi,
  assunzioni), orchestrazione/selezione trasparente, loop di chiarimento e un punto di controllo umano.
- **Knowledge graph**: ontologia piccola e mirata (classi, relazioni, proprietà), grafo popolato e validato
  (dire come hai controllato l'estrazione AI), agente che risponde *solo* dal grafo, mostra il percorso di
  ragionamento, cita la fonte e dice quando il grafo non ha la risposta. Tool: Protégé/OWL, Neo4j/Cypher,
  GraphDB/Jena SPARQL, RDFLib, NetworkX.
- **Launch campaign**: nome, tagline, canali (social, aule, email, passaparola, facoltà), calendario costruito
  sui momenti dell'anno accademico. Obiettivo: un mese dopo il lancio i target sanno che esiste e l'hanno provato.

## 6. Checklist di consegna (10 voci, dal sito)

Livello 1 — problema e chi lo vive · idea in linguaggio semplice · scenario d'uso in un momento reale ·
utente e contesto · misure di successo · pitch da 60" provato.

Livello 2 (Path B) — README · repository funzionante · architettura · interazioni d'esempio incl. il confine ·
interfaccia o video (opzionale).

## 7. Valutazione

Creatività & Innovazione **40%** · Impatto **20%** · Tecnico **20%** · Presentazione efficace **20%**.

Le tre domande che i giudici fanno a ogni livello:

1. È davvero nuovo, o solo più veloce?
2. Aiuta a pensare, o pensa al posto tuo?
3. Chi ci guadagna e chi resta fuori?

"Si vince concentrandosi su Livello 1 e 2"; il Livello 3 è un bonus, mai un requisito.
