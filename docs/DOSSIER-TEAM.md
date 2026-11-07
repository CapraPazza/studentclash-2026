# STUDENT TECH CLASH 2026 — AI ON CAMPUS
### Dossier completo per il team · Bicocca, 7 novembre 2026

Questo file contiene **tutto** quello che serve per lavorare sull'hackathon: la sfida, quello che i giudici
premiano, cosa va consegnato, la logistica della giornata e i punti ancora da chiarire.

**Come usarlo con Claude/ChatGPT:** carica il file e poi chiedi quello che ti serve — in fondo c'è una sezione
con prompt già pronti (ideazione, critica dell'idea, pitch da 60 secondi, README, interazioni d'esempio).
Il testo tra 「 」 è la **formulazione originale del sito** (in inglese): non riscriverla, è quella che i giudici
conoscono.

### Istruzioni per Claude (incollale come *Project instructions*)

> Sei il mentor tecnico della nostra squadra allo Student Tech Clash 2026, case study AI on Campus (Bicocca,
> 7 novembre 2026). Il dossier caricato nel progetto è la tua **unica fonte** per requisiti, criteri, checklist e
> vincoli.
>
> Regole:
> 1. Quando parli di un requisito o di un criterio, cita la formulazione originale tra 「 」.
> 2. Se una cosa non è nel dossier, dillo esplicitamente ("non è nel brief"): **non inventare scadenze, regole,
>    punteggi o sezioni del sito**.
> 3. I tre requisiti del Livello 2 (materiale reale, un'azione oltre la risposta, conoscere i propri limiti) sono
>    vincoli: se una proposta ne viola uno, segnalalo subito e proponi la correzione minima.
> 4. Usa le tre domande dei giudici come griglia di critica severa, mai come complimento.
> 5. Scrivi in italiano, frasi brevi, nessun preambolo. Se una richiesta è ambigua fai **una** domanda, non cinque.
> 6. Non proporre soluzioni che richiedano più di una giornata di lavoro: siamo in hackathon.

---

## 0. In mezza pagina

| | |
|---|---|
| **Evento** | Student Tech Clash di Reply — edizione 2026 「AI ON CAMPUS」 |
| **Data e luogo** | **oggi, 7 novembre 2026** · Università di Milano-Bicocca, Piazza dell'Ateneo Nuovo, Milano |
| **Squadre** | da **2 a 4** persone, ogni corso di laurea (anche diploma), nessuna competenza tecnica richiesta |
| **Chi c'è** | mentor Reply durante tutta la giornata + giuria di aziende e professori |
| **Premi** | premi per i **top 3** team · un premio speciale all'**università** con il punteggio più alto · gadget per tutti |
| **Costo** | gratuito |
| **La sfida** | 「Pick a real problem in learning or teaching at your university that students or teachers face, and design an AI-based solution.」 |
| **La regola d'oro** | 「**Start with the problem, not the tool.**」 |

Siamo una delle 10 università europee in gara (le altre: Manchester, PoliTo, HEC Liège, Imperial, PoliMi,
Sapienza, TUM, Sheffield, Centrale Supélec). Il case study è lo stesso per tutti, i punteggi si sommano a livello
di università: **non giochiamo solo per noi, giochiamo per la Bicocca**.

---

## 1. Come è strutturata la sfida

Tre livelli. **Livello 1 e Livello 2 sono obbligatori. Il Livello 3 è opzionale** — ma se lo si fa, viene
valutato anche quello: 「Levels 1 and 2 are required. Level 3 is optional. Every team must complete Level 1 and
Level 2. Anything you do in Level 3 is evaluated too.」

| Livello | Cosa chiede | Obbligo |
|---|---|---|
| **1 · Design the idea** | 「Choose a problem in teaching, learning or assessment. Shape an AI-based solution and pitch it in 60 seconds.」 | obbligatorio |
| **2 · Build the prototype** | 「Develop a working AI agent that shows the core of your idea. No code or code, your choice.」 | obbligatorio |
| **3 · Go further** | 「A multi-agent system, a knowledge graph or a launch campaign. Do one, two, all three, or as much as you can.」 | opzionale |

### Come si presenta (sul posto)

- **Stage 1 — pitch di 60 secondi, senza slide.** 「Problem, idea and impact. One minute, no slides.」
  Il test è esplicito: 「The goal is that, once the minute is up, your listeners can repeat your idea in their own
  words.」 Bisogna poi saper difendere le proprie scelte: 「Be ready to defend your reasoning when challenged.」
- **Stage 2 — solo per le prime 3 squadre.** Presentazione con slide, **massimo 5 minuti**, stesso filo:
  problema → idea → come funziona → impatto.

### La giornata, in ordine

Check-in e benvenuto → cerimonia di apertura (professori e Reply) → **Reply svela il case study** → si inizia a
costruire con i mentor → pranzo → hacking (si raffina la soluzione con i mentor) → fine lavori, ritocchi e
preparazione del pitch. Gli orari esatti non sono pubblicati: si scoprono in aula.

---

## 2. Livello 1 — il problema (obbligatorio)

La richiesta è ambiziosa e stretta insieme:

> 「Pick a real problem in learning or teaching at your university that students or teachers face, and design an
> AI-based solution.」

Vincolo di dominio, testuale:

> 「**Out of scope: administration and logistics.** Don't pick problems about how the university is run, such as
> enrolment, fees, timetables, room booking, campus services or transport. Your problem must be about how students
> learn, how teachers teach, or how learning is assessed.」

Cioè: **niente** iscrizioni, tasse, orari, aule, servizi, trasporti. Solo apprendimento, insegnamento, valutazione.

### I tre temi (direzioni suggerite)

Sono suggerimenti, non obblighi: 「If you have other ideas, feel free to work on them.」

#### ① Teaching — insegnare

「Teaching means understanding what students haven't grasped, adapting explanations, and creating materials for
diverse learners. AI could help, but it risks replacing the human judgement that makes teaching effective.」

Esempi del brief:
- Q&A istantaneo sul contenuto delle lezioni, dopo la lezione: 「so questions that never get asked in a 200-person
  hall actually get answered.」
- Trasformare slide e appunti dell'anno prima nella prima bozza del corso aggiornato: 「so the lecturer spends time
  on what changed, not reformatting.」
- Un *digital twin lecturer*: stessa conoscenza del docente umano, disponibile 24 ore su 24.

#### ② Learning — imparare

「Learning means understanding mistakes, building resilient mental models, and knowing what you truly know, not
just moving through material faster. AI can support this process or short-circuit it.」

Esempi del brief:
- **Domande di pratica che si adattano a ciò che sbagli di continuo** — 「not just what you haven't seen yet.」
- **Simulazione di esame orale** con un tutor virtuale che insiste quando il ragionamento è fragile.

#### ③ Assessment — valutare

「Assessment is meant to reveal what you actually know, not what you could find or generate. Today's exams often
measure the wrong things. AI could make assessment more honest, or make it easier to game.」

Esempi del brief:
- Feedback su un elaborato che spiega **perché** l'argomento non regge, non solo che non regge.
- **Readiness check** prima dell'esame: quali lacune contano ancora, non il voto complessivo.

### Le quattro raccomandazioni del brief (valgono come criteri di scelta dell'idea)

1. **Parti dalla tua esperienza** — 「A course where you got stuck, an exam you under-prepared for, an explanation
   that never landed. That's your sharpest material.」
2. **Più specifico è, meglio è** — 「One course, one exam, one precise moment beats "all students everywhere" every
   time.」
3. **Funzionerebbe senza AI?** — 「If yes, you probably don't need it. If no, that's your argument. Make it.」
4. **Nomina i rischi** — 「Who owns the student data? What happens if the tool goes down the night before an exam?
   Which students don't have reliable access? Projects that ignore these questions don't survive scrutiny.」

---

## 3. Livello 2 — il prototipo (obbligatorio)

「Now it's time to bring your idea to life. Develop a working AI agent that demonstrates the core functionality of
the solution you designed in Level 1.」

Rispetto a un semplice chatbot, l'agente **deve** avere queste tre cose. Sono i requisiti su cui si gioca il
punteggio tecnico e metà della credibilità dell'idea.

### Requisito 1 — Lavorare su materiale reale

「Draw on actual university content, such as lecture notes, slides, a syllabus, exam regulations, or past
exercises, not just what the model already knows.」

→ Il nostro materiale: appunti e slide di un corso vero, incollati o caricati come file di testo.

### Requisito 2 — Fare qualcosa, non solo dire qualcosa

「Take at least one action beyond replying, such as generating and scoring a quiz, tracking what a student keeps
getting wrong, creating a study plan or calendar entry, or flagging a question for the lecturer.」

→ Le azioni ammesse dal brief, in ordine di facilità: generare **e correggere** un quiz · tracciare gli errori
ricorrenti · creare un piano di studio o un evento in calendario · segnalare una domanda al docente.

### Requisito 3 — Conoscere i propri limiti

「Be designed to stay on the line between helping someone think and thinking for them. A tutor that guides instead
of handing over the answer, a feedback tool that explains instead of rewriting.」

→ Due esempi testuali da tenere a mente: **tutor che guida invece di consegnare la risposta**, **feedback che
spiega invece di riscrivere l'elaborato**. Consegnare la soluzione è un errore, non una gentilezza.

### Le due strade (se ne sceglie una)

- **Path A — no code / low code.** Si monta l'agente con strumenti AI pronti: si carica il materiale, si scrivono
  le istruzioni, e dove lo strumento lo permette si collega almeno un'azione o un workflow.
  「**Your instructions are your code**」: le istruzioni vanno scritte come una specifica, non come un desiderio,
  con una sezione per ciascuno di: **ROLE · GOAL · KNOWLEDGE · RULES · PROCEDURE · MEMORY**.
  Poi si cambia una sezione alla volta e si osserva l'effetto.
- **Path B — coding.** Si scrive codice in qualsiasi linguaggio, con qualsiasi modello via API o in locale.
  Il brief suggerisce **Open Code** (open source, Mac e Windows, template gratuiti inclusi, anche DeepSeek), ma
  vale qualsiasi strumento si sappia usare.

### Architettura di riferimento (dal brief)

「You do not need all of them: a solid **orchestrator + LLM + one tool + memory** is already a real agent.」

| Blocco | Contenuto |
|---|---|
| **USER INTERFACE** | chat · Telegram · Streamlit |
| **AGENT ORCHESTRATOR** | il loop: plan → act → observe · step budget · state · routing |
| **LLM** | reasoning + tool choice |
| **SYSTEM PROMPT** | role · goal · rules · procedure · output format · **versionato in git** |
| **GUARDRAILS** | input & output checks · refusal rules |
| **LOGS & EVALUATION** | ogni step tracciato → test set |
| **TOOLS** | `search_notes` (RAG su vector store) · `generate_exercise` · `grade_answer` / `run_tests` · `schedule_review` · `notify` |
| **MEMORY** | profilo dello studente (JSON / SQLite) · cronologia conversazione |

Le cinque spiegazioni del diagramma, utili da citare nel pitch:
- **Orchestrator** — 「the model thinks and picks an action, your code runs the tool, the result is observed, and the
  cycle repeats until it can answer. Cap it with a step budget; when the budget runs out or the agent is unsure,
  it hands over to a human.」
- **Tools** — 「functions with a name, a description and inputs. The model decides when to use them; your code
  decides what they can do.」
- **Memory** — 「what persists between sessions. Keep it structured, not just a long chat history.」
- **Guardrails** — 「rules in code, not only in the prompt. A prompt can be talked around; a check in code cannot.」
- **Logs** — 「record every step. They are your debugging tool and your testing evidence.」

### Le due raccomandazioni del brief

- **Attenzione allo scope** — 「Build one core flow well rather than many features poorly.」
- **Modelli e framework già pronti** — 「There's no time to train anything from scratch, and the value is in how you
  design the agent, not in the model underneath.」

---

## 4. Livello 3 — le tre strade facoltative

「Level 3 has three independent paths. They are not steps and there is no set order. Pick what interests you, mix
them, stop when you want. Whatever you bring counts.」 Si può fare una strada sola, due, tutte e tre, o fermarsi a
metà.

### Strada A — Sistema multi-agente

Un **Problem Identifier Agent** intervista l'utente e produce un *Problem Brief* strutturato; il brief diventa
l'input condiviso di **almeno due Solver Agent** con responsabilità diverse (es. learning design, fattibilità
tecnica, inclusione/rischio/governance); ogni solver produce una proposta indipendente con approccio
raccomandato, valore atteso, informazioni/tool necessari, rischi, assunzioni e considerazioni di implementazione.

Poi: **orchestrazione e selezione** (come le proposte vengono confrontate/combinate/scelte, con criteri
trasparenti o un punto di decisione umano), **loop di chiarimento** (se un solver trova il brief incompleto deve
chiedere chiarimenti mirati prima di proseguire) e **controllo umano** (dove una persona valida il problema, rivede
le alternative, approva o ferma il workflow, con assunzioni e incertezza sempre visibili).

### Strada B — Knowledge graph

Il grafo rende esplicite le relazioni tra studenti, corsi, concetti, prerequisiti, esami, criteri di valutazione,
docenti, competenze. 「A plain chatbot sees these relationships as loose text. A knowledge graph states them
explicitly. That means they can be queried, checked and corrected.」

Cosa ti dà, secondo il brief:
- **Explainability** — ogni risposta si traccia a nodi e relazioni. Esempio: 「You struggle with B because it requires
  A, and your last attempts on A failed.」
- **Controllability** — se un fatto è sbagliato, docente o studente lo correggono nel grafo: niente retraining.
- **Accountability** — ogni fatto registra provenienza, chi l'ha aggiunto e quando. 「Your graph is how your AI shows
  its work.」

Come si costruisce: **ontologia** piccola e mirata (classi, relazioni, proprietà — 「every class and relationship
should exist because your use scenario needs it」) → **popolamento** con dati reali o realistici, con estrazione
AI dagli scritti e **validazione esplicita** dell'estrazione (revisione manuale, campionamento, regole):
「A small, correct graph beats a large, noisy one.」 → **agente graph-grounded** che risponde solo dal grafo, mostra
il percorso di ragionamento, cita la fonte e dice chiaramente quando il grafo non ha l'informazione.

Tool indicati: Protégé/WebProtégé, OWL/RDF (Turtle) · Neo4j (Cypher), GraphDB o Apache Jena Fuseki (SPARQL),
RDFLib, NetworkX · qualsiasi LLM, LangChain/LlamaIndex per l'estrazione · Neo4j Browser/Bloom, WebVOWL, Streamlit,
Gradio per visualizzare.

Nota utilissima: 「**You can always use AI to generate your work.** AI can help draft the ontology, extract triples,
write SPARQL/Cypher queries or code your interface. What matters is that you understand, validate and can defend
what it produced.」

### Strada C — Campagna di lancio

「A useful tool is worthless if nobody uses it.」 Da progettare: **nome** facile da ricordare · **tagline** che
cattura il valore · **canali** (social, aule, email, passaparola, facoltà) · **calendario** costruito sui momenti
chiave dell'anno accademico. Ogni scelta va giustificata rispetto a chi si vuole raggiungere.
Obiettivo dichiarato: 「one month after launch, your target users know the tool exists and have tried it at least
once.」

---

## 5. Cosa va consegnato (checklist ufficiale, 10 voci)

### Livello 1 · Pitch (6 voci)
- [ ] Problema: cos'è e **chi lo vive**
- [ ] Idea: la soluzione AI in linguaggio semplice
- [ ] Scenario d'uso in un **momento reale**
- [ ] Utente target e contesto
- [ ] Misure di successo
- [ ] Pitch da 60 secondi **provato** ad alta voce

### Livello 2 · Prototipo, ramo coding (4 voci + 1 opzionale)
- [ ] **README**: come si lancia o si interagisce, modelli, librerie, framework usati, logica custom spiegata
- [ ] **Repository funzionante**: script, notebook o repo
- [ ] **Architettura**: cosa riceve in input, quale conoscenza usa, quali tool può chiamare, quali decisioni prende,
      cosa restituisce
- [ ] **Interazioni d'esempio**, incluse quelle in cui l'agente **tiene il confine**
- [ ] *(opzionale)* interfaccia/frontend oppure video demo

*(Se si scegliesse il ramo no-code: istruzioni dell'agente + nota sulle scelte di design · descrizione del
materiale e delle azioni · screenshot o export del setup · video demo opzionale.)*

### Se facciamo anche il Livello 3
- **Multi-agente**: il workflow, con brief condiviso, proposte indipendenti, criterio di selezione e punto di
  controllo umano.
- **Grafo**: ontologia spiegata · grafo popolato con fonti e nota sulla validazione · **almeno 3 interazioni
  d'esempio** con risposta, percorso di ragionamento e fonti, di cui **almeno una in cui il grafo non ha la
  risposta**.
- **Campagna**: la presentazione è obbligatoria; se possibile anche i materiali prodotti.

---

## 6. Come giudicano

### I quattro criteri e i loro pesi

| Criterio | Peso |
|---|---|
| **Creativity & Innovation** | **40%** |
| **Impact** | 20% |
| **Technical** | 20% |
| **Effective Presentation** | 20% |

Nessuna rubrica più dettagliata è pubblicata: contano questi quattro pesi e le domande qui sotto.

### Le tre domande che i giudici usano a ogni livello

1. **「Is this genuinely new, or just faster?」**
   「AI that speeds up existing processes without changing them is interesting. AI that changes what's possible is
   the goal.」
2. **「Does this help someone think, or does it think for them?」**
   「The line between support and substitution matters. Know which side your idea is on.」
3. **「Who benefits, and who might be left out?」**
   「Every design choice includes someone and excludes someone else. Be deliberate about it.」

### Due cose che il brief dice a chiare lettere

- 「**You can win by focusing on Levels 1 and 2.** A strong idea and a great working prototype are what matter most.
  **Level 3** is a bonus, never a requirement for winning.」
- Ricorda di nuovo l'out of scope: amministrazione, logistica, organizzazione dell'università.

### Lettura pratica dei pesi

Il 40% è "creatività e innovazione": un'idea che **accelera** qualcosa che già esiste prende poco, un'idea che
**cambia** cosa è possibile prende molto. Il 20% tecnico sono i tre requisiti del Livello 2. Il 20% di
presentazione è il pitch da un minuto + eventuali slide: va provato, non improvvisato.

---

## 7. Logistica e premi (pagina locale JEMIB × Reply)

- **Squadre 2-4 persone**, 「Combine technical, business and design skills」; aperto a ogni corso di laurea.
- **Mentor Reply** per tutta la giornata: 「They guide you through development, all the way to the pitch.」
  È la conversazione a più alto rendimento della giornata: chiedere a loro, non a Google.
- **Giuria**: aziende e professori, insieme a Reply.
- **Premi**: top 3 team · premio speciale all'università con il punteggio più alto · gadget per tutti.
- **Iscrizione**: form Google con login; **ogni membro del team deve compilare il form**, non solo il capo.
  Chi è senza squadra viene assegnato a una con posti liberi.
- Contatti: `studentclash@jemib.it` · Instagram/LinkedIn/TikTok `jemib_bicocca` · canali Reply (`replyulabs`).
- L'**access code** che sblocca il case study sul sito Reply per Bicocca è **2798** (per gli altri atenei cambia:
  PoliTo 3487, Manchester 1092, HEC 3479).

---

## 8. Punti aperti — da chiedere a un mentor o allo staff

1. **Consegna**: il case study si consegna in giornata o esiste una submission digitale successiva? Sul sito
   Reply la classifica riporta 「BEST CASE STUDY — 25 pts — By Dec 11th」, 「AI QUIZ — 20 pts — By Dec 4th」,
   「INSTAGRAM BATTLE — 15 pts — By Dec 4th」, 「Scroll to Unlock — TREASURE HUNT — 10 pts — By Dec 11th」.
   Sono le date di **assegnazione dei punti**: da nessuna parte è scritto "submit by". Da verificare.
2. **Le attività extra**: come si partecipano AI QUIZ, INSTAGRAM BATTLE e TREASURE HUNT? Le regole non sono
   pubblicate. Sono 45 punti su 70 che non riguardano il prototipo.
3. **Video demo**: è opzionale ma consigliato — c'è un formato o un limite di durata?

---

## 9. Il nostro stato (sezione locale, cancellabile se cambiamo idea)

Quello che abbiamo in piedi: una pagina web in cui si incolla il materiale di un corso (o si carica un `.txt`) e
si ottengono due cose — 3 domande di verifica, oppure un feedback su un elaborato con tre criteri votati 1-5.
Gira su Next.js, modello via API, e ha una modalità `MOCK=1` con risposte finte nel caso il wifi dell'aula non
regga (con un video registrato come piano B).

Dove siamo rispetto al brief, senza girarci intorno:

| Requisito Livello 2 | Stato |
|---|---|
| Materiale reale | ✅ sì, testo del corso incollato o caricato |
| **Un'azione oltre la risposta** | ❌ genera domande ma **non le corregge**, non traccia errori, non produce piani |
| **Conoscere i propri limiti** | ❌ le risposte sono già svelate sotto 「Risposta:」 — è l'esempio che il brief vieta |

Quindi il lavoro che manca è chiaro: un **loop risposta → correzione → lacune che restano** (il brief lo indica
come la versione non banale del tema Learning: 「Practice questions that adapt to what you keep getting wrong」),
con **indizio prima della soluzione** come confine dichiarato, e la lista delle fragilità che sopravvive al
refresh della pagina.

---

## 10. Vocabolario minimo (per parlarne tutti allo stesso modo)

- **Agente** — non un chatbot: un loop in cui il modello decide un'azione, il codice la esegue, il risultato torna
  al modello, e si ripete fino alla risposta. Con un tetto di passi (*step budget*).
- **Tool** — una funzione con nome, descrizione e input. Il modello sceglie *quando* usarla, il codice decide *cosa*
  può fare.
- **Memoria** — quello che sopravvive tra una sessione e l'altra, strutturato (profilo dello studente), non solo
  cronologia di chat.
- **Guardrail** — regole **nel codice**, non solo nel prompt: un prompt si può aggirare, un controllo no.
- **Log** — ogni passo registrato: serve a debuggare e a dimostrare che funziona.
- **RAG** — recuperare i pezzi rilevanti del materiale e darli al modello, invece di sperare che li sappia.
- **Readiness check** — controllo di prontezza all'esame: dice quali lacune contano ancora, non un voto.
- **Graph-grounded** — l'agente risponde solo da un grafo di conoscenza e mostra il percorso, citando le fonti.
- **Boundary (il confine)** — l'agente aiuta a pensare ma non pensa al posto tuo: guida, spiega, non consegna la
  soluzione e non riscrive l'elaborato.

---

## 11. Prompt pronti da incollare in Claude

**a) Scegliere il problema (Livello 1)**
> Sei un mentor dell'hackathon AI on Campus. Il vincolo è: un problema reale di apprendimento, insegnamento o
> valutazione all'università; fuori scope iscrizioni, tasse, orari, aule, servizi, trasporti. Aiutami a scegliere
> un problema specifico partendo da una mia esperienza concreta (te la racconto sotto). Fammi 5 domande una alla
> volta per arrivare a "un corso, un esame, un momento preciso", poi scrivi il problema in 3 righe: chi lo vive,
> quando, cosa succede oggi, perché l'AI serve e non basterebbe un PDF. Contesto: [il tuo corso/esame].

**b) Criticare l'idea con le tre domande dei giudici**
> Questa è la nostra idea: [descrizione]. Valutala con le tre domande dei giudici — (1) è davvero nuova o solo più
> veloce? (2) aiuta a pensare o pensa al posto dello studente? (3) chi ci guadagna e chi resta fuori? — e con i
> pesi Creativity 40%, Impact 20%, Technical 20%, Presentation 20%. Dammi un voto per criterio, la debolezza più
> grave da correggere prima del pitch, e i rischi (dati degli studenti, tool che cade la sera prima dell'esame,
> chi non ha accesso).

**c) Pitch da 60 secondi**
> Scrivi un pitch di 60 secondi (max 150 parole) su: problema [X], soluzione [Y], impatto [Z]. Struttura: chi vive
> il problema e quando, cosa facciamo, cosa cambia. Nessuna slide, nessun aggettivo superfluo. Poi dimmi quali 3
> frasi tagliare se sfora, e quali domande ostili dobbiamo aspettarci.

**d) Rendere il prototipo conforme al Livello 2**
> Il nostro prototipo fa [X]. Verifica tre requisiti: lavora su materiale reale? fa almeno un'azione oltre a
> rispondere (generare e correggere un quiz, tracciare gli errori ricorrenti, creare un piano, segnalare una
> domanda al docente)? conosce i suoi limiti (guida invece di consegnare la risposta, spiega invece di riscrivere)?
> Per ogni requisito mancante proponi la modifica più piccola che lo soddisfa, e scrivi il controllo che va messo
> **nel codice** e non solo nel prompt.

**e) README e architettura per la consegna**
> Scrivi il README del prototipo con: come si lancia, quali modelli/librerie/framework, cosa fa la logica custom,
> e una sezione "Architettura" che elenca input, conoscenza usata, tool chiamabili, decisioni prese, output.
> Poi scrivi 3 interazioni d'esempio realistiche, di cui **una in cui l'agente tiene il confine** e rifiuta di
> fare quello che l'utente chiede. Codice e contesto: [incolla].

---

### Fonti

- Case study (italiano): `studentclash.reply.com/challenges/AI_on_Campus_IT.html`
- Sito dell'evento: `studentclash.reply.com` (10 università, classifica, edizioni passate)
- Pagina locale Bicocca: `studentclash.jemib.it`
- Contatti: `studentclash@reply.com` · `studentclash@jemib.it`

*Nota: le pagine `AI_on_Campus_UK.html` e `AI_on_Campus_BE.html` sono case study **diversi**, non traduzioni.
Non mescolare i loro contenuti con il nostro.*
