# IDEA — T2T (N.S.T.T.P.)

**Niche Specific Topic Teaching Plan · Teaching to Teach**

Istruttori che sanno la materia e non sanno insegnarla: studenti universitari che danno
ripetizioni, allenatori, istruttori di scacchi. Nessuno ha mai insegnato loro un metodo.

Il prodotto è un agente che **affianca l'istruttore mentre insegna**, e gli insegna il
metodo mentre lo usa:

1. **Il gate.** Prima di vedere il piano, l'istruttore deve scommettere dove i suoi studenti
   si bloccheranno. Senza previsione la lezione non esce — bloccato anche lato server.
2. **Il piano con il perché.** Ogni blocco cita un principio didattico nominato e dice
   perché serve *a quegli studenti*. L'istruttore impara il metodo usando il metodo. Può
   cancellare blocchi: il piano è suo.
3. **Le due segnalazioni.** Gergo usato senza spiegarlo; passaggi che salta.
4. **Il debriefing.** Dettagli cos'è andato male, l'AI aggiorna i profili e propone il dopo.
   Confronta la sua previsione con l'esito: la metrica di successo è questa, non il voto.
5. **La mappa degli errori.** Cosa non è passato alla classe, e a chi.

Limite dichiarato: l'AI non scrive la lezione senza la scommessa, e i dati li può cambiare
l'istruttore. Esclusi: chi non ha connessione, chi non vuole essere profilato.

Prototipo: un agente con profilo studente, piano lezione e debriefing — tre schermate.

**Perché regge davanti alla giuria** — «aiuta a pensare o pensa al posto tuo?»: qui la
risposta non è nel prompt, è nel codice. La lezione non esiste finché la persona non ha
formulato un'ipotesi.

Caso scelto per la demo: tutor universitario di Statistica (inferenza) con tre matricole —
l'istruttore è uno studente, gli studenti sono studenti. Si cambia in `app/config.js`.
L'esempio originale (scacchi) resta valido: cambia solo il testo del materiale.
