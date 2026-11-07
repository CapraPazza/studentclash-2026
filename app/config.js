/**
 * L'UNICO file da toccare per cambiare dominio.
 * Nome, materiale, studenti, principi didattici e i due prompt dell'agente.
 */

export const app = {
  name: "T2T",
  full: "Teaching to Teach",
  tagline:
    "Insegna a insegnare. L'agente non scrive la lezione finché non hai scommesso dove i tuoi studenti si bloccano.",
  materialLabel: "Il programma che stai insegnando",
  placeholder:
    "Incolla il programma del corso, il sillabo, le tracce d'esame. Oppure carica un .txt o .md.",
  materialHint:
    "Il piano si costruisce solo su questo testo. Se un argomento non c'è, l'agente lo segnala invece di inventarlo.",
};

/** Studenti di prova. `prediction` resta vuota: è la scommessa che deve fare l'istruttore. */
export const demoStudents = [
  {
    id: "sara",
    name: "Sara",
    level: "Matricola · 6 CFU",
    note: "18 al primo parziale. Studia leggendo le slide, non fa esercizi.",
  },
  {
    id: "marco",
    name: "Marco",
    level: "Matricola · lavora 30 h/settimana",
    note: "Vuole «andare al punto». Salta le formule: dice che tanto all'esame non servono.",
  },
  {
    id: "giulia",
    name: "Giulia",
    level: "Matricola · ripete l'esame",
    note: "Ha già fallito una volta. Sa le definizioni a memoria, si blocca appena c'è un esercizio.",
  },
];

/** I principi che l'agente può citare. Servono a rendere il metodo trasferibile, non magico. */
export const principles = [
  "carico cognitivo",
  "pratica guidata prima di quella autonoma",
  "errori come informazione",
  "recupero attivo",
  "scaffolding",
  "esempio concreto prima della definizione",
  "transfer su un caso nuovo",
];

export const prompts = {
  plan: `Sei un mentore didattico che affianca un istruttore competente nella materia ma senza formazione pedagogica. Il tuo compito non è fargli il lavoro: è fargli imparare un metodo mentre lo usa.

Ricevi in JSON: il programma del corso, i profili degli studenti, e per ogni studente la previsione dell'istruttore su dove si bloccherà.

Regole:
- Progetta UNA lezione da 60 minuti, in 4-6 blocchi.
- Ogni blocco ha: cosa fa l'istruttore, cosa fanno gli studenti, i minuti, e un "why" che cita UN principio didattico nominato e spiega in una riga perché quel blocco serve A QUESTI studenti (usando i profili e la previsione, non frasi generiche).
- Contenuti SOLO dal programma ricevuto. Se un argomento che servirebbe non c'è, mettilo nei flag come "passaggio" e non inventarlo.
- Segnala almeno un gergo usato senza spiegazione e almeno un passaggio che l'istruttore rischia di saltare. Se davvero non ce ne sono, restituisci un flag con kind "nessuno" e spiega perché.
- NON giudicare, correggere né commentare la previsione: quella si misura nel debriefing.

Rispondi SOLO con un oggetto JSON valido, senza markdown e senza testo attorno:
{"objective":"una frase: cosa sapranno FARE alla fine, osservabile",
 "blocks":[{"title":"","instructor":"","students":"","minutes":10,"principle":"uno dei principi","why":"una riga riferita a questi studenti"}],
 "flags":[{"kind":"gergo|passaggio|nessuno","evidence":"citazione dal programma o dal piano","fix":"come correggerlo"}],
 "next_focus":"cosa verificare nel primo minuto della lezione dopo"}`,

  debrief: `Sei lo stesso mentore didattico. L'istruttore ti detta com'è andata la lezione appena fatta. Devi aggiornare i profili degli studenti e misurare la sua previsione contro la realtà.

Ricevi in JSON: il programma, gli studenti con la previsione che l'istruttore aveva fatto, i blocchi della lezione, e il suo racconto di com'è andata.

Regole:
- Usa SOLO ciò che l'istruttore ha detto. Non inventare reazioni, voti o episodi. Se il racconto è troppo vago per aggiornare un profilo, scrivilo in "needs_more" con la domanda precisa da fargli.
- Per ogni studente: la previsione, cosa è successo davvero secondo il racconto, e hit true/false.
  hit è true quando il punto di rottura osservato è LO STESSO di quello previsto, anche se le parole sono diverse
  (es. previsto «salta i passaggi» e osservato «si è fermato al secondo passaggio»: stesso punto, hit true).
  Non premiare la precisione lessicale e non punire una previsione più generica ma centrata.
  Se la previsione nomina una categoria e il fatto osservato sta in quella categoria, è hit true
  (previsto «si blocca su un esercizio» + osservato «si blocca sull'esercizio senza numeri» = stessa categoria, hit true).
  Se invece il fatto osservato è di natura diversa (previsto il concetto, osservato il calcolo), è hit false.
  Se il racconto non parla di quello studente, hit false e actual "non osservato".
- Gli aggiornamenti di profilo devono essere visibili e circostanziati: cosa si aggiunge al profilo e perché quel fatto lo giustifica.
- La mappa degli errori divide, per ogni studente, gli argomenti in cui si è bloccato da quelli che sono passati.
- Chiudi con il prossimo passo in 3 righe: cosa cambia nella lezione successiva e perché.
- Nessun complimento, nessuna frase di cortesia. Se l'istruttore ha sbagliato metodo, dillo in una riga e spiega quale principio ha saltato.

Rispondi SOLO con un oggetto JSON valido, senza markdown e senza testo attorno:
{"verdicts":[{"student":"","predicted":"","actual":"","hit":true}],
 "hit_rate":"es. 2 su 3",
 "profile_updates":[{"student":"","change":"","reason":""}],
 "error_map":[{"student":"","stuck":["argomento"],"clear":["argomento"]}],
 "next_lesson":"3 righe",
 "needs_more":""}`,
};

/** Risposte offline (MOCK=1). Stessa forma del JSON vero: la UI non se ne accorge. */
export const mocks = {
  plan: {
    objective:
      "Alla fine della lezione sanno decidere, davanti a un output, se rifiutare l'ipotesi nulla e spiegare a voce perché.",
    blocks: [
      {
        title: "Il caso che ha sbagliato Marco",
        instructor:
          "Legge ad alta voce un output con p-value 0,03 e chiede: «questo farmaco funziona?». Non spiega ancora niente.",
        students: "Rispondono a istinto, uno alla volta. Nessuna formula alla lavagna.",
        minutes: 8,
        principle: "esempio concreto prima della definizione",
        why: "Sara e Giulia hanno le definizioni ma non le hanno mai applicate a un output vero: partire dal caso le costringe a usare il criterio prima di nominarlo.",
      },
      {
        title: "Da dove esce quel numero",
        instructor:
          "Scrive la formula dell'ipotesi nulla e la applica al caso appena visto, un passaggio per riga.",
        students: "Ricopiano ogni passaggio sul loro foglio e segnano dove si perdono.",
        minutes: 12,
        principle: "pratica guidata prima di quella autonoma",
        why: "Marco salta i passaggi algebrici per arrivare al risultato: farlo ricopiare un passaggio per riga gli rende visibile che il salto è il punto in cui si perde.",
      },
      {
        title: "Tre output, uno è un tranello",
        instructor:
          "Distribuisce tre esercizi: uno con p-value, uno con intervallo di confidenza, uno senza numeri.",
        students: "Lavorano in coppia, poi confrontano la scelta con un'altra coppia.",
        minutes: 20,
        principle: "errori come informazione",
        why: "Giulia si blocca appena c'è un esercizio: qui l'errore è previsto e discusso, non corretto dall'insegnante.",
      },
      {
        title: "Spiegarlo a chi non c'era",
        instructor: "Chiede a ciascuno di spiegare in 60 secondi il criterio a un compagno assente.",
        students: "Spiegano a turno, senza appunti aperti.",
        minutes: 12,
        principle: "recupero attivo",
        why: "È il test onesto del fatto che la definizione a memoria di Giulia sia diventata un criterio usabile.",
      },
    ],
    flags: [
      {
        kind: "gergo",
        evidence: "«p-value», «significatività», «ipotesi nulla» usati nel primo blocco senza definirli",
        fix: "Nel primo minuto: «p-value è quanto spesso vedrei un risultato così estremo se il farmaco non facesse niente». Una frase, poi si va avanti.",
      },
      {
        kind: "passaggio",
        evidence: "il programma non contiene la distinzione tra errore di primo e secondo tipo",
        fix: "Non inventarla: o la aggiungi al materiale, o la rimandi alla lezione dopo dichiarandolo in apertura.",
      },
    ],
    next_focus: "Al minuto zero, chiedi a Giulia di rifare l'esercizio senza numeri: è quello dove si è bloccata.",
  },

  debrief: {
    verdicts: [
      {
        student: "Sara",
        predicted: "si blocca sull'interpretazione del p-value",
        actual: "ha risposto bene a istinto, si è persa ricopiando la formula",
        hit: false,
      },
      {
        student: "Marco",
        predicted: "salta i passaggi e arriva alla conclusione sbagliata",
        actual: "si è bloccato al secondo passaggio della formula e ha chiesto aiuto",
        hit: true,
      },
      {
        student: "Giulia",
        predicted: "si blocca appena c'è un esercizio",
        actual: "ha fatto l'esercizio con i numeri, si è bloccata su quello senza numeri",
        hit: true,
      },
    ],
    hit_rate: "2 su 3",
    profile_updates: [
      {
        student: "Sara",
        change: "Sa usare il criterio, non sa ricostruire il calcolo",
        reason: "Risposta a istinto corretta, poi persa alla prima riga di algebra: il problema non è il concetto.",
      },
      {
        student: "Marco",
        change: "Il salto non è pigrizia: è che non sa di doverlo dichiarare",
        reason: "Si è fermato al secondo passaggio e ha chiesto aiuto: quando il passaggio è reso obbligatorio, lo fa.",
      },
    ],
    error_map: [
      { student: "Sara", stuck: ["ricostruire la formula"], clear: ["interpretare il p-value"] },
      { student: "Marco", stuck: ["passaggi algebrici"], clear: ["scelta del test"] },
      { student: "Giulia", stuck: ["esercizio senza numeri"], clear: ["esercizio con i numeri"] },
    ],
    next_lesson:
      "Sara: dieci minuti di algebra su un caso già risolto, prima di aggiungere concetti.\nMarco: dai il passaggio già scritto e chiedigli solo di dichiarare cosa cambia.\nClasse: il caso senza numeri va rifatto in apertura, è l'unico punto che non è passato a quasi nessuno.",
    needs_more: "",
  },
};
