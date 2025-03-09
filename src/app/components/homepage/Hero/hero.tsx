"use client";
import Image from "next/image";
import Certik from "@/assets/logos/certik.svg";
import Ellipse from "@/assets/banner/ellipse.svg";
import MobileImage from "@/assets/banner/mobile-hero-image.png";
import Header from "@/layouts/Header/header";
import ListedOnSwiper from "../../ui/swiper";
import React, { useEffect, useState } from "react";
import { ContractAddress } from "../contract-address/contract";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section>
      <div className="relative z-[999] min-h-[889px] overflow-hidden rounded-t-4xl rounded-b-4xl bg-[url('/assets/banner/mobile-hero.png')] bg-cover pb-6 text-white sm:min-h-[77vh] sm:bg-[url('/assets/banner/hero.png')]">
        <Header />
        <div className="relative z-10 mx-auto flex flex-col items-center justify-between px-6 py-12 sm:flex-row sm:px-12">
          <div
            className={`text-center transition-all duration-1000 sm:w-1/2 sm:text-left ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="mb-6 text-4xl font-semibold tracking-[-1px] sm:text-7xl">
              <div className="text-klink-purple relative inline-block">
                $KLINK
                <span className="absolute -inset-1 block animate-pulse bg-gradient-to-r from-[#674EFF]/20 to-[#714EBD]/20 blur-lg"></span>
              </div>
              <div
                className={`transition-all delay-300 duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                The AI-powered infrastructure for Web3 earnings
              </div>
            </h1>
            <div
              className={`flex justify-center gap-2 transition-all delay-500 duration-700 sm:justify-start sm:gap-4 ${isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
              <button className="rounded-full border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] px-4 py-2 text-base font-semibold text-white shadow-[inset_0px_1.15px_20.39px_0px_#FFFFFF6E] transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-400 sm:px-6 sm:py-4">
                Buy $KLINK
              </button>
              <button className="hover:bg-opacity-20 rounded-full border border-[#9A8AFE80] px-4 py-2 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-500 sm:px-6 sm:py-4">
                Stake $KLINK
              </button>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-10 z-50 w-full transition-all delay-700 duration-1000 sm:relative sm:bottom-5 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="mx-auto mt-12 sm:px-12">
            <p className="mb-4 text-center text-base text-white opacity-70 sm:text-left">
              Audited By
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="m-auto flex h-[53px] items-center overflow-hidden rounded-[16px] border-0 border-[#362B4F] bg-[#2E2746] shadow-lg backdrop-blur-[130px] transition-all duration-300 hover:bg-[#362B4F] sm:m-0">
                <div className="flex h-full w-1/2 items-center justify-center rounded-l-[14px] bg-[#2E2746] px-4">
                  <Image
                    src={Certik}
                    alt="Certik Logo"
                    className="h-6 w-auto"
                  />
                </div>
                <ContractAddress />
              </div>
            </div>
          </div>
          <ListedOnSwiper />
        </div>

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
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .lottie-container svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Hero;
