"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { GrPowerReset } from "react-icons/gr";

import OptionButtons from "./TestSidePanel/OptionButtons";
import QuestionList from "./TestSidePanel/QuestionList";

import Test, { Question } from "@/src/models/Test";

export default function TestSidePanel({
  test,
  currentQuestion,
  validateAnswers,
  processToNextQuestion,
  processToRandomQuestion,
  processToQuestion,
  resetTest,
}: {
  test: Test;
  currentQuestion: Question;
  validateAnswers: () => void;
  processToNextQuestion: () => void;
  processToRandomQuestion: () => void;
  processToQuestion: (questionIndex: number) => void;
  resetTest: () => void;
}) {
  return (
    <Card className="w-full p-3">
      <CardBody className="mt-2 flex flex-col gap-10">
        <OptionButtons
          processToNextQuestion={processToNextQuestion}
          processToRandomQuestion={processToRandomQuestion}
          validateAnswers={validateAnswers}
        />
        <QuestionList
          currentQuestion={currentQuestion}
          processToQuestion={processToQuestion}
          test={test}
        />
        <Button variant="light" onPress={() => resetTest()}>
          <GrPowerReset />
          Reset
        </Button>
      </CardBody>
    </Card>
  );
}
