# Anatomia — testy

Interaktywna aplikacja do nauki anatomii: **Next.js + React + TypeScript + Prisma + PostgreSQL**.

## Docelowa architektura danych

Najważniejsza zmiana względem pierwszej wersji: pytanie jest przechowywane **tylko raz**.

- `TestSet` — sześć zestawów testowych.
- `Question` — unikalna treść pytania + odpowiedzi + poprawna odpowiedź.
- `QuestionSet` — tabela łącząca pytania z zestawami (many-to-many).
- `Image` — pojedynczy obrazek przechowywany raz.
- `QuestionImage` — tabela łącząca obrazki z pytaniami.
- `Attempt` — wyniki użytkowników.

Dzięki temu, jeśli to samo pytanie występuje np. w zestawie 3 i 6, nie tworzymy drugiego rekordu pytania.

## Obrazki

Obrazki pytań znajdują się w `public/question-images/`. W bazie przechowywane jest ich powiązanie z pytaniem,
a nie kopia obrazka dla każdego zestawu.

W projekcie są obecnie trzy przykładowe ilustracje z zestawu 6:
- neuron,
- synapsa,
- nabłonek.

Pozostałe ilustracje i pytania będziemy dodawać podczas porządkowania wszystkich sześciu zestawów.

## Lokalny start

1. Node.js 20+.
2. PostgreSQL (np. Supabase albo Neon).
3. Skopiuj `.env.example` do `.env` i ustaw `DATABASE_URL`.
4. Uruchom:

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

5. Otwórz `http://localhost:3000`.

## Dodawanie pytania

Przykład:

```json
{
  "key": "q-example",
  "sets": [3, 6],
  "text": "Treść pytania",
  "options": ["A", "B", "C", "D"],
  "correct": 1,
  "images": [
    {"path": "/question-images/example.png", "alt": "Opis ilustracji"}
  ]
}
```

`sets: [3, 6]` oznacza, że jedno pytanie należy do dwóch zestawów, ale w bazie istnieje tylko jeden rekord `Question`.

## Następny etap — GitHub i SQL

Nie trzeba robić wszystkiego naraz. Przejdziemy wspólnie kolejno:

1. przygotowanie projektu lokalnie,
2. Git — pierwszy commit,
3. utworzenie repozytorium GitHub,
4. `git remote`, `push` i kolejne zmiany,
5. PostgreSQL + Prisma,
6. migracje / `db push`,
7. seed danych,
8. test lokalny,
9. wdrożenie aplikacji,
10. ustawienie zmiennych środowiskowych,
11. test produkcyjny.

Każdy etap będziemy robić osobno i sprawdzać, czy działa, zanim przejdziemy dalej.
