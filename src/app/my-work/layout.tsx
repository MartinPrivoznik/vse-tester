import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moje práce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
