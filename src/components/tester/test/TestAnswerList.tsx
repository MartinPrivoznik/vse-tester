"use client";

import { Selection } from "@react-types/shared";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import "./TestAnswerList.css";

import clsx from "clsx";

import { Answer } from "@/src/models/Test";

export default function TestAnswerList({
  answers,
  selectedAnswers,
  setSelectedAnswers,
  currentQuestionAnswered,
}: {
  answers: Answer[];
  selectedAnswers: Array<string>;
  setSelectedAnswers: (answers: Array<string>) => void;
  currentQuestionAnswered: boolean;
}) {
  const handleSelectionChange = (keys: Selection) => {
    setSelectedAnswers(Array.from(keys as Set<string>));
  };

  return (
    <Listbox
      aria-label="Test answers"
      disabledKeys={
        currentQuestionAnswered ? answers.map((a) => a.id.toString()) : []
      }
      selectedKeys={selectedAnswers}
      selectionMode="multiple"
      variant="flat"
      onSelectionChange={handleSelectionChange}
    >
      {answers.map((answer) => (
        <ListboxItem
          key={answer.id}
          className={clsx(
            "answer-list-item",
            currentQuestionAnswered && answer.isCorrect && "correct",
            currentQuestionAnswered &&
              !answer.isCorrect &&
              selectedAnswers.includes(answer.id.toString()) &&
              "wrong",
          )}
          textValue={answer.text}
        >
          <p className="py-1 md:py-2 px-1 text-sm md:text-medium">
            {answer.text}
          </p>
        </ListboxItem>
      ))}
    </Listbox>
  );
}
