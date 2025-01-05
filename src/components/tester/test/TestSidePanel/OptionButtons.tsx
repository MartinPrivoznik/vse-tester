"use client";

import { Button } from "@nextui-org/button";
import { FaCheck } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { FaShuffle } from "react-icons/fa6";

export default function OptionButtons({
  validateAnswers,
  processToNextQuestion,
  processToRandomQuestion,
  currentQuestionAnswered,
}: {
  validateAnswers: () => void;
  processToNextQuestion: () => void;
  processToRandomQuestion: () => void;
  currentQuestionAnswered: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Button
        className="py-4 h-auto font-bold"
        isDisabled={currentQuestionAnswered}
        variant="solid"
        onPress={() => validateAnswers()}
      >
        <FaCheck className="mr-2" />
        Zkontrolovat odpovědi
      </Button>
      <Button
        className="py-4 h-auto mt-8"
        isDisabled={!currentQuestionAnswered}
        variant="ghost"
        onPress={() => processToNextQuestion()}
      >
        <GrLinkNext className="mr-2" />
        Další otázka
      </Button>
      <Button
        className="py-4 h-auto"
        isDisabled={!currentQuestionAnswered}
        variant="ghost"
        onPress={() => processToRandomQuestion()}
      >
        <FaShuffle className="mr-2" />
        Náhodná otázka
      </Button>
    </div>
  );
}
