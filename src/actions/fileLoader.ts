"use server";

import ApiResponse from "../models/ApiResponse";
import Test, { Question } from "../models/Test";

export async function processFile(
  name: string,
  multipleChoice: boolean,
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

    const test: Test = {
      name,
      multipleChoice,
      questions,
    };

    return {
      success: true,
      data: test,
    };
  } catch (error) {
    return {
      success: false,
      message: "Chyba při zpracování souboru",
    };
  }
}
