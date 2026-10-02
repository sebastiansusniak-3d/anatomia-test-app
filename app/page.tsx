"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  function start(e: FormEvent) {
    e.preventDefault();
    const nick = nickname.trim();
    if (nick.length < 2) return;
    localStorage.setItem("anatomia_nick", nick);
    router.push("/test");
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
		  <span
			style={{
			  fontSize: "12px",
			  fontWeight: 500,
			  color: "#6b7280",
			}}
		  >
			semestr: 2026/2027
		  </span>
		</a>
        <nav className="nav"><a href="/wyniki">Wyniki</a></nav>
      </header>

      <section className="hero">
        <div className="eyebrow">Przygotowanie do egzaminu - opracował Sebastian Suśniak</div>
        <h1>Sprawdź, ile pamiętasz z anatomii.</h1>
        <p className="lead">
          Pytania są przechowywane w jednej bazie. Dostaliśmy 6 zestawów pytań. W quizie nie ma pytań otwartych. Losowanych jest 20 pytań ze wszystkich zestawów.
        </p>

        <form className="card form" onSubmit={start}>
          <label className="label" htmlFor="nick">Twój nick</label>
          <input id="nick" className="input" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="np. Luiza :)" minLength={2} maxLength={30} required />
          <div className="actions">
            <button className="btn" type="submit">Rozpocznij losowy test →</button>
            <a className="btn secondary" href="/wyniki">Zobacz wyniki</a>
          </div>
        </form>
      </section>

      </main>
  );
}
