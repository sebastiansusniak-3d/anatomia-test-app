import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AttemptDetailsPage({
  params
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;

  const id = Number(attemptId);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const attempt = await prisma.attempt.findUnique({
    where: {
      id
    },
    include: {
      answers: {
        orderBy: {
          id: "asc"
        }
      }
    }
  });

  if (!attempt) {
    notFound();
  }

  const percentage = attempt.percentage;

  return (
    <main className="container">
      <header className="topbar">
        <a className="brand" href="/">
          ANATOMIA<span style={{ color: "#4f46e5" }}>.</span>
        </a>

        <nav className="nav">
          <a href="/wyniki">← Wyniki</a>
        </nav>
      </header>

      <section
        className="card result"
        style={{
          maxWidth: 850,
          margin: "25px auto"
        }}
      >
        <div className="eyebrow">
          Szczegóły testu #{attempt.testNumber}
        </div>

        <div
          className={`score ${
            percentage >= 50 ? "good" : "bad"
          }`}
        >
          {percentage}%
        </div>

        <p
          className="lead"
          style={{ margin: "15px auto" }}
        >
          <strong>{attempt.nickname}</strong>, wynik{" "}
          <strong>
            {attempt.score}/{attempt.total}
          </strong>{" "}
          punktów.
        </p>

        <div
          className="actions"
          style={{ justifyContent: "center" }}
        >
          <a className="btn" href="/test">
            Zagraj ponownie
          </a>

          <a className="btn secondary" href="/wyniki">
            ← Historia wyników
          </a>
        </div>
      </section>

      <section
        className="card"
        style={{
          maxWidth: 850,
          margin: "25px auto 60px"
        }}
      >
        <div style={{ marginBottom: 25 }}>
          <div className="eyebrow">
            Odpowiedzi
          </div>

          <h2 style={{ margin: "5px 0" }}>
            Historia odpowiedzi
          </h2>

          <p
            className="muted"
            style={{ margin: 0 }}
          >
            Sprawdź swoje odpowiedzi oraz prawidłowe
            odpowiedzi dla każdego pytania.
          </p>
        </div>

        {attempt.answers.length === 0 ? (
          <div className="muted">
            Dla tego testu nie zapisano jeszcze odpowiedzi.
          </div>
        ) : (
          <div>
            {attempt.answers.map((answer, index) => {
              const options = Array.isArray(answer.options)
                ? answer.options.map(String)
                : [];

              const letters = ["A", "B", "C", "D"];

              const selectedAnswer =
                answer.selectedAnswer;

              const correctAnswer =
                answer.correctAnswer;

              return (
                <article
                  key={answer.id}
                  style={{
                    borderTop:
                      index === 0
                        ? "none"
                        : "1px solid #e5e7eb",
                    paddingTop:
                      index === 0 ? 0 : 24,
                    marginTop:
                      index === 0 ? 0 : 24
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "flex-start",
                      gap: 15,
                      marginBottom: 12
                    }}
                  >
                    <div>
                      <div
                        className="eyebrow"
                        style={{
                          marginBottom: 6
                        }}
                      >
                        Pytanie {index + 1}
                      </div>

                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 18,
                          lineHeight: 1.45
                        }}
                      >
                        {answer.questionText}
                      </div>
                    </div>

                    <div
                      style={{
                        flexShrink: 0,
                        fontWeight: 700,
                        fontSize: 14
                      }}
                      className={
                        answer.isCorrect
                          ? "good"
                          : "bad"
                      }
                    >
                      {answer.isCorrect
                        ? "✓ Poprawna"
                        : "✗ Błędna"}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: 8
                    }}
                  >
                    {options.map((option, optionIndex) => {
                      const isSelected =
                        selectedAnswer ===
                        optionIndex;

                      const isCorrect =
                        correctAnswer ===
                        optionIndex;

                      let background =
                        "transparent";

                      let border =
                        "1px solid #e5e7eb";

                      if (isCorrect) {
                        background =
                          "rgba(34, 197, 94, 0.10)";
                        border =
                          "1px solid rgba(34, 197, 94, 0.45)";
                      }

                      if (
                        isSelected &&
                        !isCorrect
                      ) {
                        background =
                          "rgba(239, 68, 68, 0.10)";
                        border =
                          "1px solid rgba(239, 68, 68, 0.45)";
                      }

                      return (
                        <div
                          key={optionIndex}
                          style={{
                            display: "flex",
                            alignItems:
                              "center",
                            gap: 12,
                            padding:
                              "10px 12px",
                            borderRadius: 10,
                            background,
                            border
                          }}
                        >
                          <span
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius:
                                "50%",
                              display: "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              fontWeight: 700,
                              flexShrink: 0,
                              background:
                                "#f3f4f6"
                            }}
                          >
                            {letters[
                              optionIndex
                            ] ??
                              optionIndex + 1}
                          </span>

                          <span
                            style={{
                              flex: 1,
                              lineHeight: 1.4
                            }}
                          >
                            {option}
                          </span>

                          {isSelected && (
                            <span
                              className="muted"
                              style={{
                                fontSize: 13,
                                fontWeight: 600
                              }}
                            >
                              Twoja odpowiedź
                            </span>
                          )}

                          {isCorrect && (
                            <span
                              className="good"
                              style={{
                                fontSize: 13,
                                fontWeight: 700
                              }}
                            >
                              Poprawna
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 14
                    }}
                  >
                    <span className="muted">
                      Twoja odpowiedź:
                    </span>{" "}
                    <strong>
                      {letters[selectedAnswer] ??
                        "brak"}
                    </strong>

                    <span
                      className="muted"
                      style={{
                        marginLeft: 20
                      }}
                    >
                      Poprawna odpowiedź:
                    </span>{" "}
                    <strong>
                      {correctAnswer >= 0
                        ? letters[
                            correctAnswer
                          ] ?? correctAnswer + 1
                        : "brak"}
                    </strong>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}