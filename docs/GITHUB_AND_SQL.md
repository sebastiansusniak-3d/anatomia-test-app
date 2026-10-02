# GitHub + SQL — plan prowadzenia projektu

Nie wykonujemy wszystkich kroków jednocześnie. Każdy etap ma być lokalnie sprawdzony przed przejściem dalej.

## GitHub

Docelowy rytm pracy:

```text
zmiana plików
   ↓
git status
   ↓
git diff
   ↓
git add .
   ↓
git commit -m "opis zmiany"
   ↓
git push
```

Na początku utworzymy repozytorium GitHub i skonfigurujemy `origin`. Potem będziemy pracować małymi commitami.

## SQL / PostgreSQL

Aplikacja korzysta z Prisma, ale baza jest PostgreSQL.

Najważniejsze relacje:

```text
TestSet 1 ───< QuestionSet >─── 1 Question
Question 1 ───< QuestionImage >─── 1 Image
```

`QuestionSet` i `QuestionImage` są tabelami łącznikowymi.

Przykład logiczny:

```text
Question #17 = "Włókna rdzenne przewodzą..."

QuestionSet:
#17 → Set 3
#17 → Set 6
```

W bazie nie powstaje drugi `Question #17`.

## Migracje

Na etapie prototypu można użyć:

```bash
npx prisma db push
```

Gdy projekt zacznie być publikowany i baza będzie miała trwałe dane, przejdziemy na kontrolowane migracje Prisma:

```bash
npx prisma migrate dev --name initial
```

oraz, przy wdrożeniu:

```bash
npx prisma migrate deploy
```

Dokładne komendy będziemy wykonywać wspólnie, żeby nie usunąć przypadkiem danych z produkcyjnej bazy.
