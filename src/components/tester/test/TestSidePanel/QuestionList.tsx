"use client";

import QuestionDot from "./QuestionList/QuestionDot";

import Test, { Question } from "@/src/models/Test";

export default function QuestionList({
  test,
  currentQuestion,
  processToQuestion,
}: {
  test: Test;
  currentQuestion: Question;
  processToQuestion: (questionIndex: number) => void;
}) {
  return (
    <div className="w-full">
      <div className="flex gap-1 flex-wrap">
        {test.questions.map((question, index) => (
          <QuestionDot
            key={index}
            index={index}
            isActive={currentQuestion.id - 1 === index}
            processToQuestion={processToQuestion}
            question={question}
          />
        ))}
      </div>
    </div>
  );
}
