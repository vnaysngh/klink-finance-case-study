// components/InvestorsSection.jsx
import Link from "next/link";
import Castrum from "@/assets/logos/castrum.png";
import Signum from "@/assets/logos/signum.svg";
import Blockchain from "@/assets/logos/blockchain.png";
import MasterVentures from "@/assets/logos/masterventures.png";
import Coindesk from "@/assets/logos/coindesk.svg";
import Cointelegraph from "@/assets/logos/cointelegraph.png";
import CoinMarketCap from "@/assets/logos/coinmarket.png";
import Cointrust from "@/assets/logos/cointrust.png";
import Image from "next/image";

const InvestorsSection = () => {
  const investors = [
    { name: "CASTRUM CAPITAL", logo: Castrum },
    {
      name: "BLOCKCHAIN FOUNDERS FUND",
      logo: Blockchain
    },
    { name: "SIGNUM CAPITAL", logo: Signum },
    { name: "MASTER VENTURES", logo: MasterVentures }
  ];

  const mediaPartners = [
    { name: "Coindesk", logo: Coindesk, readUrl: "#" },
    { name: "CoinTelegraph", logo: Cointelegraph, readUrl: "#" },
    { name: "CoinMarketCap", logo: CoinMarketCap, readUrl: "#" }
  ];

  const testimonials = [
    {
      logo: CoinMarketCap,
      text: 'Klink Finance is well-positioned to advance its mission of democratizing crypto wealth creation. These funds will be crucial to provide the necessary capital for Klinks expansion and ability to unlock new opportunities in the Web3 space. By 2025, Klink Finance aims to reach over 1 million registered users, or "Klinkers," utilizing the platform for their daily wealth management needs.',
      readUrl: "#"
    },
    {
      logo: Cointrust,
      text: "Through this collaboration, Klink Finance moves closer to its objective of becoming the premier platform for wealth generation in cryptocurrency and decentralized finance (DeFi). The user-friendly company simplifies Web3 accessibility, providing a direct gateway for individuals into the decentralized application (dApp) ecosystem. This is achieved through its affiliate quest portal, an airdrop center, and a token launch pool, all aimed at expanding user participation in online earning initiatives.",
      readUrl: "#"
    }
  ];

  return (
    <div className="bg-gradient-to-b bg-primary rounded-4xl my-12 text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto mb-48">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-7xl italic font-extrabold">
            Backed By <span className="text-purple-400">The Best</span>
          </h2>
          <div className="flex gap-2">
            <button className="bg-gray-800 bg-opacity-50 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="bg-gray-800 bg-opacity-50 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {investors.map((investor, index) => (
            <div key={index} className="flex items-center">
              <div className="h-16 relative">
                <div className="w-48 h-12">
                  <div className="text-gray-300 font-semibold text-lg">
                    <Image
                      src={investor.logo}
                      alt={investor.name}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-7xl italic font-extrabold">
            Our <span className="text-purple-400">Media & Partners</span>
          </h2>
          <div className="flex gap-2">
            <button className="bg-purple-900 px-4 py-2 rounded-full">
              Clients
            </button>
            <button className="bg-purple-500 px-6 py-2 rounded-full">
              Press
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mediaPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-gradient-to-b border-0 rounded-[25px] p-[30px] flex flex-col w-[361px] h-[164px] border-gradient-to-b from-[#9C78ED20] to-[#9C78ED10] shadow-lg backdrop-blur-[130px]"
            >
              <div className="h-8 mb-auto">
                <div className="text-4xl text-gray-300 font-semibold">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain"
                  />
                </div>
              </div>
              <Link
                href={partner.readUrl}
                className="flex items-center text-base text-purple-400 mt-4 w-fit px-5 py-1 rounded-3xl border-1 border-border "
              >
                Read
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-0  border-gradient-to-b bg-gradient-to-b from-[#9C78ED20] to-[#9C78ED10] shadow-lg backdrop-blur-[130px]  bg-opacity-30 rounded-2xl p-8 flex flex-col"
            >
              <div className="absolute inset-0 border-[5px] rounded-[40px] border-transparent p-[5px]">
                {/* <div className="h-full w-full rounded-[35px] bg-white bg-clip-padding border-[5px] border-transparent bg-gradient-to-b from-[#9C78ED33] to-[#9C78ED1A]"></div> */}
              </div>

              <div className="relative text-6xl text-[#9C78ED]">“</div>

              <p className="relative text-white leading-relaxed italic text-base">
                {testimonial.text}
              </p>

              <div className="relative flex flex-col gap-4 my-6">
                <div className="flex items-center gap-2 text-purple-400 text-lg font-semibold ">
                  <Image
                    src={testimonial.logo}
                    alt="CoinMarketCap"
                    width={235}
                    height={40}
                  />
                </div>
                <Link
                  href="#"
                  className="flex items-center text-base text-purple-400 mt-4 w-fit px-5 py-1 rounded-3xl border-1 border-border "
                >
                  Read
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-7xl italic font-extrabold">
          Join The{" "}
          <span className="text-purple-400">
            Klink
            <br />
            Community
          </span>
        </h2>

        <div className="flex items-center justify-between w-full">
          <h2 className="text-white text-2xl whitespace-nowrap font-extrabold">
            Official Channels
          </h2>

          <div className="flex gap-3">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 font-semibold rounded-full bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] border border-[#ffffff1a] text-white hover:opacity-80 transition"
            >
              Twitter <span className="text-purple-400">250k</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 font-semibold rounded-full bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] border border-[#ffffff1a] text-white hover:opacity-80 transition"
            >
              Telegram <span className="text-purple-400">350k</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 font-semibold rounded-full bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] border border-[#ffffff1a] text-white hover:opacity-80 transition"
            >
              Discord <span className="text-purple-400">100k</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 font-semibold rounded-full bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] border border-[#ffffff1a] text-white hover:opacity-80 transition"
            >
              Link3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsSection;
