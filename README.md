# T2T — Teaching to Teach

L'agente che insegna a insegnare a chi sa la materia ma non ha mai imparato a spiegarla:
studenti universitari che danno ripetizioni, allenatori, istruttori di circolo.

**Il meccanismo, in una riga:** l'agente non scrive la lezione finché l'istruttore non ha
scommesso dove i suoi studenti si bloccheranno. Quando la lezione c'è, ogni blocco porta con
sé il principio didattico che lo giustifica. Dopo, la sua previsione viene misurata contro
la realtà.

Demo: uno studente che insegna **Statistica** a tre matricole.
Online: <https://studentclash-2026.vercel.app>

## Il percorso (tre schermate)

1. **Materiale** — il programma del corso, incollato o caricato. I contenuti della lezione
   vengono solo da lì: se un argomento manca, l'agente lo segnala invece di inventarlo.
2. **La scommessa** — un profilo per studente e un campo: «dove si bloccherà?». Il pulsante
   resta disabilitato finché le previsioni non ci sono, e **la rotta server rifiuta comunque**
   la richiesta senza di esse: il modello non viene nemmeno chiamato.
3. **Il piano e il debriefing** — quattro-sei blocchi da 60 minuti con *cosa fa l'istruttore*,
   *cosa fanno gli studenti*, *quanti minuti* e *perché*, con il principio citato. Segnalazioni
   di gergo non spiegato e passaggi che rischia di saltare. I blocchi si possono togliere:
   il piano è dell'istruttore. Poi detta com'è andata e riceve il confronto previsione/esito,
   i profili aggiornati con la motivazione, la mappa degli errori della classe e la lezione dopo.

## Comandi

```bash
npm install
npm run dev            # http://localhost:3000
MOCK=1 npm run dev      # senza rete: risposte finte, stessa forma JSON
npm run build            # deve passare prima di ogni push
```

## Architettura

| Pezzo | Dov'è | Cosa fa |
|---|---|---|
| Interfaccia | `app/page.js` | le tre schermate, stato nella sessione del browser |
| Orchestrazione | `app/api/chat/route.js` | valida, **applica il gate**, chiama il modello, interpreta il JSON |
| Conoscenza | materiale incollato dall'utente | nessun RAG: un documento per volta, troncato a 12.000 caratteri |
| Prompt | `app/config.js` | ruolo, regole, formato JSON; dominio e studenti di prova |
| Guardrail | `app/api/chat/route.js` | `MIN_PREDICTION`: senza previsione nessuna lezione. `MIN_LOG`: senza racconto nessun debriefing |
| Modello | Ollama Cloud, `deepseek-v4.1-flash` | endpoint OpenAI-compatibile, temperatura 0,3 |

Input: programma + profili + previsioni. Conoscenza: solo il testo fornito. Decisioni: quali
blocchi, con quale principio, quali segnalazioni. Output: JSON strutturato, reso dall'interfaccia.

Due scelte che tengono il prodotto onesto:

- **Il conteggio delle previsioni azzeccate lo fa il codice**, non il modello: se il modello
  scrive «2 su 3» ma i verdetti veri sono uno, vince il codice.
- **Il modello non vede il futuro**: nel debriefing gli è vietato inventare reazioni. Se il
  racconto è troppo vago scrive in `needs_more` la domanda che gli serve, invece di riempire.

## Interazioni d'esempio

`docs/ESEMPI.md` — tre interazioni registrate contro il server vero: il rifiuto (il confine),
il piano con il perché, il debriefing con previsione contro realtà. Output non modificati.

Misure sul deploy pubblico (`studentclash-2026.vercel.app`, 7/11/2026):

- `GET /api/chat` → `{"mock":false,"hasKey":true}`, stylesheet servito (1 `<link rel="stylesheet">`)
- piano su programma di Statistica → 18-22 s
- piano su materiale **fuori dominio** (corso di scacchi) → 21,8 s, risposta sugli scacchi:
  prova che segue l'input e non una risposta in scatola
- debriefing → 13-16 s

## Cosa non c'è (e va detto nel pitch)

- Nessun login, nessun salvataggio tra sessioni: chi ricarica riparte da zero.
- Un solo documento per volta, troncato a 12.000 caratteri.
- La dettatura usa il riconoscimento vocale del browser: senza, si scrive.
- Un solo verticale dimostrato (ripetizioni universitarie). Il dominio si cambia in `app/config.js`.

## Deploy

Push su `master` → Vercel. Le variabili `LLM_BASE_URL`, `LLM_MODEL`, `LLM_API_KEY` stanno in
*Settings → Environment Variables*; `MOCK` **non** va messa in produzione (l'esito si verifica
con un `GET /api/chat`: `mock` deve essere `false`).
