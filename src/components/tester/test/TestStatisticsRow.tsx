"use client";

import Test from "@/src/models/Test";
import { Card, CardBody } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";
import { useEffect, useState } from "react";

export default function TestStatisticsRow({ test }: { test: Test }) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const answeredQuestions = test.questions.filter(
      (question) => question.success !== undefined,
    ).length;

    setProgress((answeredQuestions / test.questions.length) * 100);
  }, [test.questions.map((q) => q.success).join(",")]);

  return (
    <div className="w-full">
      <div className="flex gap-8">
        <div className="w-2/3 min-h-full flex items-end">
          <Progress aria-label="Test progression" value={progress} />
        </div>
        <div className="w-1/3">
          <Card className="w-full h-full p-2">
            <CardBody className="p-1 px-3 flex-row gap-4">
              <span className="font-bold">{progress.toFixed(0)}%</span>
              <span className="text-success w-auto font-bold ml-auto">
                {test.questions.filter((q) => q.success).length}
                &nbsp;správně
              </span>
              <span className="text-default-300 font-bold">/</span>
              <span className="text-danger w-auto font-bold">
                {
                  test.questions.filter(
                    (q) => q.success !== undefined && !q.success,
                  ).length
                }
                &nbsp; špatně
              </span>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
