import TestView from "@/src/components/tester/test/TestView";

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="flex flex-col px-10">
      <TestView testId={id} />
    </section>
  );
}
