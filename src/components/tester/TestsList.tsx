"use client";

import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

import Test from "@/src/models/Test";

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

    return (
      <Card key={index} className="w-[220px]">
        <CardHeader className="flex gap-3">
          <div className="w-full flex items-center">
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
          <p className="text-small text-default-500">{questionCount} otázek</p>
          <p className="text-small text-default-500">
            Nahráno {new Date(test.uploadDate).toLocaleDateString("cs-CZ")}
          </p>
          <div className="flex w-full gap-2 justify-between mt-2">
            <Button
              color="primary"
              size="sm"
              onPress={() => router.push(`/my-work/${test.id}`)}
            >
              Procvičovat
            </Button>
            <Button
              color="danger"
              size="sm"
              onPress={() => deleteTest(test.id)}
            >
              <FaTrash />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  });

  if (testCards.length === 0) {
    return <p>Nemáte nahrané žádné testové soubory</p>;
  }

  return <>{testCards}</>;
}
