"use client";

import React, { useEffect, useState } from "react";

import Header from "@/layouts/header/header";
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
    <section className="relative z-[999] min-h-[889px] overflow-hidden rounded-t-4xl rounded-b-4xl bg-[url('/assets/banner/mobile-hero.png')] bg-cover pb-6 text-white sm:min-h-[100vh] sm:bg-[url('/assets/banner/hero.png')]">
      <Header />
      <HeroLottie />
      <TokenIntro isLoaded={isLoaded} />
      <Audited />
      <ListedExchange isLoaded={isLoaded} />
      <BackgroundMedia isLoaded={isLoaded} />
    </section>
  );
};

export default Hero;
