"use client";

import { useEffect, useRef, useState } from "react";
import { app, demoStudents } from "./config";

function Chip({ children, tone }) {
  return <span className={`chip${tone ? " " + tone : ""}`}>{children}</span>;
}

export default function Page() {
  const [material, setMaterial] = useState("");
  const [students, setStudents] = useState(() => demoStudents.map((s) => ({ ...s, prediction: "" })));
  const [plan, setPlan] = useState(null);
  const [hidden, setHidden] = useState([]);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [blocked, setBlocked] = useState("");
  const [mock, setMock] = useState(false);
  const [log, setLog] = useState("");
  const [debrief, setDebrief] = useState(null);
  const [listening, setListening] = useState(false);

  const planRef = useRef(null);
  const recRef = useRef(null);
  const baseRef = useRef("");

  useEffect(() => {
    fetch("/api/chat")
      .then((r) => r.json())
      .then((d) => setMock(Boolean(d.mock)))
      .catch(() => {});
  }, []);

  const ready = material.trim().length >= 60 && students.every((s) => s.prediction.trim().length >= 3);
  const missing = students.filter((s) => s.prediction.trim().length < 3).map((s) => s.name);
  const blocks = plan ? (plan.blocks || []).filter((_, i) => !hidden.includes(i)) : [];
  const minutes = blocks.reduce((sum, b) => sum + (Number(b.minutes) || 0), 0);

  function setPrediction(id, value) {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, prediction: value } : s)));
  }

  async function call(action, extra = {}) {
    setError("");
    setBlocked("");
    setBusy(action);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, material, students, ...extra }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.blocked) setBlocked(data.error);
        else setError(data.error || "Errore sconosciuto.");
        return null;
      }
      setMock(Boolean(data.mock));
      return data.data;
    } catch {
      setError("Rete non raggiungibile. Se sei in demo: parte il video.");
      return null;
    } finally {
      setBusy("");
    }
  }

  async function generate() {
    const data = await call("plan");
    if (!data) return;
    setPlan(data);
    setHidden([]);
    setDebrief(null);
    setTimeout(() => planRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  async function runDebrief() {
    const data = await call("debrief", { plan, lessonLog: log });
    if (!data) return;
    setDebrief(data);
  }

  async function onFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setMaterial(await file.text());
    event.target.value = "";
  }

  function toggleMic() {
    const SR = typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : null;
    if (!SR) {
      setError("Questo browser non ha la dettatura: scrivi nel campo.");
      return;
    }
    if (listening) {
      recRef.current?.stop();
      return;
    }
    const rec = new SR();
    rec.lang = "it-IT";
    rec.continuous = true;
    rec.interimResults = true;
    baseRef.current = log ? log + " " : "";
    rec.onresult = (e) => {
      let text = "";
      for (let i = e.resultIndex; i < e.results.length; i += 1) text += e.results[i][0].transcript;
      setLog((baseRef.current + text).slice(0, 6000));
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => {
      setListening(false);
      setError("La dettatura si è interrotta: puoi sempre scrivere.");
    };
    rec.start();
    recRef.current = rec;
    setListening(true);
  }

  return (
    <main className="wrap">
      <header className="head">
        <h1>
          {app.name}
          <span className="sub">{app.full}</span>
          {mock && <span className="badge">MOCK</span>}
        </h1>
        <p>{app.tagline}</p>
      </header>

      <section className="card">
        <label htmlFor="material">{app.materialLabel}</label>
        <textarea
          id="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          placeholder={app.placeholder}
          spellCheck={false}
        />
        <div className="row">
          <label className="ghost">
            Carica un file
            <input type="file" accept=".txt,.md,text/plain" onChange={onFile} hidden />
          </label>
          <span className="count">{material.length} caratteri</span>
        </div>
        <p className="hint">{app.materialHint}</p>
      </section>

      <section className="card mt">
        <div className="stephead">
          <span className="stepnum">1</span>
          <div>
            <h2>La tua scommessa</h2>
            <p className="hint">
              Prima di vedere il piano: dove pensi che ciascuno si bloccherà? Sbagliare va bene, non saperlo no.
            </p>
          </div>
        </div>

        <div className="students">
          {students.map((s) => (
            <div className="student" key={s.id}>
              <div className="who">
                <strong>{s.name}</strong>
                <span className="lvl">{s.level}</span>
                <span className="note">{s.note}</span>
              </div>
              <input
                className="pred"
                value={s.prediction}
                onChange={(e) => setPrediction(s.id, e.target.value)}
                placeholder="Dove si bloccherà?"
                aria-label={`Previsione per ${s.name}`}
              />
            </div>
          ))}
        </div>

        <div className="gatebar">
          <button className="primary" onClick={generate} disabled={!ready || busy !== ""}>
            {busy === "plan" ? "Sto costruendo la lezione…" : "Genera la lezione"}
          </button>
          <p className={ready ? "gate ok" : "gate"}>
            {ready
              ? "Scommessa registrata: la lezione può uscire."
              : `Bloccato — manca la previsione per ${missing.join(", ")}. La lezione non esce senza.`}
          </p>
        </div>
        {blocked && <p className="error">{blocked}</p>}
        {error && <p className="error">{error}</p>}
      </section>

      {plan && (
        <section className="card mt" ref={planRef}>
          <div className="stephead">
            <span className="stepnum">2</span>
            <div>
              <h2>La lezione, con il perché</h2>
              <p className="hint">
                {blocks.length} blocchi · {minutes} minuti. Ogni blocco cita il principio che lo giustifica: è così che impari il
                metodo mentre lo usi. Puoi togliere quello che non ti convince — il piano è tuo.
              </p>
            </div>
          </div>

          <p className="objective">{plan.objective}</p>

          <ol className="blocks">
            {plan.blocks.map((b, i) =>
              hidden.includes(i) ? null : (
                <li className="block" key={`${b.title}-${i}`}>
                  <div className="blocktop">
                    <strong>{b.title}</strong>
                    <span className="mins">{b.minutes}′</span>
                    <button className="kill" onClick={() => setHidden((h) => [...h, i])} title="Togli questo blocco">
                      togli
                    </button>
                  </div>
                  <p className="line">
                    <span>Istruttore</span> {b.instructor}
                  </p>
                  <p className="line">
                    <span>Studenti</span> {b.students}
                  </p>
                  <p className="why">
                    <Chip tone="accent">{b.principle}</Chip> {b.why}
                  </p>
                </li>
              ),
            )}
          </ol>

          {hidden.length > 0 && (
            <p className="undo">
              {hidden.length} blocc{hidden.length === 1 ? "o" : "hi"} tolto da te.{" "}
              <button className="linkbtn" onClick={() => setHidden([])}>
                rimetti tutto
              </button>
            </p>
          )}

          {plan.flags?.length > 0 && (
            <div className="flags">
              {plan.flags.map((f, i) => (
                <div className="flag" key={i}>
                  <Chip tone={f.kind === "gergo" ? "warn" : "dim"}>{f.kind}</Chip>
                  <p className="ev">{f.evidence}</p>
                  <p className="fix">{f.fix}</p>
                </div>
              ))}
            </div>
          )}

          {plan.next_focus && (
            <p className="next">
              <span>Da verificare per primo</span> {plan.next_focus}
            </p>
          )}
        </section>
      )}

      {plan && (
        <section className="card mt">
          <div className="stephead">
            <span className="stepnum">3</span>
            <div>
              <h2>Dopo la lezione</h2>
              <p className="hint">
                Dettami com&apos;è andata: chi si è bloccato, dove, cosa hai saltato. I profili si aggiornano da qui.
              </p>
            </div>
          </div>

          <textarea
            className="log"
            value={log}
            onChange={(e) => setLog(e.target.value)}
            placeholder="Sara si è persa ricopiando la formula. Marco si è fermato al secondo passaggio e ha chiesto aiuto. Giulia ha fatto l'esercizio con i numeri ma non quello senza…"
          />
          <div className="row">
            <button className={`ghost${listening ? " rec" : ""}`} onClick={toggleMic} type="button">
              {listening ? "● sto ascoltando — ferma" : "Dettatura vocale"}
            </button>
            <button className="primary sm" onClick={runDebrief} disabled={log.trim().length < 20 || busy !== ""}>
              {busy === "debrief" ? "Sto confrontando…" : "Confronta con la mia previsione"}
            </button>
          </div>

          {debrief && (
            <div className="debrief">
              <div className="score">
                <strong>{debrief.hit_rate}</strong>
                <span>previsioni azzeccate</span>
              </div>

              <div className="verdicts">
                {debrief.verdicts?.map((v, i) => (
                  <div className={`verdict ${v.hit ? "hit" : "miss"}`} key={i}>
                    <div className="vhead">
                      <strong>{v.student}</strong>
                      <Chip tone={v.hit ? "ok" : "warn"}>{v.hit ? "previsto" : "mancato"}</Chip>
                    </div>
                    <p className="line">
                      <span>Avevi detto</span> {v.predicted}
                    </p>
                    <p className="line">
                      <span>È successo</span> {v.actual}
                    </p>
                  </div>
                ))}
              </div>

              {debrief.profile_updates?.length > 0 && (
                <div className="updates">
                  <h3>Profili aggiornati</h3>
                  {debrief.profile_updates.map((u, i) => (
                    <div className="update" key={i}>
                      <strong>{u.student}</strong>
                      <p>{u.change}</p>
                      <p className="because">{u.reason}</p>
                    </div>
                  ))}
                </div>
              )}

              {debrief.error_map?.length > 0 && (
                <div className="map">
                  <h3>Mappa della classe</h3>
                  {debrief.error_map.map((m, i) => (
                    <div className="maprow" key={i}>
                      <strong>{m.student}</strong>
                      <div className="tags">
                        {m.stuck?.map((t, j) => (
                          <Chip tone="warn" key={`s${j}`}>
                            {t}
                          </Chip>
                        ))}
                        {m.clear?.map((t, j) => (
                          <Chip tone="ok" key={`c${j}`}>
                            {t}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  ))}
                  <p className="legend">rossi = non è passato · verdi = passato</p>
                </div>
              )}

              {debrief.next_lesson && (
                <p className="next">
                  <span>La lezione dopo</span>
                  {String(debrief.next_lesson)
                    .split("\n")
                    .filter(Boolean)
                    .map((l, i) => (
                      <span className="nline" key={i}>
                        {l}
                      </span>
                    ))}
                </p>
              )}

              {debrief.needs_more && (
                <p className="needs">
                  <strong>Mi serve sapere:</strong> {debrief.needs_more}
                </p>
              )}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
