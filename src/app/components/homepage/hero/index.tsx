"use client";
import React, { useEffect, useState } from "react";
import Header from "@/layouts/header";
import { HeroLottie } from "../../ui/lotties";
import TokenIntro from "./TokenIntro";
import ListedExchange from "./ListedExchange";
import BackgroundMedia from "./BackgroundMedia";
import Audited from "./Audited";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative z-[999] min-h-[889px] overflow-hidden rounded-t-4xl rounded-b-4xl bg-[url('/assets/banner/mobile-hero.png')] bg-cover text-white sm:min-h-[80vh] sm:bg-[url('/assets/banner/hero.png')] sm:pb-6">
      <Header />
      <HeroLottie />
      <TokenIntro isLoaded={isLoaded} />
      <div
        className={`absolute bottom-10 z-50 w-full transition-all delay-700 duration-1000 sm:relative sm:bottom-5 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <Audited />
        <ListedExchange />
      </div>
      <BackgroundMedia isLoaded={isLoaded} />
    </section>
  );
};

export default Hero;
