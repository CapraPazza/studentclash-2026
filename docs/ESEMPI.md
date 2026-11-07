# Tre interazioni reali (output non modificati)

Registrate il 7 novembre 2026 contro `localhost:3000`, modello `deepseek-v4.1-flash` via Ollama Cloud.
Tempi misurati: piano **18,4 s**, debriefing **13,5 s**. Nessun `MOCK`.

---

## 1. Il confine — la lezione non esce senza la scommessa

Caso A: nessuna previsione inserita.

```http
POST /api/chat

{"action":"plan", "students":[{"name":"Sara","prediction":""},{"name":"Marco","prediction":""},{"name":"Giulia","prediction":""}]}

HTTP 400
{
  "blocked": true,
  "error": "Mancano 3 previsioni (Sara, Marco, Giulia). La lezione non esce prima."
}
```

Caso B: la scommessa c'è per Sara, manca per Marco e Giulia.

```http
HTTP 400
{
  "blocked": true,
  "error": "Mancano 2 previsioni (Marco, Giulia). La lezione non esce prima."
}
```

Il blocco è nel codice della rotta, non nel prompt: `app/api/chat/route.js`, `MIN_PREDICTION`. Il modello non viene nemmeno chiamato, quindi non può essere convinto a scrivere la lezione.

---

## 2. Il piano con il perché

**Obiettivo:** Alla fine gli studenti sapranno decidere, dato un output con statistica test, p-value e livello di significatività, se rifiutare H0 e scrivere la conclusione in una frase, esplicitando i passaggi usati.

**1. La catena decisionale del test** · 8′ · principio: `Segmentazione`
- Istruttore: Scrive alla lavagna la catena in 5 passi numerati: H0/H1 → statistica test (z o t) → p-value → confronto con il livello di significatività → decisione e frase di conclusione. Non svolge ancora numeri: nomina i passi e cosa produce ciascuno.
- Studenti: Copiano la catena su un foglio che useranno come checklist per il resto dell'ora; accanto a ogni passo scrivono 'so farlo / non so farlo'.
- Perché: Giulia ha le definizioni a memoria ma nessun ordine di esecuzione: la catena spezzata in 5 passi le dà la sequenza da seguire quando arriva l'esercizio.

**2. Esempio svolto: test z su una media** · 12′ · principio: `Effetto dell'esempio svolto`
- Istruttore: Svolge alla lavagna un esercizio del programma (test z, p-value, livello di significatività), verbalizzando ogni passo con il numero corrispondente della catena e fermandosi dove serve un calcolo.
- Studenti: Seguono sulla checklist e segnano con una X il passo in cui, da soli, si sarebbero fermati o avrebbero saltato.
- Perché: Marco tende a saltare i passaggi: vederli nominati uno per uno mentre si svolgono rende visibile il costo del salto senza chiedergli di ricostruire la procedura da zero.

**3. In coppia: decidere dal p-value** · 15′ · principio: `Pratica guidata con fading`
- Istruttore: Distribuisce tre mini-casi con p-value e livello di significatività già dati (per il caso con t indica nel testo quale test usare); gira tra i banchi, non corregge, annota le frasi di conclusione scritte.
- Studenti: In coppia: per ogni caso scrivono 'rifiuto / non rifiuto H0' e una frase di conclusione in italiano, citando p-value e livello di significatività usati.
- Perché: Sara si blocca sull'interpretazione del p-value: qui il p-value non va definito ma confrontato, e la conclusione va scritta, non solo riconosciuta tra opzioni.

**4. I casi che ingannano: p-value vicino al livello di significatività** · 10′ · principio: `Variazione (contrasto su casi limite)`
- Istruttore: Mostra 3-4 casi limite (p-value appena sopra e appena sotto il livello, livello di significatività diverso sullo stesso p-value) e chiede un voto per alzata di mano con motivazione; chiude nominando errore di I e II tipo e il loro legame con la decisione.
- Studenti: Votano, motivano in una frase, poi riscrivono la conclusione del caso in cui avevano votato male.
- Perché: A Giulia serve distinguere la definizione memorizzata dal criterio operativo, e a Sara vedere che la decisione dipende dal confronto con il livello, non da quanto 'piccolo' sembra il numero.

**5. Check individuale e autocorrezione** · 10′ · principio: `Pratica di recupero`
- Istruttore: Somministra 3 item vero/falso sul p-value e 1 micro-esercizio con test t; dopo 5 minuti proietta le soluzioni commentate passo per passo.
- Studenti: Rispondono da soli, poi confrontano con le soluzioni e cerchiamo insieme il passo della catena che ha prodotto l'errore.
- Perché: Verifica se Marco produce i passaggi da solo e se Giulia applica senza recitare la definizione; l'errore riemerge dentro l'ora, quando è ancora correggibile.

**6. Exit ticket: la catena a memoria** · 5′ · principio: `Effetto testing`
- Istruttore: Ritira un foglietto con la richiesta di riscrivere i 5 passi e di concludere il caso 'p-value = 0,03, livello = 0,05'.
- Studenti: Scrivono individualmente, senza appunti, e consegnano.
- Perché: Dà all'istruttore un dato osservabile su tutti e tre gli studenti prima della lezione successiva, invece di un'impressione lasciata dall'esercizio in coppia.


**Segnalazioni:**

- `gergo` — «p-value, livello di significativita» (punto 6 del programma): i termini sono elencati senza definizione operativa. → *Scrivere alla lavagna, prima del blocco 1, la definizione operativa di p-value e la regola 'rifiuto H0 se p-value ≤ livello di significatività', e usare solo quelle parole in tutta l'ora.*
- `passaggio` — «errori di I e II tipo» (punto 6): è l'ultimo elemento dell'elenco e nel piano rischia di essere compresso o saltato. → *Nel blocco 4 riservare due minuti fissi: rifiutare H0 vera = errore di I tipo, legato al livello di significatività; non rifiutare H0 falsa = errore di II tipo; far collegare a uno studente ciascun errore a un caso del blocco 3.*
- `passaggio` — «test z e t» (punto 6): il programma non indica il criterio con cui scegliere l'uno o l'altro. → *Non introdurre il criterio in questa lezione: indicare nel testo di ogni esercizio quale test usare e segnare la scelta z/t come domanda da riprendere con il programma alla mano.*

**Da verificare per primo:** Nel primo minuto della lezione successiva: leggere gli exit ticket e contare quanti scrivono la decisione come confronto tra p-value e livello di significatività (non come 'p piccolo'), e quanti nominano correttamente errore di I e II tipo.

---

## 3. Il debriefing — previsione contro realtà

**Racconto dettato dall'istruttore:**

> Sara ha risposto bene a istinto sull'output ma si è persa ricopiando la formula: fermata alla seconda riga di algebra. Marco si è fermato al secondo passaggio e ha chiesto aiuto, poi l'ha fatto da solo. Giulia ha fatto l'esercizio con i numeri, si è bloccata su quello senza numeri. Ho saltato la definizione di p-value.

**Esito: 2 su 3 previsioni azzeccate** (conteggio fatto dal codice, non dal modello).

- ❌ — Sara
  - avevi detto: si blocca sull'interpretazione del p-value
  - è successo: ha risposto bene a istinto sull'output, ma si è persa ricopiando la formula: fermata alla seconda riga di algebra
- ✅ — Marco
  - avevi detto: salta i passaggi e arriva alla conclusione sbagliata
  - è successo: si è fermato al secondo passaggio e ha chiesto aiuto, poi l'ha fatto da solo
- ✅ — Giulia
  - avevi detto: si blocca appena c'è un esercizio
  - è successo: ha fatto l'esercizio con i numeri, si è bloccata su quello senza numeri

**Profili aggiornati:**

- **Sara** → Aggiungere che il punto di blocco osservato non è l'interpretazione dell'output ma la trascrizione/algebra della formula: ha risposto bene a istinto sull'output e si è fermata alla seconda riga di algebra.
  - perché: Il racconto distingue una risposta istintiva corretta sull'output da un blocco successivo nella copiatura della formula.
- **Marco** → Aggiungere che, dentro la catena, non salta in silenzio: si ferma al secondo passaggio e chiede aiuto; dopo l'aiuto completa da solo.
  - perché: Il racconto riporta il fermo al secondo passaggio, la richiesta di aiuto e il completamento autonomo successivo.
- **Giulia** → Aggiungere che esegue l'esercizio quando ci sono numeri e si blocca su quello senza numeri.
  - perché: Il racconto separa l'esercizio con numeri, svolto, da quello senza numeri, dove arriva il blocco.

**Mappa della classe:**

- Sara · non passato: copia/algebra della formula · passato: interpretazione dell'output a istinto
- Marco · non passato: secondo passaggio della catena · passato: completamento dopo aiuto
- Giulia · non passato: esercizio senza numeri · passato: esercizio con numeri

**La lezione dopo:**

> Errore di metodo: hai saltato la definizione operativa di p-value prima della catena, violando il principio di pre-insegnare il lessico chiave prima di usarlo.
> Prossima lezione: 2 minuti su p-value e regola p ≤ α, poi dettare la catena in 5 passi con la stessa checklist.
> Poi: Sara rifà il passaggio algebrico con la formula a fianco, Marco esegue un caso completo senza aiuto, Giulia risolve un caso senza numeri partendo dallo schema.

**Cosa gli manca per sapere di più** (l'agente dichiara il vuoto invece di inventare):

> Per Marco: «poi l'ha fatto da solo» significa che ha prodotto la conclusione corretta o solo completato i passaggi? Per Giulia: l'esercizio con numeri era corretto o solo svolto? Per Sara: l'output su cui ha risposto a istinto riguardava il p-value o un altro dato?
