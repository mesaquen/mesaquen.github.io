"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useParams, usePathname, useSearchParams } from "next/navigation";

type NavigationLink = {
  href: string;
  title: string;
};

const navigationList: NavigationLink[] = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/about",
    title: "about",
  },
  {
    href: "/links",
    title: "links",
  },
];

export function NavMenu() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const route = pathname.replace(`/${locale}`, "");

  return (
    <nav className="text-white bg-black flex fixed top-0 left-0 right-0 h-20">
      <div className="container m-auto px-4 flex flex-row justify-between items-center">
        <span className="text-2xl">{t("name")}</span>
        <ul className="text-xl font-bold flex flex-row gap-4">
          {navigationList.map((item) => {
            debugger
            const activeClass = route.length && item.href.includes(route)
              ? "border-white"
              : "border-black";
            return (
              <li
                className={`hover:text-primary transition-all cursor-pointer border-b-2 ${activeClass}`}
                key={item.title}
              >
                <Link href={item.href}>{t(item.title)}</Link>
              </li>
            );
          })}
        </ul>
        <p>{locale}</p>
      </div>
    </nav>
  );
}
