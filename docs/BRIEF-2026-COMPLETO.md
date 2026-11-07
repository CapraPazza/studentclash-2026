# Estrazione completa — Student Tech Clash 2026 · AI on Campus

Documento di lavoro: **tutte** le informazioni del sito, sezione per sezione, con la formulazione originale
(il sito è in inglese) e una nota in italiano dove serve decidere qualcosa.
Fonti e come sono state ottenute:

| Fonte | Cosa contiene | Come |
|---|---|---|
| `studentclash.reply.com` (homepage SPA) | chi/what/why, 10 università e date, classifica a punti, edizioni passate, contatti | rendering + config nel bundle `assets/index-iTZq20o2.js` |
| `studentclash.reply.com/challenges/AI_on_Campus_IT.html` | il case study italiano: Livello 1/2/3 + Evaluation (43 sezioni) | pagina statica, testo integrale (21.704 caratteri) |
| `studentclash.jemib.it` | pagina locale JEMIB × Reply: format, premi, scaletta della giornata | rendering (nessun orario pubblicato) |
| `_UK.html`, `_BE.html` | **case study diversi**, non traduzioni | solo heading, per non confonderli (appendice) |

Legenda: 「 」 = testo originale del sito, tradotto solo dove è tra parentesi `[it]`.
★ = punto che ha conseguenze dirette sul nostro lavoro.

## Indice delle 43 sezioni originali (verificato contro l'HTML)

Serve a ritrovare ogni pezzo sulla pagina del sito e a dimostrare che non manca nulla.

| # | Titolo originale (h) | Dove è qui |
|---|---|---|
| 1-3 | Design the idea · Build the prototype · Go further (h3) | B2 |
| 4 | Pick a real problem (h2) | B3 |
| 5-7 | Teaching · Learning · Assessment (h3) | B3, direzioni 1-3 |
| 8-11 | Start from your own experience · The more specific, the better · Would this still work without AI? · Name the risks (h3) | B3, pro tips |
| 12 | 60-second elevator pitch (h2) | B4 |
| 13 | Slide presentation, 5 minutes max (h2) | B5 |
| 14 | Build the prototype (h2) | B6 |
| 15-17 | Work with real material · Do something, not just say something · Know its limits (h3) | B6, requisiti 1-3 |
| 18 | Two ways to build. Pick one. (h2) | B6 |
| 19 | Deliverables (h3) — ramo *no code* | B6, Path A |
| 20 | Reference architecture (h3) | B6, Path B |
| 21 | Deliverables (h3) — ramo *coding* | B6, Path B |
| 22-23 | Manage scope carefully · Use pre-trained models and existing frameworks (h3) | B6, pro tips |
| 24 | Take it further (h2) | B7 |
| 25 | Your level, your rules (h3) | B7 |
| 26 | The multi-agent system (h3) | B7, Path A |
| 27-28 | A university is already a graph · Explainability, controllability, accountability (h3) | B7, Path B |
| 29-30 | No code / Low code · Coding (h3) — i due modi di costruire il grafo | B7, Path B |
| 31 | What to deliver (h3) | B7, Path B |
| 32 | The launch (h3) | B7, Path C |
| 33-36 | Name · Tagline · Channels · Timing (h3) | B7, Path C |
| 37 | Before you hand in (h2) | B8 |
| 38 | How your work is evaluated (h2) | B9 |
| 39 | Three questions to keep in mind (h2) | B9 |
| 40-42 | Is this genuinely new, or just faster? · Does this help someone think, or does it think for them? · Who benefits, and who might be left out? (h3) | B9 |
| 43 | Evaluation criteria (h2) | B9 |

---

# PARTE A — Il sito (homepage)

## A1. Hero

- Titolo: 「STUDENT TECH CLASH」 — sottotitolo 「AI ON CAMPUS」 — 「November 2026」.
- 「Join the 2026 edition of the Reply Student Tech Clash and dive into the future of education. Explore how AI
  is transforming the way we learn, teach and grow – competing with 10 universities all across Europe to
  reimagine the university of tomorrow.」
- CTA: 「Discover The Challenge」 → `#About`; secondo CTA in fondo: 「Register Now」 → `#Register`.

## A2. About — il manifesto

「AI is fundamentally changing what it means to learn. Not just the tools we use – but the entire system:
what should be taught, how knowledge should be assessed, and the role teachers and institutions play in a
world where artificial intelligence is always available, infinitely patient, and smarter every day.
This is one of the greatest opportunities of our generation – to redesign education from the ground up and
build something genuinely better.」

- **WHO** — 「Students from 10 of Europe's best universities will join the challenge. No technical background required.」
- **WHAT** — 「Working in teams, participants will reimagine university education in the age of AI: from lessons
  and assessment to the role of teachers.」
- **WHY** — 「A unique chance to tackle one of the most relevant questions of our time and to show the world how
  the next generation thinks about the future of learning.」

## A3. Numbers

「10 Universities Across Europe」 · 「One Challenge, Multiple Perspectives. Whether you're a coder, a strategist,
a designer, or a creative thinker, this challenge is for you.」
Statistiche mostrate: **10** Top Universities · **1** Global Vision · **100%** Free & Open to All.

## A4. Le 10 tappe (dati di configurazione del sito)

| Città | Data | Università | Stato iscrizioni | Registrazione | Case study |
|---|---|---|---|---|---|
| Milano | 7 novembre | Bicocca | **closed** | `studentclash.jemib.it` | `AI_on_Campus_IT.html` — access code **2798** |
| Manchester | 7-8 novembre | University of Manchester (dentro il GreatUni Hack) | closed | pagina UK | `AI_on_Campus_UK.html` — code 1092 |
| Torino | 7 novembre | Politecnico di Torino | closed | `jetop.com/clash_reply` | `AI_on_Campus_IT.html` — code 3487 |
| Liège | 9 novembre | HEC | closed | `hec-liege.jobteaser.com/...` | `AI_on_Campus_BE.html` — code 3479 |
| London | 14 novembre | Imperial College | open | `forms.gle/Wcrs76haqpDUyohN9` | — |
| Milano | 14 novembre | Politecnico di Milano | open | `bestmilan.it/events/3f10e0fd...` | — |
| Roma | 14 novembre | Sapienza | open | `bestroma.org/bestech-rome-reply-26` | — |
| München | 27-29 novembre | TUM | open | `hack.tum.de` | — |
| Sheffield | 28-29 novembre | University of Sheffield | soon | — | — |
| Paris | 3 dicembre | Centrale Supélec | soon | — | — |

★ Nota: Bicocca **oggi 7 novembre**, in giornata unica. Il case study si apre con un *access code* che Reply
fornisce in aula.

## A5. Classifica a punti (la parte che il sito non mostra a schermo pieno)

| Attività | Punti | Data indicata |
|---|---|---|
| BEST CASE STUDY | 25 | By Dec 11th |
| AI QUIZ | 20 | By Dec 4th |
| INSTAGRAM BATTLE | 15 | By Dec 4th |
| Scroll to Unlock — TREASURE HUNT | 10 | By Dec 11th |

Totale: 70 punti. ★ 45 dei 70 **non sono il prototipo**: quiz, post Instagram, scroll del sito.
★ Le date sono quelle di *assegnazione dei punti*, non un termine di consegna dichiarato: nessuna pagina
(case study o JEMIB) scrive "submit by". Va chiesto a un mentor.
★ Le meccaniche di AI QUIZ, INSTAGRAM BATTLE e TREASURE HUNT non sono descritte da nessuna parte del sito.

## A6. Edizioni passate (cosa hanno premiato davvero)

- **2025 · AGENTIC AI** — 1.200 studenti, 350 idee, 400 post social, 8 università.
  Classifica reale: BEST CASE STUDY TECH 25 pts → TUM + Imperial · BEST CASE STUDY BUSINESS 25 pts → PoliTo ·
  **AI QUIZ 20 pts → Bicocca** · INSTAGRAM BATTLE 15 pts → PoliTo · BEST PICS DURING THE EVENT 10 pts → Sapienza.
- **2024 · PROMPTING THE FUTURE** — 1.000 studenti, 250 idee, 300 post, 8 università.
- **2023 · GENERATIVE AI** — 800 / 200 / 250. **2022 · METAVERSE** — 200 / 50 / 250.
- **2021 · 5G** — 450 / 75 / 250. **2019-20 · GREEN IOT** — 650 / 160 / 250.
- **2018 · BIOTECH TRACEABILITY** — 250 / 65 / 600. **2017 · FUTURE OF PAYMENTS** — 900 / 250 / 800.
- **2016 · RETAIL** — 50 / 9 / 240 · **2016 · VIRTUAL REALITY** — 900 / 250 / 800 · **2016 · BANK RISK** — 200 / 40 / 250
  · **2016 · INVESTMENTS** 50 / 12 / 300 · **2015 · BLOCKCHAIN** 800 / 200 / 300 · **2015 · BANKING** 50 / 10 / 300
  · **2014 · IOT** 700 / 150 / 230 · **2013 · GAMIFICATION** 600 / 100 / 250.
- Contatto: `studentclash@reply.com`.

★ Nel 2026 le categorie sono state accorpate (un solo "BEST CASE STUDY" invece di TECH/BUSINESS) e sostituito
"BEST PICS" con il TREASURE HUNT.

---

# PARTE B — Il case study italiano, sezione per sezione

## B1. Intestazione

「AI on Campus Challenge — Student Tech Clash 2026 · Case study」
「Pick a real problem in learning or teaching at your university that students or teachers face, and design an
AI-based solution. **Start with the problem, not the tool.**」

## B2. How the challenge works

1. **Design the idea** (required) — 「Choose a problem in teaching, learning or assessment. Shape an AI-based
   solution and pitch it in 60 seconds.」
2. **Build the prototype** (required) — 「Develop a working AI agent that shows the core of your idea. No code or
   code, your choice.」
3. **Go further** (optional) — 「A multi-agent system, a knowledge graph or a launch campaign. Do one, two, all
   three, or as much as you can.」
4. **Evaluation** — 「Your work is evaluated across all three levels.」

Avviso in evidenza: 「**Levels 1 and 2 are required. Level 3 is optional.** Every team must complete Level 1 and
Level 2. Anything you do in Level 3 is evaluated too.」

## B3. Livello 1 — Pick a real problem

- Enunciato: un problema reale di apprendimento/insegnamento **alla tua università**, vissuto da studenti o
  docenti; soluzione basata su AI. 「Start with the problem, not the tool.」
- Tre direzioni suggerite, ma 「If you have other ideas, feel free to work on them.」
- **Fuori scope, testuale**: 「**Out of scope: administration and logistics.** Don't pick problems about how the
  university is run, such as enrolment, fees, timetables, room booking, campus services or transport. Your
  problem must be about how students learn, how teachers teach, or how learning is assessed.」

### Direzione 1 — Teaching
「Teaching means understanding what students haven't grasped, adapting explanations, and creating materials for
diverse learners. AI could help, but it risks replacing the human judgement that makes teaching effective.」
Esempi:
- Q&A istantaneo sul contenuto delle lezioni, dopo lezione, 「so questions that never get asked in a 200-person
  hall actually get answered.」
- Trasformare slide e appunti dell'anno prima nella prima bozza del corso aggiornato, 「so the lecturer spends
  time on what changed, not reformatting.」
- Un *digital twin lecturer* (link a un articolo del Times: un docente sostituito da un avatar AI), con la stessa
  conoscenza del docente umano ma disponibile 24 ore.

### Direzione 2 — Learning
「Learning means understanding mistakes, building resilient mental models, and knowing what you truly know, not
just moving through material faster. AI can support this process or short-circuit it.」
Esempi:
- **Domande di pratica che si adattano a ciò che sbagli di continuo**, 「not just what you haven't seen yet.」
- Simulazione d'esame orale con un tutor virtuale **che insiste** quando il ragionamento è fragile.

### Direzione 3 — Assessment
「Assessment is meant to reveal what you actually know, not what you could find or generate. Today's exams often
measure the wrong things. AI could make assessment more honest, or make it easier to game.」
Esempi:
- Feedback su un elaborato che spiega **perché** l'argomento non regge, non solo che non regge.
- *Readiness check* prima dell'esame: quali lacune contano ancora, non solo il punteggio complessivo.

### Pro tips Level 1
- **Start from your own experience** — 「A course where you got stuck, an exam you under-prepared for, an
  explanation that never landed. That's your sharpest material.」
- **The more specific, the better** — 「One course, one exam, one precise moment beats "all students everywhere"
  every time.」
- **Would this still work without AI?** — 「If yes, you probably don't need it. If no, that's your argument. Make it.」
- **Name the risks** — 「Who owns the student data? What happens if the tool goes down the night before an exam?
  Which students don't have reliable access? Projects that ignore these questions don't survive scrutiny.」

## B4. Stage 1 — il pitch da 60 secondi

「_Problem, idea and impact. One minute, no slides._」
- 「You have one minute to convince your audience that your idea deserves their attention. Present the problem
  (who experiences it and when), your AI-based solution, and the impact it could have.」
- 「Every word counts, so cut anything that doesn't help explain why your project is needed. The goal is that,
  once the minute is up, your listeners can repeat your idea in their own words.」
- 「Be ready to defend your reasoning when challenged. The idea matters, and so does your ability to explain why
  you made the choices you did.」
- C'è un **timer di pratica** nella pagina: `1:00`, Start/Reset; 「Rehearse out loud. The clock turns orange at 15
  seconds left.」

★ Il test concreto: chi ascolta deve poter **ripetere la tua idea con parole sue** dopo un minuto. Va provato
ad alta voce, cronometro alla mano.

## B5. Stage 2 — slide, se solo sei nei top 3

「_Only the top 3 teams move on to this stage._」 Massimo **5 minuti**, con slide: 「keep the story tight: the
problem, your idea, how it works and the impact it could have.」 Di nuovo: 「Be ready to defend your choices when
challenged.」

## B6. Livello 2 — Build the prototype

「Develop a working AI agent that demonstrates the core functionality of the solution you designed in Level 1.」
Rispetto a un semplice chatbot, l'agente deve:

### Requisito 1 — Work with real material
「Draw on actual university content, such as lecture notes, slides, a syllabus, exam regulations, or past
exercises, not just what the model already knows.」

### Requisito 2 — Do something, not just say something
「Take at least one action beyond replying, such as generating and scoring a quiz, tracking what a student keeps
getting wrong, creating a study plan or calendar entry, or flagging a question for the lecturer.」

### Requisito 3 — Know its limits
「Be designed to stay on the line between helping someone think and thinking for them. A tutor that guides
instead of handing over the answer, a feedback tool that explains instead of rewriting.」

### Due strade
「You can complete Level 2 in two ways. Choose the path that fits your team. No coding skills are required, but
if you enjoy coding, you're welcome to showcase your technical abilities.」
- **Path A — No code / Low code**: 「Perfect for beginners or non-technical participants. Assemble your agent with
  ready-made AI tools.」
- **Path B — Coding**: 「Ideal for participants with programming experience. Build your agent in any language, with
  any model.」

### Path A in dettaglio
- Metodo: caricare il materiale, scrivere le istruzioni, e 「where the tool allows, connect it to at least one
  action or workflow.」
- 「**Your instructions are your code:** make sure they reflect the goals, context and boundaries of your Level 1
  idea. Write your instructions like a specification, not a wish, with one section for each of:」
  **ROLE · GOAL · KNOWLEDGE · RULES · PROCEDURE · MEMORY** — 「Then you can change one section at a time and test
  the effect.」
- Consegne: le istruzioni dell'agente + nota sulle scelte di design · descrizione del materiale e delle azioni ·
  interazioni d'esempio, **di cui una in cui tiene il confine** · screenshot o export del setup ·
  (opzionale) breve video demo.

### Path B in dettaglio
- 「Build a more customised solution. Write code in any language to build your agent. Use any model through its
  API, or run one locally.」
- «We recommend using **Open Code**, which is open source, works on both Mac and Windows, and includes many free
  templates, including DeepSeek. If you're familiar with other tools, you can use whichever one you prefer.»

#### Reference architecture (testuale, blocco per blocco)
「Whatever your track, most agents share the same building blocks. You do not need all of them: a solid
**orchestrator + LLM + one tool + memory** is already a real agent.」

| Blocco | Contenuto scritto nel diagramma |
|---|---|
| USER INTERFACE | chat · Telegram · Streamlit |
| AGENT ORCHESTRATOR | the loop: plan → act → observe · step budget · state · routing |
| LLM | reasoning + tool choice |
| SYSTEM PROMPT | role · goal · rules · procedure · output format · **versioned in git** |
| GUARDRAILS | input & output checks · refusal rules |
| LOGS & EVALUATION | every step traced → test set |
| TOOLS | `search_notes` (RAG over vector store) · `generate_exercise` · `grade_answer` / `run_tests` · `schedule_review` · `notify` |
| MEMORY | learner profile (JSON / SQLite) · conversation history |

Spiegazioni del diagramma:
- **Orchestrator**: 「the model thinks and picks an action, your code runs the tool, the result is observed, and
  the cycle repeats until it can answer. Cap it with a **step budget**; when the budget runs out or the agent is
  unsure, it hands over to a human.」
- **Tools**: 「functions with a name, a description and inputs. The model decides when to use them; your code
  decides what they can do.」
- **Memory**: 「what persists between sessions. Keep it structured, not just a long chat history.」
- **Guardrails**: 「rules in code, not only in the prompt. A prompt can be talked around; a check in code cannot.」
- **Logs**: 「record every step. They are your debugging tool and your testing evidence.」
- Nota di lettura: il diagramma è largo e va scrollato in orizzontale.

#### Consegne Path B (5)
1. Documentazione tecnica (README): come si lancia o si interagisce, quali modelli/librerie/framework, e una breve
   spiegazione della logica custom.
2. Script, notebook o repository funzionante.
3. Descrizione dell'architettura: cosa riceve in input, quale conoscenza usa, quali tool può chiamare, quali
   decisioni prende, cosa restituisce.
4. Interazioni d'esempio, **incluse quelle in cui tiene il confine**.
5. (opzionale) interfaccia semplice o frontend, oppure breve video demo.

### Pro tips Level 2
- **Manage scope carefully** — 「Build one core flow well rather than many features poorly.」
- **Use pre-trained models and existing frameworks** — 「There's no time to train anything from scratch, and the
  value is in how you design the agent, not in the model underneath.」

## B7. Livello 3 — Take it further (opzionale)

「Level 3 has three independent paths. They are not steps and there is no set order. Pick what interests you, mix
them, stop when you want. Whatever you bring counts.」
- **Just one path** — go deep on the one you like most.
- **Any two** — combine them however you like.
- **All three** — if you have the time and energy.
- **As far as you get** — a partial path is welcome too.

### Path A — Multi-agent system
Estende il "Problem Identifier Agent" in un workflow multi-agente; il *Problem Brief* strutturato diventa l'input
condiviso di più *Solver Agent* specializzati; il sistema confronta, combina o seleziona le proposte e spiega
perché la raccomandazione finale si adatta al problema emerso in fase di discovery.

1. **Problem Identifier Agent** — intervista l'utente, fa domande di follow-up adattive, produce il Problem Brief.
2. **Multiple Solver Agents** — almeno due, con responsabilità distinte (es. learning design, fattibilità tecnica,
   inclusione/rischio/governance). Tutti ricevono **lo stesso** brief.
3. **Independent solution proposals** — ogni agente produce: approccio raccomandato, valore atteso per l'utente,
   informazioni/tool necessari, rischi, assunzioni, considerazioni di implementazione.
4. **Orchestration and selection** — come le proposte vengono confrontate/combinate/selezionate: Orchestrator
   Agent, Evaluator Agent, criteri di valutazione trasparenti, o un punto di decisione umano.
5. **Clarification loop** — se un Solver trova il brief incompleto, contraddittorio o vago, deve restituire una
   richiesta di chiarimento mirata **prima** di continuare.
6. **Human review and control** — dove una persona valida il problema, rivede le alternative, approva la
   raccomandazione o ferma il workflow. Assunzioni e incertezza devono restare visibili.

### Path B — Knowledge graph
「Universities are made of connected things: students, courses, lectures, concepts, prerequisites, exams,
assignments, grading criteria, lecturers, schedules, skills, careers. Most important questions in academic life
are really questions about relationships:」
- *Which concepts do I need before this one?*
- *Which part of the grading criteria does this essay fail to meet?*
- *Which courses lead to the skills this internship requires?*

「A plain chatbot sees these relationships as loose text. A knowledge graph states them explicitly. That means
they can be queried, checked and corrected.」

Tre proprietà che il grafo ti dà:
- **Explainability** — ogni risposta tracciabile a nodi e relazioni; es. 「You struggle with B because it requires
  A, and your last attempts on A failed.」
- **Controllability** — la conoscenza è visibile e modificabile: se un fatto è sbagliato, docente o studente lo
  correggono direttamente, senza retraining né riscritture di prompt.
- **Accountability** — ogni fatto registra provenienza, chi l'ha aggiunto e quando; quando l'AI sbaglia si trova
  il pezzo di conoscenza che l'ha causato e chi ne risponde.
- 「In education, an AI that cannot explain itself cannot be trusted to judge, guide or assess. **Your graph is how
  your AI shows its work.**」

Come si costruisce:
1. **Design the ontology** — vocabolario: classi (es. Student, Concept, Exam, Criterion, Skill), relazioni (es.
   requires, assesses, explains, leadsTo), proprietà chiave. 「Keep it small and purposeful: every class and
   relationship should exist because your use scenario needs it.」
2. **Populate the graph** — dati reali o realistici (materiali, sillabi, esami d'esempio, record sintetici); l'AI
   estrae entità e relazioni da fonti non strutturate. 「Validate what the AI produces: explain how you checked the
   quality of the extraction (manual review, sampling, rules) and what you corrected. A small, correct graph beats
   a large, noisy one.」
3. **Build a graph-grounded agent** — risponde o agisce sul grafo, non sulla conoscenza generale del LLM; per ogni
   risposta mostra il **percorso di ragionamento** (nodi e relazioni usati), **cita la fonte** dei fatti, e dice
   chiaramente quando il grafo **non** contiene l'informazione invece di inventarla.

Due modi di costruirlo, anche qui:
- **No code / Low code** — 「use any LLM interface to generate your ontology and graph (e.g. in Turtle or JSON
  format). Then design a structured prompt that makes the agent reason only on the graph and explain its reasoning
  path.」
- **Coding** — 「build a pipeline. LLM-based extraction → graph storage → an agent that translates questions into
  graph queries (SPARQL or Cypher) and explains the results.」

Tool suggeriti:

| Scopo | Tool |
|---|---|
| Ontology design | Protégé / WebProtégé, OWL / RDF (Turtle) |
| Graph storage & query | Neo4j (Cypher), GraphDB o Apache Jena Fuseki (SPARQL), RDFLib, NetworkX |
| LLM-based population | Any LLM, LangChain / LlamaIndex graph modules |
| Visualisation & interface | Neo4j Browser/Bloom, WebVOWL, Streamlit, Gradio |

Nota: 「**You can always use AI to generate your work.** AI can help draft the ontology, extract triples, write
SPARQL/Cypher queries or code your interface. What matters is that you understand, validate and can defend what
it produced.」

Consegne: ontologia (classi, relazioni, perché servono) · grafo popolato (visualizzazione o export + fonti e come
hai validato l'estrazione) · agente graph-grounded (prompt o codice + README) · **almeno 3 interazioni d'esempio**,
ognuna con risposta, percorso di ragionamento e fonti, **incluse almeno una in cui il grafo non ha la risposta** ·
(opzionale) video demo.

### Path C — The launch (campagna)
「A useful tool is worthless if nobody uses it.」 Da progettare: **Name** (facile da ricordare) · **Tagline** (che
cattura il valore) · **Channels** (social, aule, email, passaparola, facoltà) · **Timing** (calendario costruito
sui momenti chiave dell'anno accademico). 「Justify each choice based on who you want to engage.」
- Obiettivo: 「one month after launch, your target users know the tool exists and have tried it at least once.」
- Da consegnare: la **presentazione** è obbligatoria; se possibile anche i materiali prodotti (agente, documenti,
  file del prototipo).

## B8. Checklist "Before you hand in" (10 voci)

「Tick items as you go. Your ticks are saved in this browser only.」 / 「0 of 10 done. Clear ticks.」

**Livello 1 · Pitch slides (6)** — problema: cos'è e chi lo vive · idea: la soluzione AI in linguaggio semplice ·
scenario d'uso in un momento reale · utente target e contesto · misure di successo · pitch da 60″ provato.

**Livello 2 · Prototype — No code (3 + 1)** — istruzioni dell'agente + nota sulle scelte di design · descrizione
del materiale e delle azioni · screenshot o export del setup · (opzionale) video demo.

**Livello 2 · Prototype — Coding (4 + 1)** — README (come lanciare, modelli, librerie, logica custom) · script,
notebook o repository funzionante · architettura (input, conoscenza, tool, decisioni, output) · interazioni
d'esempio, incluse quelle in cui tiene il confine · (opzionale) interfaccia/frontend o video demo.

★ Il contatore dice 10 perché conta 6 + 4 (i video opzionali non entrano nel totale).
★ Incoerenza del sito, da conoscere: la checklist *no code* **non** elenca "example interactions", che invece
compare sia tra i consegnabili in prosa del Path A sia nella checklist *coding*. Se andiamo di Path B non cambia
nulla; se un giorno servisse il Path A, la voce resta comunque richiesta dalla prosa.

## B9. How your work is evaluated

- 「Evaluation covers all three levels of the challenge. Levels 1 and 2 are required, so every team is evaluated on
  both. Level 3 is optional: if you take it on, it is evaluated too, whichever paths you choose and however far
  you get.」
- 「**You can win by focusing on Levels 1 and 2.** A strong idea and a great working prototype are what matter
  most. **Level 3** is a bonus, never a requirement for winning.」
- Ripete l'out of scope: amministrazione, logistica, organizzazione dell'università.

### Le tre domande dei giudici (a ogni livello)
1. **Is this genuinely new, or just faster?** — 「AI that speeds up existing processes without changing them is
   interesting. AI that changes what's possible is the goal.」
2. **Does this help someone think, or does it think for them?** — 「The line between support and substitution
   matters. Know which side your idea is on.」
3. **Who benefits, and who might be left out?** — 「Every design choice includes someone and excludes someone else.
   Be deliberate about it.」

### Criteri
| Criterio | Peso |
|---|---|
| Creativity & Innovation | 40% |
| Impact | 20% |
| Technical | 20% |
| Effective Presentation | 20% |

Totale 100%. Nessun indicatore più fine dei quattro pesi, nessuna rubrica pubblica per criterio.

---

# PARTE C — La giornata a Bicocca (JEMIB × Reply)

Pagina: `studentclash.jemib.it` — 「Teams of 2 to 4」 · 「1 Case Study」 · 「FREE Participation」 ·
「November 7, 2026, University of Milano-Bicocca, Piazza dell'Ateneo Nuovo, 20126 Milano MI」.

- Format: squadre di **2-4** persone, 「Combine technical, business and design skills」 · 「Every field of study —
  Bachelor's, master's or high school diploma」 · **mentor Reply** 「They guide you through development, all the way
  to the pitch」 · giuria 「Companies and professors」 insieme a Reply.
- Premi: **Top 3 prizes** (i tre team migliori) · **Winning university** (premio speciale all'università con il
  punteggio più alto) · **Freebies for all**.
- Scaletta (senza orari pubblicati): Check-in (registrazione e benvenuto) → Opening ceremony (saluti di professori
  e Reply) → Case study presentation (Reply svela la sfida) → The hackathon begins (scegli l'idea, si costruisce
  con i mentor) → Lunch → Hacking time (si raffina la soluzione con i mentor) → End of work (ritocchi finali e
  preparazione del pitch).
- Contatti: `studentclash@jemib.it`; social JEMIB (IG, LinkedIn, TikTok) e Reply (IG, LinkedIn, FB, X).
- Iscrizione tramite form Google (login Google; **ogni membro del team compila il form**, non solo il capo;
  chi non ha un team viene assegnato a uno con posti liberi).

★ Incoerenze da non prendere per buone: il countdown della pagina dice "2 giorni" e "Registrations are open",
mentre il sito Reply dà Bicocca **closed** e la data è oggi. La pagina locale è probabilmente un residuo: non
usarla come fonte di orari o scadenze.

---

# PARTE D — Cosa questo significa per noi (sintesi operative)

## D1. Requisiti minimi per non essere fuori
1. Materiale reale (nostro: il testo del corso incollato o `.txt`).
2. Un'azione oltre la risposta — oggi manca: generiamo domande ma **non le correggiamo**, non tracciamo nulla,
   non produciamo piani.
3. Confine esplicito — oggi manca e per di più è violato: le risposte sono svelate sotto 「Risposta:」.

## D2. Dove siamo forti e dove siamo "solo più veloci" (40% del voto)
- "Solo più veloci" = generatore di domande + correttore di elaborati, come è adesso.
- Il brief indica la versione non banale: domande che si adattano a **ciò che sbagli di continuo**, e readiness
  check che dice **quali lacune contano ancora**. Il loop risposta→correzione→lacune persistite è il minimo per
  stare dalla parte giusta della prima domanda dei giudici.

## D3. Consegne che il repo deve contenere (Path B, coding)
README con modelli/librerie/logica custom · repo funzionante · descrizione architettura (input, conoscenza, tool,
decisioni, output) · **3 interazioni d'esempio, una al confine** · (opzionale) video demo.
Nel repo oggi: README presente, architettura ed esempi assenti.

## D4. Domande aperte da fare a un mentor
1. Il case study si consegna oggi o c'è una submission digitale entro l'11 dicembre (classifica BEST CASE STUDY)?
2. Come si prendono i punti di AI QUIZ, INSTAGRAM BATTLE e TREASURE HUNT — dove sono le regole?
3. Il video demo è "opzionale" ma consigliato: c'è un formato/limite di durata?

---

# Appendice — UK e BE sono altre sfide

Gli heading delle altre due versioni (per non confonderle con la nostra):

- `AI_on_Campus_UK.html`: 「Two experiments. Nearly identical tools. Opposite outcomes.」 · 「Pick a real problem」 ·
  「How to present」 · 「Build a functional prototype」 · 「Two implementation tracks. Pick one.」 ·
  「Advanced multi-agent harness」 · 「Before you hand in」 · 「How your work is evaluated」 · 「Three questions to keep
  in mind」 · 「Evaluation criteria」.
- `AI_on_Campus_BE.html`: 「A dual challenge for education」 · 「Two experiments. Nearly identical tools. Opposite
  outcomes.」 · 「Pick a real problem」 · 「What your concept must cover」 · 「From idea to business case」 ·
  「Prototype, user experience & responsible AI design」 · 「How your work is evaluated」 · 「Three questions to keep
  in mind」 · 「Evaluation criteria」.

★ Stesso scheletro (3 livelli, checklist, 4 criteri, 3 domande), **contenuti diversi**. L'italiano è il nostro.
