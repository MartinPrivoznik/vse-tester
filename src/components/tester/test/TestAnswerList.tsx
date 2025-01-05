"use client";

import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Selection } from "@react-types/shared";
import "./TestAnswerList.css";

import { Answer } from "@/src/models/Test";

export default function TestAnswerList({
  answers,
  selectedAnswers,
  setSelectedAnswers,
}: {
  answers: Answer[];
  selectedAnswers: Array<string>;
  setSelectedAnswers: (answers: Array<string>) => void;
}) {
  const handleSelectionChange = (keys: Selection) => {
    setSelectedAnswers(Array.from(keys as Set<string>));
  };

  return (
    <Listbox
      aria-label="Test answers"
      selectedKeys={selectedAnswers}
      selectionMode="multiple"
      variant="flat"
      onSelectionChange={handleSelectionChange}
    >
      {answers.map((answer, index) => (
        <ListboxItem
          key={index}
          className="answer-list-item"
          textValue={answer.text}
        >
          <p className="py-2 px-1 text-medium">{answer.text}</p>
        </ListboxItem>
      ))}
    </Listbox>
  );
}
