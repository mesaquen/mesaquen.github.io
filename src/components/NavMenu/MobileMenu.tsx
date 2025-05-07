import { Link } from "@/i18n/navigation";
import { NavigationLink } from ".";
import { useTranslations } from "next-intl";
import * as Icon from "@deemlol/next-icons";
import { useCallback, useEffect, useRef } from "react";

export function MobileMenu({
  links,
  onClose,
}: {
  onClose(): void;
  links: NavigationLink[];
}) {
  const t = useTranslations();
  const divRef = useRef<HTMLDivElement>(null)

  const handleDismiss = useCallback((event: MouseEvent) => {
    // If click was inside menu, ignore
    if (divRef.current?.contains(event.target as Node)) {
      return
    }
    
    onClose()
  }, [onClose])

  useEffect(() => {
    window.addEventListener('click', handleDismiss)

    return () => window.removeEventListener('click', handleDismiss)
  }, [handleDismiss])

  return (
    <div ref={divRef} className="z-[101] animate-fast-fade-in fixed bg-white dark:bg-gray-700 min-w-3/4 h-screen top-0 right-0 flex flex-col items-end gap-12 shadow-xl shadow-black">
      <button
        onClick={onClose}
        className="text-lg p-4 flex shrink-0 gap-2 items-center"
      >
        {t("close")} <Icon.X size={24} />
      </button>

      <ul className="w-full">
        {links.map((item) => (
          <li
            className="text-xl px-4 py-8 not-[:last-child]:border-b-2 border-gray-300 dark:border-gray-800"
            key={item.title}
            onClick={onClose}
          >
            <Link href={item.href}>{t(item.title)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
