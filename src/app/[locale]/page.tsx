"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import animationData from "@/animation/dev.animation.json";
import Lottie from "react-lottie";

export default function Home() {
  const t = useTranslations();

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <div>
      <h1>{t("salutation")}</h1>
      <p>{t("job-title")}</p>
      <Link href="/about">{t("about")}</Link>
      <div className="bg-amber-300 w-full md:w-1/2 md:max-w-2xl">
        <Lottie options={animationOptions} />
      </div>
    </div>
  );
}
