import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Návod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
