import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const nickname = String(body.nickname ?? "").trim();

  const questionIds: number[] = Array.isArray(body.questionIds)
    ? body.questionIds.map(Number)
    : [];

  const answers: number[] = Array.isArray(body.answers)
    ? body.answers.map(Number)
    : [];

  if (
    nickname.length < 2 ||
    questionIds.length === 0 ||
    questionIds.length !== answers.length
  ) {
    return NextResponse.json(
      { error: "Nieprawidłowe dane testu." },
      { status: 400 }
    );
  }

  const questions = await prisma.question.findMany({
    where: {
      id: {
        in: questionIds,
      },
    },
  });

  const questionById = new Map(
    questions.map((question) => [question.id, question])
  );

  const score = questionIds.reduce(
    (sum: number, id: number, i: number) => {
      const question = questionById.get(id);

      if (!question) {
        return sum;
      }

      const correctAnswers = Array.isArray(question.correct)
        ? question.correct.map(Number)
        : [];

      const userAnswer = answers[i];

      const isCorrect =
        correctAnswers.length === 1 &&
        correctAnswers[0] === userAnswer;

      return sum + (isCorrect ? 1 : 0);
    },
    0
  );

  const total = questionIds.length;
  const percentage = Math.round((score / total) * 100);

  const last = await prisma.attempt.findFirst({
    where: {
      nickname,
    },
    orderBy: {
      testNumber: "desc",
    },
  });

  const testNumber = (last?.testNumber ?? 0) + 1;

  const attempt = await prisma.attempt.create({
    data: {
      nickname,
      testNumber,
      score,
      total,
      percentage,
    },
  });

  await prisma.attemptAnswer.createMany({
    data: questionIds.map((id, i) => {
      const question = questionById.get(id);

      if (!question) {
        throw new Error(`Nie znaleziono pytania o ID ${id}.`);
      }

      const correctAnswers = Array.isArray(question.correct)
        ? question.correct.map(Number)
        : [];

      const selectedAnswer = answers[i];

      const correctAnswer =
        correctAnswers.length === 1 ? correctAnswers[0] : -1;

      const isCorrect =
        correctAnswers.length === 1 &&
        correctAnswer === selectedAnswer;

      return {
        attemptId: attempt.id,
        questionId: question.id,
        questionText: question.text,
        options: question.options ?? [],
        selectedAnswer,
        correctAnswer,
        isCorrect,
        points: isCorrect ? 1 : 0,
      };
    }),
  });

  return NextResponse.json({
    score,
    total,
    percentage,
    testNumber,
  });
}