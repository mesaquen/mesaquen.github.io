"use client";
import { useTranslations } from "next-intl";
import animationData from "@/animation/dev.animation.json";
import { LazyLottie } from "@/components/LazyLottie";
import { Header } from "@/components/Header";
export default function Home() {
  const t = useTranslations();

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <div className="flex gap-y-12 flex-col lg:flex-row max-w-screen h-lvh justify-center items-center">
      <Header
        title={t("salutation")}
        subtitle={t("job-title")}
        link="/about"
        linkText={t("about")}
      />
      <div className="motion-safe:animate-fade-in-300 w-full p-4 md:p-0 md:w-1/2 md:max-w-2xl">
        <LazyLottie
          {...animationOptions}
        />
      </div>
    </div>
  );
}
