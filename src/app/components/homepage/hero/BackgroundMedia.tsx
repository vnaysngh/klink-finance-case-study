import React from "react";
import Image from "next/image";
import Ellipse from "@/assets/banner/ellipse.svg";
import MobileImage from "@/assets/banner/mobile-hero-image.png";
import { LoadedProps } from ".";

export default function BackgroundMedia({ isLoaded }: LoadedProps) {
  return (
    <>
      <video
        className="absolute bottom-[-10%] z-[-1] mx-auto w-full max-w-6xl scale-150 overflow-hidden rounded-br-4xl shadow-lg sm:right-[-20%] sm:bottom-[-60%] sm:scale-100"
        autoPlay
        loop
        muted
        playsInline
        poster="https://klink-cdn.klink.finance/ecosystem/klink_coin.webp"
      >
        <source
          src="https://klink-cdn.klink.finance/ecosystem/klink_coin.webm"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Image
        src={Ellipse}
        alt="Ellipse"
        className={`absolute right-[-10%] bottom-0 z-0 hidden animate-pulse transition-opacity duration-2000 sm:flex ${isLoaded ? "opacity-70" : "opacity-0"}`}
      />
      <Image
        src={MobileImage}
        alt="MobileImage"
        className={`absolute right-0 bottom-0 z-0 w-full transition-all duration-1000 sm:hidden ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      />
    </>
  );
}
