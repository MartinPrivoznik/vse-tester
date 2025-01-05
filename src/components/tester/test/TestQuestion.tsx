"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import TestAnswerList from "./TestAnswerList";

import { Question } from "@/src/models/Test";

export default function TestQuestion({
  question,
  selectedAnswers,
  setSelectedAnswers,
  currentQuestionAnswered,
}: {
  question: Question;
  selectedAnswers: Array<string>;
  setSelectedAnswers: (answers: Array<string>) => void;
  currentQuestionAnswered: boolean;
}) {
  return (
    <Card className="w-full p-1 md:p-3">
      <CardHeader className="flex gap-3">
        <div className="w-full flex items-center">
          <p className="text-md md:text-lg font-bold">{question.question}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="mt-0 md:mt-2 p-1 md:p-3">
        <TestAnswerList
          answers={question.answers}
          currentQuestionAnswered={currentQuestionAnswered}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
        />
      </CardBody>
    </Card>
  );
}
