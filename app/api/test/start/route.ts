import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const questions = await prisma.question.findMany({
    include: {
      sets: {
        include: {
          set: true,
        },
      },
      images: {
        orderBy: {
          sortOrder: "asc",
        },
        include: {
          image: true,
        },
      },
    },
  });

  // Losowanie pytań
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Każdy test składa się z dokładnie 20 pytań
  const selected = shuffled.slice(0, 20);

  return NextResponse.json({
    questions: selected.map((question) => ({
      id: question.id,
      setNumbers: question.sets.map((item) => item.set.number),
      text: question.text,
      options: Array.isArray(question.options)
        ? question.options.map(String)
        : [],
      images: question.images.map((item) => ({
        path: item.image.path,
        alt: item.image.alt,
      })),
    })),
  });
}