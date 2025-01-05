"use client";

import { useEffect, useState } from "react";

import { subtitle, title } from "../../primitives";

import TestQuestion from "./TestQuestion";
import TestSidePanel from "./TestSidePanel";

import useTest from "@/src/hooks/useTest";
import TestStatisticsRow from "./TestStatisticsRow";

export default function TestView({ testId }: { testId: string }) {
  const {
    test,
    currentQuestion,
    currentQuestionAnswered,
    questionCount,
    processToNextQuestion,
    processToRandomQuestion,
    processToQuestion,
    resetTest,
    validateAnswers,
  } = useTest(testId);

  const [selectedAnswers, setSelectedAnswers] = useState<Array<string>>([]);

  const handleValidateAnswers = () => {
    validateAnswers(selectedAnswers.map(Number));
  };

  useEffect(() => {
    setSelectedAnswers([]);
  }, [currentQuestion?.answers]);

  if (!test || !currentQuestion) {
    return;
  }

  return (
    <>
      <span className={title({ size: "sm" })}>{test.name}</span>
      <span className={subtitle({ size: "sm" })}>
        Test obsahuje {questionCount} otázek
      </span>
      <TestStatisticsRow test={test} />
      <div className="flex gap-8 mt-4">
        <div className="w-2/3">
          <TestQuestion
            currentQuestionAnswered={currentQuestionAnswered}
            question={currentQuestion}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
        <div className="w-1/3">
          <TestSidePanel
            currentQuestion={currentQuestion}
            currentQuestionAnswered={currentQuestionAnswered}
            processToNextQuestion={processToNextQuestion}
            processToQuestion={processToQuestion}
            processToRandomQuestion={processToRandomQuestion}
            resetTest={resetTest}
            test={test}
            validateAnswers={handleValidateAnswers}
          />
        </div>
      </div>
    </>
  );
}
