"use server";

import { v6 as uuidv6 } from "uuid";

import ApiResponse from "../models/ApiResponse";
import Test, { Question } from "../models/Test";

export async function processFile(
  name: string,
  file: File,
): Promise<ApiResponse<Test>> {
  try {
    const fileContent = await file.text();
    const lines = fileContent.split("\n").map((line) => line.trim());

    const questions: Question[] = [];
    let currentQuestion: Question | null = null;

    lines.forEach((line) => {
      if (!line.trim()) {
        return;
      }

      if (!line.startsWith("+") && !line.startsWith("-")) {
        if (currentQuestion) {
          questions.push(currentQuestion);
        }

        currentQuestion = {
          question: line,
          answers: [],
        };
      } else if (currentQuestion) {
        const isCorrect = line.startsWith("+");

        currentQuestion.answers.push({
          id: currentQuestion.answers.length + 1,
          text: line.substring(1).trim(),
          isCorrect,
        });
      }
    });

    // Push the last question
    if (currentQuestion) {
      questions.push(currentQuestion);
    }

    const multipleChoice = questions.some(
      (q) => q.answers.filter((a) => a.isCorrect).length > 1,
    );

    const test: Test = {
      id: uuidv6(),
      name,
      multipleChoice,
      questions,
      uploadDate: new Date(),
    };

    return {
      success: true,
      data: test,
    };
  } catch {
    return {
      success: false,
      message: "Chyba při zpracování souboru",
    };
  }
}
