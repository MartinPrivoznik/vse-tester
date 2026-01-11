import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moje testy",
  description:
    "Spravujte své nahrané testy. Procvičujte otázky, sledujte své výsledky a zlepšujte svoje znalosti s VŠE Tester V2.0.",
  openGraph: {
    title: "Moje testy - VŠE Tester V2.0",
    description:
      "Spravujte své nahrané testy a procvičujte otázky s VŠE Tester V2.0.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
