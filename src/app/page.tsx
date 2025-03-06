import Image from "next/image";
import Kucoin from "@/assets/logos/kucoin.svg";
import BitPanda from "@/assets/logos/bitpanda.svg";
import Coinmarketcap from "@/assets/logos/coinmarket.png";
import Gate from "@/assets/logos/gate.svg";
import Mexc from "@/assets/logos/mexc.svg";
import Gecko from "@/assets/logos/gecko.svg";
import Aerodrome from "@/assets/logos/aerodome.svg";
import Uniswap from "@/assets/logos/uniswap.svg";
import Klink from "@/assets/logos/klink.png";
import Certik from "@/assets/logos/certik.svg";
import InvestorsSection from "../components/Homepage/TrustedBy";
import TrustedByTheBest from "../components/Homepage/Backed";

export default function Hero() {
  return (
    <>
      <section>
        <header className="mx-auto flex items-center justify-between rounded-4xl bg-white px-6 py-6">
          <div className="text-2xl font-bold text-white">
            <Image src={Klink} alt="Klink Finance" />
          </div>
          {/* <nav className="space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/buy" className="text-gray-300 hover:text-white">
                Buy SKLINK
              </Link>
              <Link href="/stake" className="text-gray-300 hover:text-white">
                Stake SKLINK
              </Link>
            </nav> */}
        </header>
        <div className="bg-primary relative z-[999] min-h-screen overflow-hidden rounded-4xl px-12 py-6 text-white md:py-12 lg:min-h-[80vh]">
          <div className="mx-auto flex flex-col items-center justify-between px-6 py-12 lg:flex-row">
            <div className="text-center lg:w-1/2 lg:text-left">
              <h1 className="mb-6 text-4xl font-semibold tracking-[-1px] md:text-7xl">
                <div className="text-klink-purple">$KLINK</div>
                The AI-powered infrastructure for Web3 earnings
              </h1>
              <div className="flex gap-4">
                <button className="rounded-full border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] px-6 py-3 text-base font-semibold text-white shadow-[inset_0px_1.15px_20.39px_0px_#FFFFFF6E] transition-all hover:from-purple-600 hover:to-purple-400">
                  Buy $KLINK
                </button>

                <button className="hover:bg-opacity-20 rounded-full border border-[#9A8AFE80] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-purple-500">
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
            className="absolute right-[-25%] bottom-[-50%] z-[-1] mx-auto w-full max-w-6xl rounded-lg shadow-lg"
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
