"use client";

import { subtitle, title } from "../../primitives";

import TestQuestion from "./TestQuestion";

import useTest from "@/src/hooks/useTest";

export default function TestView({ testId }: { testId: string }) {
  const { test, currentQuestion } = useTest(testId);

  const questionCount = test?.questions.length;

  if (!test || !currentQuestion) {
    return;
  }

  return (
    <>
      <span className={title({ size: "sm" })}>{test.name}</span>
      <span className={subtitle({ size: "sm" })}>
        Test obsahuje {questionCount} otázek
      </span>
      <div className="flex gap-8 mt-8">
        <div className="w-2/3">
          <TestQuestion question={currentQuestion} />
        </div>
        <div className="w-1/3">
          <TestQuestion question={test.questions[0]} />
        </div>
      </div>
    </>
  );
}
