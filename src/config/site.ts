export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "VŠE Tester V2.0",
  description:
    "Tester k procvičování otázek z textových souborů kompatibilní s aplikací VŠE Tester",
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
