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
import InvestorsSection from "./[homepage]/partners";

export default function Hero() {
  return (
    <>
      <section>
        <div className="min-h-screen lg:min-h-[80vh] px-12 text-white bg-primary rounded-4xl py-6 md:py-12">
          <header className="mx-auto px-6 py-6 flex justify-between items-center bg-white rounded-4xl">
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
          <div className="mx-auto px-6 flex flex-col lg:flex-row items-center justify-between py-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-7xl font-semibold mb-6">
                The AI-powered infrastructure for Web3 earnings
              </h1>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-300 hover:from-purple-600 hover:to-purple-400 transition-all">
                  Buy $KLINK
                </button>

                <button className="px-6 py-2 rounded-full text-white font-semibold border border-purple-500 hover:bg-purple-500 hover:bg-opacity-20 transition-all">
                  Stake $KLINK
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto px-6 mt-12">
            <p className="text-base mb-4 text-white text-opacity-70">
              Audited By
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="w-[152.16px] h-[53.31px] flex items-center justify-center bg-[#2E2746] border-2 border-[#362B4F] rounded-[16px] p-[10px] shadow-lg backdrop-blur-[130px]">
                <Image
                  src={Certik}
                  alt="Exchange Logo"
                  className="object-contain"
                />
              </div>
              {/* <div className="text-base">4vdfdncd08034309cd0</div> */}
            </div>
          </div>
          <div className="mx-auto px-6 mt-12">
            <p className="text-base mb-4 text-white text-opacity-70">
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
                Gecko
              ].map((logo, index) => (
                <div
                  key={index}
                  className="w-[152.16px] h-[53.31px] flex items-center justify-center bg-[#2E2746] border-2 border-[#362B4F] rounded-[16px] p-[10px] shadow-lg backdrop-blur-[130px]"
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
        </div>
      </section>
      <section>
        <InvestorsSection />
      </section>
    </>
  );
}
