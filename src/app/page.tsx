import Image from "next/image";
import Certik from "@/assets/logos/certik.svg";
import InvestorsSection from "../components/Homepage/TrustedBy";
import TrustedByTheBest from "../components/Homepage/Backed";
import Header from "@/layout/Header";
import ListedOnSwiper from "@/components/ui/swiper";

export default function Hero() {
  return (
    <>
      <section>
        <div className="bg-primary relative z-[999] min-h-screen overflow-hidden rounded-4xl pb-6 text-white sm:min-h-[80vh] sm:pb-12">
          <Header />

          <div className="mx-auto flex flex-col items-center justify-between px-6 py-12 sm:flex-row sm:px-12">
            <div className="text-center sm:w-1/2 sm:text-left">
              <h1 className="mb-6 text-4xl font-semibold tracking-[-1px] sm:text-4xl sm:text-7xl">
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
          <div className="absolute bottom-8 w-full sm:relative sm:bottom-5">
            <div className="mx-auto mt-12 px-6 sm:px-12">
              <p className="mb-4 text-base text-white opacity-70">Audited By</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex h-[53.31px] w-[152.16px] items-center justify-center rounded-[16px] border-2 border-[#362B4F] bg-[#2E2746] p-[10px] shadow-lg backdrop-blur-[130px]">
                  <Image
                    src={Certik}
                    alt="Exchange Logo"
                    className="object-contain"
                  />
                </div>
                {/* <div className="text-base">4vdfdncd08034309cd0</div> */}
              </div>
            </div>
            <ListedOnSwiper />
          </div>

          <video
            className="absolute bottom-[-35%] z-[-1] mx-auto w-full max-w-6xl scale-175 overflow-hidden rounded-br-4xl shadow-lg sm:right-[-20%] sm:bottom-[-55%] sm:scale-100"
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
        </div>
      </section>
      <TrustedByTheBest />

      <InvestorsSection />
    </>
  );
}
