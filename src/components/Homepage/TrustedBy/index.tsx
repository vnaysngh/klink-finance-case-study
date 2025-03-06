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
      logo: Blockchain,
    },
    { name: "SIGNUM CAPITAL", logo: Signum },
    { name: "MASTER VENTURES", logo: MasterVentures },
  ];

  const mediaPartners = [
    { name: "Coindesk", logo: Coindesk, readUrl: "#" },
    { name: "CoinTelegraph", logo: Cointelegraph, readUrl: "#" },
    { name: "CoinMarketCap", logo: CoinMarketCap, readUrl: "#" },
  ];

  const testimonials = [
    {
      logo: CoinMarketCap,
      text: 'Klink Finance is well-positioned to advance its mission of democratizing crypto wealth creation. These funds will be crucial to provide the necessary capital for Klinks expansion and ability to unlock new opportunities in the Web3 space. By 2025, Klink Finance aims to reach over 1 million registered users, or "Klinkers," utilizing the platform for their daily wealth management needs.',
      readUrl: "#",
    },
    {
      logo: Cointrust,
      text: "Through this collaboration, Klink Finance moves closer to its objective of becoming the premier platform for wealth generation in cryptocurrency and decentralized finance (DeFi). The user-friendly company simplifies Web3 accessibility, providing a direct gateway for individuals into the decentralized application (dApp) ecosystem. This is achieved through its affiliate quest portal, an airdrop center, and a token launch pool, all aimed at expanding user participation in online earning initiatives.",
      readUrl: "#",
    },
  ];

  return (
    <div className="bg-primary my-12 rounded-4xl bg-gradient-to-b px-4 py-16 text-white md:px-8">
      <div className="mx-auto mb-48 max-w-6xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-7xl font-extrabold italic">
            Backed By <span className="text-purple-400">The Best</span>
          </h2>
          <div className="flex gap-2">
            <button className="bg-opacity-50 rounded-full bg-gray-800 p-2">
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
            <button className="bg-opacity-50 rounded-full bg-gray-800 p-2">
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

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {investors.map((investor, index) => (
            <div key={index} className="flex items-center">
              <div className="relative h-16">
                <div className="h-12 w-48">
                  <div className="text-lg font-semibold text-gray-300">
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

      <div className="mx-auto mb-20 max-w-6xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-7xl font-extrabold italic">
            Our <span className="text-purple-400">Media & Partners</span>
          </h2>
          <div className="flex gap-2">
            <button className="rounded-full bg-purple-900 px-4 py-2">
              Clients
            </button>
            <button className="rounded-full bg-purple-500 px-6 py-2">
              Press
            </button>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {mediaPartners.map((partner, index) => (
            <div
              key={index}
              className="border-gradient-to-b flex h-[164px] w-[361px] flex-col rounded-[25px] border-0 bg-gradient-to-b from-[#9C78ED20] to-[#9C78ED10] p-[30px] shadow-lg backdrop-blur-[130px]"
            >
              <div className="mb-auto h-8">
                <div className="text-4xl font-semibold text-gray-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain"
                  />
                </div>
              </div>
              <Link
                href={partner.readUrl}
                className="border-border mt-4 flex w-fit items-center rounded-3xl border-1 px-5 py-1 text-base text-purple-400"
              >
                Read
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
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

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-gradient-to-b bg-opacity-30 flex flex-col rounded-2xl border-0 bg-gradient-to-b from-[#9C78ED20] to-[#9C78ED10] p-8 shadow-lg backdrop-blur-[130px]"
            >
              <div className="absolute inset-0 rounded-[40px] border-[5px] border-transparent p-[5px]">
                {/* <div className="h-full w-full rounded-[35px] bg-white bg-clip-padding border-[5px] border-transparent bg-gradient-to-b from-[#9C78ED33] to-[#9C78ED1A]"></div> */}
              </div>

              <div className="relative text-6xl text-[#9C78ED]">“</div>

              <p className="relative text-base leading-relaxed text-white italic">
                {testimonial.text}
              </p>

              <div className="relative my-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-purple-400">
                  <Image
                    src={testimonial.logo}
                    alt="CoinMarketCap"
                    width={235}
                    height={40}
                  />
                </div>
                <Link
                  href="#"
                  className="border-border mt-4 flex w-fit items-center rounded-3xl border-1 px-5 py-1 text-base text-purple-400"
                >
                  Read
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
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

      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-7xl font-extrabold italic">
          Join The{" "}
          <span className="text-purple-400">
            Klink
            <br />
            Community
          </span>
        </h2>

        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-extrabold whitespace-nowrap text-white">
            Official Channels
          </h2>

          <div className="flex gap-3">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              Twitter <span className="text-purple-400">250k</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              Telegram <span className="text-purple-400">350k</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              Discord <span className="text-purple-400">100k</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
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
