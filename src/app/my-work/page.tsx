"use client";

import { title } from "@/src/components/primitives";
import { AddTestModalButton } from "@/src/components/tester/AddTestModalButton";
import TestsList from "@/src/components/tester/TestsList";
import useTests from "@/src/hooks/useTests";

export default function Home() {
  const { tests, uploadTest, refreshTests, deleteTest } = useTests();

  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <section className="flex flex-col items-center gap-4 px-10">
        <div className="flex flex-col gap-4 max-w-xl text-center justify-center">
          <span className={title()}>Nahrané testy</span>
          <AddTestModalButton
            text="přidat test"
            uploadTest={uploadTest}
            variant="ghost"
            onFinish={refreshTests}
          />
        </div>
        {tests && <TestsList deleteTest={deleteTest} tests={tests} />}
      </section>
    </main>
  );
}
