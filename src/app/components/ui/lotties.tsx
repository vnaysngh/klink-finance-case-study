"use client";
import React, { useEffect, useRef } from "react";
import Lottie, { LottieRef } from "lottie-react";
import backgroundAnimation from "@/assets/lottie/mining.json";

export const HeroLottie = () => {
  const lottieRef: LottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.2);
    }
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 left-[-25%] z-[-1] h-full w-full">
      <div className="h-full opacity-5">
        <Lottie
          animationData={backgroundAnimation}
          loop={true}
          className="h-full w-full object-cover"
          lottieRef={lottieRef}
        />
      </div>
    </div>
  );
};
