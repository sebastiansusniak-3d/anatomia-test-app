"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

 type Question = {
  id: number;
  setNumbers: number[];
  text: string;
  options: string[];
  images: { path: string; alt: string | null }[];
};

const letters = ["A", "B", "C", "D"];

export default function TestPage() {
  const router = useRouter();
  const [requestedSet, setRequestedSet] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [nick, setNick] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const n = localStorage.getItem("anatomia_nick");
    if (!n) { router.replace("/"); return; }
    setNick(n);

    const setFromUrl = new URLSearchParams(window.location.search).get("set");
    setRequestedSet(setFromUrl);
    const endpoint = setFromUrl ? `/api/test/start?set=${encodeURIComponent(setFromUrl)}` : "/api/test/start";
    fetch(endpoint)
      .then(r => r.json())
      .then(data => {
        setQuestions(data.questions ?? []);
        setAnswers(Array((data.questions ?? []).length).fill(-1));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [router]);

  if (loading) return <main className="container"><div className="card" style={{marginTop:50}}>Losuję pytania…</div></main>;

  if (questions.length === 0) {
    return (
      <main className="container">
        <div className="card" style={{marginTop:50}}>
          <h2>Brak pytań</h2>
          <p className="muted">Ten zestaw nie został jeszcze uzupełniony.</p>
          <a className="btn secondary" href="/">← Wróć</a>
        </div>
      </main>
    );
  }

  const q = questions[current];
  const selected = answers[current];
  const progress = ((current + 1) / questions.length) * 100;
  const last = current === questions.length - 1;

  function choose(index: number) {
    const copy = [...answers];
    copy[current] = index;
    setAnswers(copy);
  }

  async function finish() {
    if (answers.some(a => a < 0)) {
      alert("Odpowiedz na wszystkie pytania przed zakończeniem testu.");
      return;
    }
    setSending(true);
    const res = await fetch("/api/test/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: nick, questionIds: questions.map(q => q.id), answers })
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Nie udało się zapisać wyniku.");
      setSending(false);
      return;
    }
    router.push(`/wyniki?mine=${encodeURIComponent(nick)}&result=${data.score}&total=${data.total}&percentage=${data.percentage}`);
  }

  return (
    <main className="container">
      <header className="topbar">
  <a
    className="brand"
    href="/"
    style={{
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.25,
      textDecoration: "none",
    }}
  >
    <span style={{ fontSize: "20px", fontWeight: 800 }}>
      Anatomia z fizjopatologią
    </span>

    <span
      style={{
        fontSize: "12px",
        fontWeight: 500,
        color: "#6b7280",
        marginTop: "4px",
      }}
    >
      prowadząca: J. Sieplińska
    </span>

    <span
      style={{
        fontSize: "12px",
        fontWeight: 500,
        color: "#6b7280",
      }}
    >
      opiekun: L. Męrzecka-Strzałek
    </span>
  </a>

  <div className="muted">
    Grasz jako <strong>{nick}</strong>
  </div>
</header>

      <div className="card" style={{maxWidth:850, margin:"20px auto 60px"}}>
        <div className="quiz-head">
          <div className="question-no">Pytanie {current + 1} z {questions.length}</div>
          <div className="muted">{requestedSet ? `Zestaw ${requestedSet}` : "Losowy test"}</div>
        </div>
        <div className="progress"><div style={{width:`${progress}%`}} /></div>

        <div className="question">{q.text}</div>

        {q.images.length > 0 && (
          <div className="question-images">
            {q.images.map((image) => (
              <img key={image.path} src={image.path} alt={image.alt ?? "Ilustracja do pytania"} />
            ))}
          </div>
        )}

        <div className="options">
          {q.options.map((option, i) => (
            <button key={i} className={`option ${selected === i ? "selected" : ""}`} onClick={() => choose(i)}>
              <span className="letter">{letters[i]}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>

        <div className="actions" style={{justifyContent:"space-between"}}>
          <button className="btn secondary" disabled={current === 0} onClick={() => setCurrent(Math.max(0, current - 1))}>← Wstecz</button>
          {!last ? (
            <button className="btn" disabled={selected < 0} onClick={() => setCurrent(current + 1)}>Dalej →</button>
          ) : (
            <button className="btn" disabled={sending || selected < 0} onClick={finish}>
              {sending ? "Zapisywanie…" : "Zakończ test ✓"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
