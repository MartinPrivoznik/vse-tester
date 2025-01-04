"use client";

import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

import Test from "@/src/models/Test";

export default function TestsList({
  tests,
  deleteTest,
}: {
  tests: Test[];
  deleteTest: (id: string) => void;
}) {
  const testCards =
    tests &&
    tests.map((test, index) => {
      const questionCount = test.questions.length;

      return (
        <Card key={index} className="max-w-[220px]">
          <CardHeader className="flex gap-3">
            <div className="w-full flex items-center justify-center">
              <p className="text-md">{test.name}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter className="flex flex-col gap-2 items-start">
            <p className="text-small text-default-500">
              {test.multipleChoice
                ? "Více správných odpovědí"
                : "Jedna správná odpověď"}
            </p>
            <p className="text-small text-default-500">
              Test obsahuje {questionCount} otázek
            </p>
            <div className="flex w-full gap-2 justify-center mt-2">
              <Button
                color="primary"
                size="sm"
                onClick={() => deleteTest(test.id)}
              >
                Procvičovat
              </Button>
              <Button
                color="danger"
                size="sm"
                onPress={() => deleteTest(test.id)}
              >
                Smazat
              </Button>
            </div>
          </CardFooter>
        </Card>
      );
    });

  return <>{testCards}</>;
}
