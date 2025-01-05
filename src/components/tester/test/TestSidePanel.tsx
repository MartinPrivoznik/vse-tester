"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import Test from "@/src/models/Test";

export default function TestSidePanel({
  test,
  validateAnswers,
  processToNextQuestion,
  processToRandomQuestion,
}: {
  test: Test;
  validateAnswers: () => void;
  processToNextQuestion: () => void;
  processToRandomQuestion: () => void;
}) {
  return (
    <Card className="w-full p-3">
      <CardBody className="mt-2 flex flex-col gap-4">
        <Button
          className="py-4 h-auto"
          variant="ghost"
          onPress={() => validateAnswers()}
        >
          Zkontrolovat odpovědi
        </Button>
        <Button
          className="py-4 h-auto"
          variant="ghost"
          onPress={() => processToNextQuestion()}
        >
          Další otázka
        </Button>
        <Button
          className="py-4 h-auto"
          variant="ghost"
          onPress={() => processToRandomQuestion()}
        >
          Náhodná otázka
        </Button>
      </CardBody>
    </Card>
  );
}
