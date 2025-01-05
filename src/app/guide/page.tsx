import { Divider } from "@nextui-org/divider";

import { subtitle, title } from "@/src/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 px-2 md:px-10 mb-8">
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
        <Divider className="my-3" />
        <h2 className={subtitle()}>Typy testů</h2>
        <p className="text-justify">
          V aplikaci je možné nahrát dva typy testů: s více správnými odpověďmi
          a s jednou správnou odpovědí. Typ je automaticky vyhodnocen při
          nahrání. Pokud nahráváte test s jednou správnou odpovědí na otázky a
          systém vyhodnotí, že se jedná o test s více správnými odpověďmi,
          překontrolujte soubor, který nahráváte.
        </p>
      </div>
    </section>
  );
}
