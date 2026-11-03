"use client";

import { useEffect, useRef, useState } from "react";
import { app, actions } from "./config";

export default function Page() {
  const [material, setMaterial] = useState("");
  const [loadingId, setLoadingId] = useState(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [mock, setMock] = useState(false);
  const [shown, setShown] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    fetch("/api/chat")
      .then((r) => r.json())
      .then((d) => setMock(Boolean(d.mock)))
      .catch(() => {});
  }, []);

  // effetto macchina da scrivere: fa sembrare viva anche una risposta non in streaming
  useEffect(() => {
    if (!result) {
      setShown("");
      return;
    }
    let i = 0;
    clearInterval(timer.current);
    setShown("");
    timer.current = setInterval(() => {
      i += 4;
      setShown(result.slice(0, i));
      if (i >= result.length) clearInterval(timer.current);
    }, 10);
    return () => clearInterval(timer.current);
  }, [result]);

  async function run(id) {
    setError("");
    setResult("");
    setLoadingId(id);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ material, action: id }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Errore sconosciuto.");
        return;
      }
      setMock(Boolean(data.mock));
      setResult(data.text || "");
    } catch {
      setError("Rete non raggiungibile. Se sei in demo: parte il video.");
    } finally {
      setLoadingId(null);
    }
  }

  async function onFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setMaterial(await file.text());
    event.target.value = "";
  }

  return (
    <main className="wrap">
      <header className="head">
        <h1>
          {app.name}
          {mock && <span className="badge">MOCK</span>}
        </h1>
        <p>{app.tagline}</p>
      </header>

      <section className="grid">
        <div className="card">
          <label htmlFor="material">Materiale del corso</label>
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
        </div>

        <div className="card">
          <label>Azioni</label>
          <div className="actions">
            {actions.map((a) => (
              <button
                key={a.id}
                className="action"
                onClick={() => run(a.id)}
                disabled={loadingId !== null}
              >
                <strong>{loadingId === a.id ? "Sto leggendo…" : a.label}</strong>
                <span>{a.hint}</span>
              </button>
            ))}
          </div>
          {error && <p className="error">{error}</p>}
        </div>
      </section>

      <section className="output">
        {loadingId && <p className="dots">Analisi del materiale in corso…</p>}
        {!loadingId && !shown && !error && <p className="empty">Il risultato comparirà qui.</p>}
        {shown && <pre className="result">{shown}</pre>}
      </section>
    </main>
  );
}
