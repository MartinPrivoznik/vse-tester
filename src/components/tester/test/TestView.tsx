"use client";

import { useRouter } from "next/navigation";

import { title } from "../../primitives";

import useTest from "@/src/hooks/useTest";

export default function TestView({ testId }: { testId: string }) {
  const { test } = useTest(testId);
  const router = useRouter();

  if (!test) {
    return;
  }

  return (
    <>
      <span className={title()}>{test.name}</span>
    </>
  );
}
