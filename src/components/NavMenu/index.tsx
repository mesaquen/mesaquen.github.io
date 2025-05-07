"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import * as Icon from "@deemlol/next-icons";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";
import { createPortal } from "react-dom";
import { useState } from "react";

export type NavigationLink = {
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

  const [shouldDisplayMenu, setDisplayMenu] = useState(false);

  function getNavigationClass(link: NavigationLink): string {
    return route.length && link.href.includes(route)
      ? "border-white"
      : "border-black";
  }

  return (
    <nav className="max-w-screen z-90 text-white bg-black flex fixed top-0 left-0 right-0 h-20">
      <div className="container m-auto px-6 flex flex-row justify-between items-center">
        <span className="text-2xl">{t("name")}</span>
        <div className="justify-end flex flex-row gap-2 lg:gap-8 items-center">
          <ul className="text-lg hidden lg:flex flex-row gap-8 pr-8 border-r-2 border-gray-700">
            {navigationList.map((item) => {
              const activeClass = getNavigationClass(item);

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
          <LocaleSwitcher />
          <Icon.Menu
            onClick={(event) => {
              event.stopPropagation(); // prevent MobileMenu's react portal from capturing event
              return setDisplayMenu(true);
            }}
            className="lg:hidden"
            size={32}
          />
        </div>
      </div>
      {typeof document !== "undefined" &&
        shouldDisplayMenu &&
        createPortal(
          <MobileMenu
            onClose={() => setDisplayMenu(false)}
            links={navigationList}
          />,
          document.body
        )}
    </nav>
  );
}
