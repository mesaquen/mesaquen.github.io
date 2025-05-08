"use client";

import { LocaleType } from "@/i18n/locales";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import * as Icon from "@deemlol/next-icons";

type ContactLink = {
  title: string;
  description: {
    [key in LocaleType]: string;
  };
  url: string;
};
const LINKS: ContactLink[] = [
  {
    title: "LinkedIn",
    description: {
      en: "Professional profile. Let's connect!",
      pt: "Peril profissional. Vamos nos conectar!",
    },
    url: "https://linkedin.com/in/mesaquen",
  },
  {
    title: "Github",
    description: {
      en: "I share cool stuff that I'm learning or researching.",
      pt: "Publico coisas legais que eu estou aprendendo ou pesquisando.",
    },
    url: "https://github.com/mesaquen",
  },

  {
    title: "DEV.to",
    description: {
      en: "Sometimes I post stuff, mostly to remind myself later.",
      pt: "De vez em quando posto algo. Normalmente pra me lembrar depois.",
    },
    url: "https://dev.to/mesaquen",
  },
];

export default function LinksPage() {
  const t = useTranslations();
  const locale = useLocale() as LocaleType;

  return (
    <div className="mx-auto px-4 lg:px-0 flex flex-col gap-8 items-center justify-center w-full h-screen">
      <h1 className="text-2xl font-bold">{t("reach-me-out")}</h1>

      <ul className="flex flex-col lg:flex-row gap-4">
        {LINKS.map((link) => (
          <li key={link.title}>
            <Link href={link.url} target="_blank">
              <div className="shadow-md shadow-black group border-1 border-black rounded-xl px-8 pb-8 min-h-48 lg:w-sm flex flex-col justify-end">
                <h2 className="flex items-baseline gap-2 transition-all text-2xl font-bold group-hover:mb-4">
                  {link.title}
                  <Icon.ExternalLink
                    className="group-hover:text-orange-500"
                    size={16}
                  />
                </h2>
                <p className="transition-opacity opacity-70 group-hover:opacity-100 text-lg">
                  {link.description[locale]}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
