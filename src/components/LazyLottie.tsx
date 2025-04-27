"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { LottieComponentProps } from "lottie-react";
const LazyLottieComponent = lazy(() => import("lottie-react"));

export function LazyLottie({ ...props }: LottieComponentProps) {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  if (didMount) {
    return (
      <Suspense fallback={null}>
        <LazyLottieComponent {...props} />
      </Suspense>
    );
  }

  return null;
}
