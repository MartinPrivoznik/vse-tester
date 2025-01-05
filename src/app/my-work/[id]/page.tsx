import TestView from "@/src/components/tester/test/TestView";

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="flex flex-col">
      <TestView testId={id} />
    </section>
  );
}
