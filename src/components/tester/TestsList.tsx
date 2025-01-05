"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

import Test from "@/src/models/Test";
import { Progress } from "@nextui-org/progress";

export default function TestsList({
  tests,
  deleteTest,
}: {
  tests: Test[];
  deleteTest: (id: string) => void;
}) {
  const router = useRouter();

  const testCards = tests?.map((test, index) => {
    const questionCount = test.questions.length;

    const answeredQuestions = test.questions.filter(
      (question) => question.success !== undefined,
    ).length;

    const progress = (answeredQuestions / test.questions.length) * 100;

    return (
      <Card key={index} className="min-w-[300px] hover:bg-default-100 p-0">
        <div
          aria-hidden="true"
          className="flex flex-col w-full p-3 cursor-pointer"
          onClick={() => router.push(`/my-work/${test.id}`)}
        >
          <CardHeader className="flex gap-3">
            <div className="w-full flex flex-col items-start">
              <div className="w-full flex items-center">
                <p className="text-md">{test.name}</p>
                <FaAngleRight className="ml-auto" />
              </div>
              <p className="text-small text-default-500 mt-1">
                {questionCount} otázek
              </p>
            </div>
          </CardHeader>
          <Progress aria-label="Test progression" size="sm" value={progress} />
          <CardBody className="flex flex-col gap-2 items-start pb-0">
            {/* <p className="text-small text-default-500">
              {test.multipleChoice
                ? "Více správných odpovědí"
                : "Jedna správná odpověď"}
            </p> */}
          </CardBody>
          <CardFooter className="pb-1">
            <div className="flex w-full justify-start items-center">
              <span className="text-small text-default-500">
                {new Date(test.uploadDate).toLocaleDateString("cs-CZ")}
              </span>
              <Button
                className="min-w-5 ml-auto"
                color="danger"
                size="sm"
                variant="light"
                onPress={(e) => {
                  deleteTest(test.id);
                }}
              >
                <FaTrash />
              </Button>
            </div>
          </CardFooter>
        </div>
      </Card>
    );
  });

  if (testCards.length === 0) {
    return (
      <div className="mt-8">
        <p>Nemáte nahrané žádné testové soubory</p>
      </div>
    );
  }

  return (
    <div className="mt-8 flex gap-6 flex-wrap justify-center">{testCards}</div>
  );
}
