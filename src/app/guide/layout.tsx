import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Návod",
  description:
    "Návod k použití VŠE Tester V2.0. Naučte se jak nahrávat testové soubory ve správném formátu a efektivně procvičovat otázky.",
  openGraph: {
    title: "Návod - VŠE Tester V2.0",
    description:
      "Návod k použití VŠE Tester V2.0. Naučte se jak nahrávat testové soubory ve správném formátu.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      {children}
    </main>
  );
}
