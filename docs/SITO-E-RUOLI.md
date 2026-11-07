# Chi fa cosa — tre persone, tutte le parti del sito

Sabato 7 novembre 2026, 13:58. Congelamento alle **15:00**. Tre persone:
una sull'interfaccia, una sull'AI/agente, una sulla presentazione.
La regola che ordina tutto: **si assegna un consegnabile, non un tool**. Ognuno deve poter
produrre da solo il proprio pezzo, e nessuno tocca il file di un altro.

---

## 0. Il fatto che cambia l'assegnazione

Il sito **è già costruito all'80% e non è online.**

| Cosa esiste già nel repo | Dimensione |
|---|---|
| Pagina intera, quattro sezioni in sequenza | `app/page.js`, 377 righe |
| Stile completo, CSS puro, un breakpoint | `app/globals.css`, 732 righe |
| Due prompt (piano, debriefing) con forma JSON fissata | `app/config.js`, 190 righe |
| Rotta server con i guardrail | `app/api/chat/route.js`, 154 righe |
| Mock offline, forma identica al vero | dentro `config.js` |

Alle 13:45 l'URL pubblico rispondeva ancora **"Studia con me" / "Genera domande"**: quelle
1.100 righe non sono committate. Quindi le prime cose da fare non sono né UI né AI, sono
**commit, push, deploy**. Durano dieci minuti e senza quelle il resto non esiste.

---

## 1. I pezzi del lavoro, con il padrone

| # | Pezzo | Cos'è concretamente | Stato | Padrone |
|---|---|---|---|---|
| 1 | **Struttura** | repo, build, tre rotte, `layout.js` che importa il CSS | ✅ | chi tiene il repo |
| 2 | **Funzionalità dell'agente** | due prompt, parsing JSON tollerante, timeout, limiti in codice, mock coerente | ✅ | **Agente** |
| 3 | **Interfaccia** | materiale → scommessa → piano → debriefing, con tutti gli stati (vuoto, busy, errore, bloccato) | ✅ | **UI** |
| 4 | **Stile e telefono** | CSS, breakpoint unico a 820px, da misurare a 390px | 🟡 | **UI** |
| 5 | **Memoria che sopravvive** | profili aggiornati + ultimo debrief in `localStorage` | ❌ zero `localStorage` | **UI** |
| 6 | **Dominio e contenuti** | nome, tagline, 3 studenti, principi, i due prompt, i due mock | ✅ ma tarato su Statistica | **Agente** |
| 7 | **Deploy e QR** | commit, push su `master`, Vercel, URL pubblico, QR | ❌ serve la vecchia app | **chi ha il repo** — prima di tutto |
| 8 | **QA end-to-end** | telefono sulla rete dell'aula, POST con materiale fuori dominio, stylesheet presente | ❌ | **Palco** guida, **UI** clicca |
| 9 | **Presentazione** | pitch 60" senza slide + i 5 minuti con slide per le prime 3 | ❌ | **Palco** |
| 10 | **Video demo** | stessa sequenza, montaggio a tagli (niente musica, niente titoli) | ❌ | **Palco** |
| 11 | **Consegna scritta** | README: come si lancia, modello, architettura, 3 interazioni di cui una in cui l'agente tiene il confine | ❌ è il README vecchio | **Agente** |

Legenda: ✅ fatto e verificato · 🟡 fatto ma non verificato · ❌ da fare.

**Perché la #5 e non un'altra.** Le altre parti del brief sono coperte o costano troppo. La
memoria è l'unica che (a) sta in 25 minuti, (b) si vede in demo con un refresh, (c) chiude la
domanda tecnica più scontata della giuria ("e i profili dove stanno?"). Se rompe il build si fa
revert e si dice "in questa versione la memoria vive nella sessione".

---

## 2. Le tre persone

| | **UI** | **Agente** | **Palco** |
|---|---|---|---|
| **Possiede** | La superficie visibile: `app/page.js`, `app/globals.css`, la memoria (#5) | Il cervello e la sua prova: `app/config.js`, `app/api/chat/route.js`, il README (#11) | La narrazione e la prova dal vivo: pitch, slide, video, cronometro (#9, #10, #8) |
| **Consegna** | Refresh → i profili restano; a 390px niente scroll orizzontale | Risposta JSON valida su materiale vero, gate che blocca, README con 3 interazioni | Pitch sotto 60", un altro del team che lo ripete a parole sue, video che parte offline |
| **Non tocca** | `config.js`, `route.js`, `main` | `page.js`, `globals.css`, `main` | il codice |
| **Deve saper fare da solo** | cambiare un pezzo di UI e vedere l'effetto | spiegare in una frase perché il piano non esce senza previsione | aprire l'app dal telefono e rifare i cinque click |

### Il buco che nessuno dei tre ha

Con tre persone e 60 minuti, **il deploy non è un quarto lavoro: è un prerrequisito di dieci
minuti**, e lo fa chi ha il repo (commit, push, vercel, grep dell'URL). Va fatto **prima** di
UI e AI, altrimenti alle 15:00 l'URL mostra ancora "Studia con me" e il resto vale zero.
Se chi ha il repo è il Palco, fa il deploy alle 13:58 e il pitch alle 14:10. Se è l'Agente, il
Palco in quei dieci minuti scrive la sequenza dei click.

### Perché l'AI non finisce all'UI, e viceversa

L'Agente non "aggiusta il sito": possiede il testo che il modello riceve. Un prompt cambiato
alle 14:40 cambia tutte le risposte della demo, quindi è l'unico che può toccarlo, e non dopo
le 14:35. L'UI non tocca i prompt per la ragione opposta: un ritocco al layout non deve poter
cambiare cosa risponde l'agente. Il confine è già scritto nel codice: `route.js:62`.

### Quando non siete d'accordo

- **Sull'idea e sul dominio**: decide chi ha il repo, dopo **un** giro di opinione (60 secondi).
- **Su come si vede una cosa**: decide l'**UI**, e nessuno riapre il discorso.
- **Su cosa dice il modello**: decide l'**Agente**.
- **Su "entra una feature alle 14:35?"**: vince il **no**. Default no, sempre.
- **Sul gate**: non è in discussione. È la risposta alla seconda domanda dei giudici.

### Se siete in quattro: il quarto fa i punti che non sono il prototipo

Il quarto non serve a scrivere più codice — è la persona che fa quello che gli altri tre non
faranno mai mentre costruiscono. Due mestieri, entrambi misurabili:

| # | Pezzo | Cos'è concretamente | Quando |
|---|---|---|---|
| 12 | **Punti non tecnici** | Sul sito Reply c'è una classifica `Activity · Winner · Point`: `BEST CASE STUDY 25 pts`, `AI QUIZ 20`, `INSTAGRAM BATTLE 15`, `TREASURE HUNT 10`. **Il sito non dice a chi vadano quei punti**: il voto del team è dichiarato solo come i quattro criteri (Creativity 40, Impact 20, Technical 20, Presentation 20). Da chiedere a un mentor | 13:58-14:30, poi di nuovo dopo il congelamento |
| 13 | **QA indipendente** | Rifà la demo **senza aiuto** e scrive i tre difetti più gravi: è l'unico che può dire "questo passaggio non si capisce" senza essere l'autore | 14:30-15:00 |

Un avvertimento sulle date: quelle voci di classifica sono **date di assegnazione dei punti**,
non scadenze di consegna. Il quarto le verifica con un mentor o con lo staff, e riporta la
risposta; finché non c'è una risposta, la scadenza è oggi.

**Rischio da evitare:** due persone "solo palco" con niente da fare. Se il Palco parla, il
quarto non parla: gestisce punti, QA, foto e il piano B.

### Se restate in due

L'Agente e il Palco si fondono: il pitch torna a chi ha il repo, il video a chi ha l'UI dopo il
congelamento. È la configurazione originale, con un pezzo in meno.

---

## 3. I sessanta minuti (13:58 → 15:00)

| Ora | UI | Agente | Palco |
|---|---|---|---|
| 13:58-14:10 | misura la pagina a 390px, scrive la lista dei difetti (non li corregge ancora) | **commit + push + deploy + grep dell'URL**: dice T2T e non "Studia con me" | scrive la sequenza dei 5 click e le 150 parole del pitch |
| 14:10-14:35 | ramo suo: `localStorage` per profili e debrief, più il difetto più grave della lista | README: architettura (input → conoscenza → tool → decisioni → output) + 3 interazioni, una in cui l'agente rifiuta | pitch a voce con il cronometro, tre volte; ritocca le slide dei 5 minuti |
| 14:35-14:45 | mostra la memoria al gruppo, poi merge | verifica il merge: build verde, deploy, modello che risponde su materiale fuori dominio | tiene il cronometro e dice quale frase del pitch non si capisce |
| 14:45-15:00 | demo dal telefono, guidata dal Palco | guarda i log e gli errori, non tocca niente | fa la demo come la farà davanti alla giuria |
| **15:00** | **CONGELAMENTO** — niente più codice, per nessun motivo | tag `demo-v1`, QR dell'URL | — |
| 15:10-15:40 | assiste il Palco sui click | scrive due righe di difesa per le tre domande dei giudici | **video** + pitch finale |
| 15:40-16:00 | — | — | piano B: se cade la rete parte il video, una frase sola |

---

## 4. Tre cose su cui non si discute

1. **Il gate resta nel codice.** `route.js:62` rifiuta il piano senza previsione: non si sposta
   nel prompt per fare prima.
2. **In produzione `MOCK` è spento.** Con il mock l'URL rispondeva sempre le stesse tre domande:
   sembrava funzionare e mentiva. Il piano B è il video, non il mock.
3. **Niente feature nuove dopo le 14:35.** Un hackathon si perde aggiungendo, non togliendo.

---

## 5. Tagliato, e come lo diciamo

| Cosa non c'è | La frase, a voce |
|---|---|
| Quiz corretti e ripasso sugli errori | «Le azioni di oggi sono il piano, i profili e la mappa degli errori; il quiz corretto è il prossimo passo, ed è il motivo per cui i profili esistono.» |
| Calibrazione dello studente (sicurezza prima del quiz) | «Lo studente che dichiara quanto è sicuro è la seconda metà: la previsione di oggi è quella dell'istruttore.» |
| Multi-agente e knowledge graph | «Un solo flusso fatto bene: lo dice il brief stesso.» |
| Account, salvataggio su server, più documenti | «Nessun backend: i profili restano nel browser. Un materiale, 12.000 caratteri, sei studenti.» |
| Consenso formale sui dati degli studenti | «Prima cosa da fare se andiamo avanti: il consenso, non una feature.» |

---

## 6. Il rischio numero uno

Se alle 15:00 l'URL pubblico è ancora la vecchia app, tutto il resto — UI, memoria, video,
pitch — vale zero. Il deploy viene prima di ogni altro pezzo e dura dieci minuti.
