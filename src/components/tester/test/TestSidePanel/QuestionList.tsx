"use client";

import QuestionDot from "./QuestionList/QuestionDot";

import Test from "@/src/models/Test";

export default function QuestionList({
  test,
  currentQuestionIndex,
  processToQuestion,
}: {
  test: Test;
  currentQuestionIndex: number;
  processToQuestion: (questionIndex: number) => void;
}) {
  return (
    <div className="w-full">
      <div className="flex gap-1 flex-wrap">
        {test.questions.map((question, index) => (
          <QuestionDot
            key={index}
            index={index}
            isActive={currentQuestionIndex === index}
            processToQuestion={processToQuestion}
            question={question}
          />
        ))}
      </div>
    </div>
  );
}
