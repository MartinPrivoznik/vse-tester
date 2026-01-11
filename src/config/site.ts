export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "VŠE Tester V2.0",
  description:
    "Tester k procvičování otázek z textových souborů kompatibilní s aplikací VŠE Tester",
  longDescription:
    "Webová aplikace VŠE Tester V2.0 - nejlepší nástroj pro procvičování testových otázek. Nahrávejte své testy ve formátu .txt, procvičujte otázky online a zlepšujte své znalosti. Plně kompatibilní s aplikací VŠE Tester.",
  keywords: [
    "VŠE Tester",
    "test",
    "tester",
    "otázky",
    "procvičování",
    "studium",
    "VŠE",
    "Vysoká škola ekonomická",
    "online tester",
    "testovací aplikace",
    "studijní pomůcka",
    "učení",
    "zkouška",
    "příprava na zkoušku",
    "quiz",
    "testování znalostí",
  ],
  author: {
    name: "Martin Přívozník",
    url: "https://privoznik.dev",
  },
  creator: "Martin Přívozník",
  publisher: "Martin Přívozník",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://vse-tester.vercel.app",
  locale: "cs_CZ",
  type: "website",
  navItems: [
    {
      label: "Domů",
      href: "/",
    },
    {
      label: "Moje testy",
      href: "/my-work",
    },
    {
      label: "Návod",
      href: "/guide",
    },
  ],
  navMenuItems: [
    {
      label: "Domů",
      href: "/",
    },
    {
      label: "Moje testy",
      href: "/my-work",
    },
    {
      label: "Návod",
      href: "/guide",
    },
  ],
  links: {
    github: "https://github.com/MartinPrivoznik/vse-tester",
  },
};
