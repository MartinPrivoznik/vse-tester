import TestView from "@/src/components/tester/test/TestView";

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="container mx-auto max-w-7xl pt-7 px-6 flex-grow">
      <section className="flex flex-col">
        <TestView testId={id} />
      </section>
    </main>
  );
}
