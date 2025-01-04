"use client";

import { Snippet } from "@nextui-org/snippet";

import { AddTestModalButton } from "../components/tester/AddTestModalButton";
import useTests from "../hooks/useTests";

import { subtitle, title } from "@/src/components/primitives";

export default function Home() {
  const { uploadTest } = useTests();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>VŠE&nbsp;</span>
        <span className={title()}>Tester V2.0</span>
        <span className={subtitle()}>
          Webová adaptace aplikace kompatibilní s .txt soubory pro appku VŠE
          tester
        </span>
      </div>
      <div className="mt-8">
        <Snippet
          hideCopyButton
          hideSymbol
          className="px-3 py-2"
          variant="bordered"
        >
          <span>
            Začněte&nbsp;&nbsp;
            <AddTestModalButton
              redirectToMyWork
              text="přidáním testu"
              uploadTest={uploadTest}
              variant="ghost"
            />
          </span>
        </Snippet>
      </div>
    </section>
  );
}
