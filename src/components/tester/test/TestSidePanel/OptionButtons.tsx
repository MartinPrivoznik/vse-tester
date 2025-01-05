"use client";

import { Button } from "@nextui-org/button";

export default function OptionButtons({
  validateAnswers,
  processToNextQuestion,
  processToRandomQuestion,
}: {
  validateAnswers: () => void;
  processToNextQuestion: () => void;
  processToRandomQuestion: () => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Button
        className="py-4 h-auto font-bold"
        variant="solid"
        onPress={() => validateAnswers()}
      >
        Zkontrolovat odpovědi
      </Button>
      <Button
        className="py-4 h-auto mt-5"
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
    </div>
  );
}
