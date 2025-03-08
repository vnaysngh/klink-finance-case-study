import Image from "next/image";
import Certik from "@/assets/logos/certik.svg";
import Ellipse from "@/assets/banner/ellipse.svg";
import InvestorsSection from "./components/homepage/TrustedBy";
import TrustedByTheBest from "./components/homepage/Backed";
import Header from "@/layouts/Header/header";
import ListedOnSwiper from "./components/ui/swiper";
import { Copy } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] p-3 sm:p-4">
        <div className="relative z-[999] min-h-[889px] overflow-hidden rounded-t-4xl rounded-b-4xl bg-[url('/assets/banner/mobile-hero.png')] bg-cover text-white sm:min-h-[77vh] sm:bg-[url('/assets/banner/hero.png')]">
          <Header />

          <div className="mx-auto flex flex-col items-center justify-between px-6 py-12 sm:flex-row sm:px-12">
            <div className="text-center sm:w-1/2 sm:text-left">
              <h1 className="mb-6 text-4xl font-semibold tracking-[-1px] sm:text-7xl">
                <div className="text-klink-purple">$KLINK</div>
                The AI-powered infrastructure for Web3 earnings
              </h1>
              <div className="flex justify-center gap-2 sm:justify-start sm:gap-4">
                <button className="rounded-full border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] px-4 py-2 text-base font-semibold text-white shadow-[inset_0px_1.15px_20.39px_0px_#FFFFFF6E] transition-all hover:from-purple-600 hover:to-purple-400 sm:px-6 sm:py-4">
                  Buy $KLINK
                </button>
                <button className="hover:bg-opacity-20 rounded-full border border-[#9A8AFE80] px-4 py-2 text-base font-semibold text-white transition-all hover:bg-purple-500 sm:px-6 sm:py-4">
                  Stake $KLINK
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 w-full sm:relative sm:bottom-5">
            <div className="mx-auto mt-12 sm:px-12">
              <p className="mb-4 text-center text-base text-white opacity-70 sm:text-left">
                Audited By
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="m-auto flex h-[53px] items-center overflow-hidden rounded-[16px] border-0 border-[#362B4F] bg-[#2E2746] shadow-lg backdrop-blur-[130px] sm:m-0">
                  <div className="flex h-full w-1/2 items-center justify-center rounded-l-[14px] bg-[#2E2746] px-4">
                    <Image
                      src={Certik}
                      alt="Certik Logo"
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="flex h-full w-1/2 items-center justify-center gap-2 bg-[#463964] px-4 text-sm text-[#A88CD9]">
                    <span>0xSDAF...k87a</span>
                    <Copy className="h-10 w-10 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <ListedOnSwiper />
          </div>

          <video
            className="absolute bottom-[-10%] z-[-1] mx-auto w-full max-w-6xl scale-150 overflow-hidden rounded-br-4xl shadow-lg sm:right-[-20%] sm:bottom-[-55%] sm:scale-100"
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
            src={Ellipse} // Change to your image path
            alt="Ellipse"
            className="absolute right-[-10%] bottom-0"
          />
        </div>
        <TrustedByTheBest />
      </section>
      <section className="p-0 sm:p-4">
        <InvestorsSection />
      </section>
    </>
  );
}
