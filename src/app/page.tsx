import Image from "next/image";
import Kucoin from "@/assets/logos/kucoin.svg";
import BitPanda from "@/assets/logos/bitpanda.svg";
import Coinmarketcap from "@/assets/logos/coinmarket.png";
import Gate from "@/assets/logos/gate.svg";
import Mexc from "@/assets/logos/mexc.svg";
import Gecko from "@/assets/logos/gecko.svg";
import Aerodrome from "@/assets/logos/aerodome.svg";
import Uniswap from "@/assets/logos/uniswap.svg";
import Certik from "@/assets/logos/certik.svg";
import InvestorsSection from "../components/Homepage/TrustedBy";
import TrustedByTheBest from "../components/Homepage/Backed";
import Header from "@/layout/Header";

export default function Hero() {
  return (
    <>
      <section>
        <Header />

        <div className="bg-primary relative z-[999] min-h-screen overflow-hidden rounded-tl-4xl rounded-b-4xl pb-6 text-white md:pb-12 lg:min-h-[80vh]">
          <div className="spx-6 mx-auto flex flex-col items-center justify-between py-12 lg:flex-row lg:px-12">
            <div className="text-center lg:w-1/2 lg:text-left">
              <h1 className="mb-6 text-4xl font-semibold tracking-[-1px] sm:text-4xl md:text-7xl">
                <div className="text-klink-purple">$KLINK</div>
                The AI-powered infrastructure for Web3 earnings
              </h1>
              <div className="flex justify-center gap-2 md:justify-start md:gap-4">
                <button className="rounded-full border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] px-4 py-2 text-base font-semibold text-white shadow-[inset_0px_1.15px_20.39px_0px_#FFFFFF6E] transition-all hover:from-purple-600 hover:to-purple-400 md:px-6 md:py-4">
                  Buy $KLINK
                </button>
                <button className="hover:bg-opacity-20 rounded-full border border-[#9A8AFE80] px-4 py-2 text-base font-semibold text-white transition-all hover:bg-purple-500 md:px-6 md:py-4">
                  Stake $KLINK
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 px-6">
            <p className="text-opacity-70 mb-4 text-base text-white">
              Audited By
            </p>
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
          <div className="mx-auto mt-12 px-6">
            <p className="text-opacity-70 mb-4 text-base text-white">
              $KLINK Listed On
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                Kucoin,
                Mexc,
                Gate,
                BitPanda,
                Uniswap,
                Aerodrome,
                Coinmarketcap,
                Gecko,
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex h-[53.31px] w-[152.16px] items-center justify-center rounded-[16px] border-2 border-[#362B4F] bg-[#2E2746] p-[10px] shadow-lg backdrop-blur-[130px]"
                >
                  <Image
                    src={logo}
                    alt="Exchange Logo"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <video
            className="absolute right-[-25%] bottom-[-50%] z-[-1] mx-auto w-full max-w-6xl rounded-br-4xl shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://klink-cdn.klink.finance/ecosystem/klink_coin.webm"
              type="video/webm"
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
