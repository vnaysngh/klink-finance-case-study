"use client";
import React, { useEffect, useState } from "react";
import Header from "@/layouts/header";
import { HeroLottie } from "../../ui/lotties";
import TokenIntro from "./TokenIntro";
import ListedExchange from "./ListedExchange";
import BackgroundMedia from "./BackgroundMedia";
import Audited from "./Audited";

export interface LoadedProps {
  isLoaded: boolean;
}

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="mx-auto p-3 sm:pt-4">
      <div className="relative z-[999] min-h-[889px] overflow-hidden rounded-t-4xl rounded-b-4xl bg-[url('/assets/banner/mobile-hero.png')] bg-cover text-white sm:min-h-[80vh] sm:bg-[url('/assets/banner/hero.png')] sm:pb-6">
        <Header />
        <HeroLottie />
        <TokenIntro isLoaded={isLoaded} />

        <Audited isLoaded={isLoaded} />
        <ListedExchange isLoaded={isLoaded} />
        <BackgroundMedia isLoaded={isLoaded} />
      </div>
    </section>
  );
};

export default Hero;
