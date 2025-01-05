"use client";

import { useState } from "react";

import { subtitle, title } from "../../primitives";

import TestQuestion from "./TestQuestion";
import TestSidePanel from "./TestSidePanel";

import useTest from "@/src/hooks/useTest";

export default function TestView({ testId }: { testId: string }) {
  const {
    test,
    currentQuestion,
    questionCount,
    processToNextQuestion,
    processToRandomQuestion,
    processToQuestion,
    resetTest,
  } = useTest(testId);

  const [selectedAnswers, setSelectedAnswers] = useState<Array<string>>([]);

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
          <TestQuestion
            question={currentQuestion}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
        <div className="w-1/3">
          <TestSidePanel
            currentQuestion={currentQuestion}
            processToNextQuestion={processToNextQuestion}
            processToQuestion={processToQuestion}
            processToRandomQuestion={processToRandomQuestion}
            resetTest={resetTest}
            test={test}
            validateAnswers={() => {}}
          />
        </div>
      </div>
    </>
  );
}
