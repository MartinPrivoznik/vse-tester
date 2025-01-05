"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import TestAnswerList from "./TestAnswerList";

import { Question } from "@/src/models/Test";

export default function TestQuestion({
  question,
  selectedAnswers,
  setSelectedAnswers,
}: {
  question: Question;
  selectedAnswers: Array<string>;
  setSelectedAnswers: (answers: Array<string>) => void;
}) {
  return (
    <Card className="w-full p-3">
      <CardHeader className="flex gap-3">
        <div className="w-full flex items-center">
          <p className="text-lg font-bold">{question.question}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="mt-2">
        <TestAnswerList
          answers={question.answers}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
        />
      </CardBody>
    </Card>
  );
}
