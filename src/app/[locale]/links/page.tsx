import { useTranslations } from "next-intl";

export default function LinksPage() {
  const t = useTranslations();
  return (
    <>
      <h1>{t("links")}</h1>
    </>
  );
}
