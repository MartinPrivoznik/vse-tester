"use client";

import { useRouter } from "next/navigation";

import { subtitle, title } from "../../primitives";

import useTest from "@/src/hooks/useTest";

export default function TestView({ testId }: { testId: string }) {
  const { test } = useTest(testId);

  const questionCount = test?.questions.length;

  if (!test) {
    return;
  }

  return (
    <>
      <span className={title({ size: "sm" })}>{test.name}</span>
      <span className={subtitle({ size: "sm" })}>
        Test obsahuje {questionCount} otázek
      </span>
    </>
  );
}
