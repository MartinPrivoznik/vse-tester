"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { Question } from "@/src/models/Test";

const dotStyles = "w-3 h-3 rounded-full cursor-pointer m-0.5 border-2";

const unseenDotStyles =
  "bg-default-300 border-default-300 hover:bg-default-600 hover:border-default-600";

const seenDotStyles =
  "bg-default-500 border-default-500 hover:bg-default-600 hover:border-default-600";

const activeDotStyles =
  "bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600";

export default function QuestionDot({
  index,
  question,
  isActive,
  processToQuestion,
}: {
  index: number;
  question: Question;
  isActive: boolean;
  processToQuestion: (questionIndex: number) => void;
}) {
  const [dotSpecStyle, setDotSpecStyle] = useState<string>();

  useEffect(() => {
    if (isActive) {
      setDotSpecStyle(activeDotStyles);
    } else if (question.seen) {
      setDotSpecStyle(seenDotStyles);
    } else {
      setDotSpecStyle(unseenDotStyles);
    }
  }, [isActive, question.seen]);

  return (
    <div
      aria-hidden="true"
      className={clsx(dotStyles, dotSpecStyle)}
      title={question.question}
      onClick={() => processToQuestion(index)}
    />
  );
}
