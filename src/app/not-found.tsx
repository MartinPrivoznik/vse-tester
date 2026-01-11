import Link from "next/link";
import { Metadata } from "next";

import { title, subtitle } from "@/src/components/primitives";

export const metadata: Metadata = {
  title: "Stránka nenalezena - 404",
  description:
    "Požadovaná stránka nebyla nalezena. Vraťte se na hlavní stránku VŠE Tester V2.0.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <h1 className={title({ color: "violet" })}>404</h1>
          <br />
          <br />
          <h2 className={title({ size: "sm" })}>Stránka nenalezena</h2>
          <p className={subtitle({ class: "mt-4" })}>
            Omlouváme se, ale požadovaná stránka neexistuje.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90 transition-colors"
          >
            Zpět na hlavní stránku
          </Link>
        </div>
      </section>
    </main>
  );
}
