import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function WynikiPage({
  searchParams
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;

  const result = params.result;
  const total = params.total;
  const percentage = params.percentage;
  const mine = params.mine;

  const attempts = await prisma.attempt.findMany({
    orderBy: { createdAt: "desc" },
    take: 200
  });

  return (
    <main className="container">
      <header className="topbar">
        <a className="brand" href="/">
          ANATOMIA - powrót do strony głównej
        </a>

        <nav className="nav">
          <a href="/">Nowy test</a>
        </nav>
      </header>

      {result && (
        <section
          className="card result"
          style={{ maxWidth: 720, margin: "25px auto" }}
        >
          <div className="eyebrow">Test zakończony</div>

          <div
            className={`score ${
              Number(percentage) >= 50 ? "good" : "bad"
            }`}
          >
            {percentage}%
          </div>

          <p className="lead" style={{ margin: "15px auto" }}>
            {mine}, zdobyłeś/aś{" "}
            <strong>
              {result}/{total}
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
              Wyniki wszystkich
            </a>
          </div>
        </section>
      )}

      <section
        className="card"
        style={{ margin: "25px auto 60px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 15,
            marginBottom: 18
          }}
        >
          <div>
            <div className="eyebrow">Historia</div>

            <h2 style={{ margin: "5px 0" }}>
              Wyniki użytkowników
            </h2>
          </div>

          <span className="badge">
            {attempts.length} ostatnich
          </span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Użytkownik</th>
                <th>Test nr</th>
                <th>Wynik</th>
                <th>Procent</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {attempts.map((a) => (
                <tr key={a.id}>
                  <td>
                    <strong>{a.nickname}</strong>
                  </td>

                  <td>#{a.testNumber}</td>

                  <td>
                    {a.score}/{a.total}
                  </td>

                  <td>
                    <strong
                      className={
                        a.percentage >= 50 ? "good" : "bad"
                      }
                    >
                      {a.percentage}%
                    </strong>
                  </td>

                  <td>
                    {new Intl.DateTimeFormat("pl-PL", {
                      dateStyle: "short",
                      timeStyle: "short"
                    }).format(a.createdAt)}
                  </td>

                  <td>
                    <a
                      className="btn secondary"
                      href={`/wyniki/${a.id}`}
                      style={{
                        whiteSpace: "nowrap",
                        padding: "8px 12px",
                        fontSize: "13px"
                      }}
                    >
                      Pokaż wynik →
                    </a>
                  </td>
                </tr>
              ))}

              {attempts.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="muted"
                  >
                    Brak wyników.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}