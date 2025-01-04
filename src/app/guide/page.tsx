import { Divider } from "@nextui-org/divider";

import { subtitle, title } from "@/src/components/primitives";
import { Code } from "@nextui-org/code";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 px-2 md:px-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Návod</span>
      </div>
      <div className="flex flex-col items-center mt-5 max-w-[650px]">
        <p className="text-justify">
          Pro nahrání testového souboru využijte možnost v přehledu testů.
          Soubory je nutné nahrávat ve stejném formátu jako v aplikaci VŠE
          Tester.
        </p>
        <Divider className="my-3" />
        <h2 className={subtitle()}>Požadovaný formát souboru</h2>
        <p className="text-justify">
          Stuktura zahrnuje jednotlivé otázky a odpovědi na samostatných
          řádcích. Důležité je otázku ani odpovědi{" "}
          <b>nezalamovat na více řádků</b>. Správné odpovědi jsou označeny
          symbolem &quot;+&quot;, špatné symbolem &quot;-&quot;.
          <br />
          <br />
          Příklad takového správně formátovaného testu:
          <br />
          <br />
          Text první otázky <br />+ první správná odpověď <br />- první špatná
          odpověď <br />- druhá špatná odpověď
          <br />
          <br />
          Text druhé otázky <br />- první špatná odpověď <br />+ první správná
          odpověď <br />+ druhá správná odpověď
          <br />
          <br />
          (a tak dále...)
        </p>
      </div>
    </section>
  );
}
