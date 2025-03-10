"use client";
import React, { useEffect, useRef } from "react";
import Lottie, { LottieRef } from "lottie-react";
import lottieHero from "@/assets/lottie/mining.json";
import lottieMission from "@/assets/lottie/lazydoge.json";
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
          animationData={lottieHero}
          loop={true}
          className="h-full w-full object-cover"
          lottieRef={lottieRef}
        />
      </div>
    </div>
  );
};

export const MissionLottie = () => {
  return (
    <div className="pointer-events-none absolute inset-0 left-0 hidden h-full w-full sm:block">
      <div className="h-full opacity-5">
        <Lottie animationData={lottieMission} loop={true} />
      </div>
    </div>
  );
};
