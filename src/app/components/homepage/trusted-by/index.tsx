"use client";
import { useRef } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation, Autoplay } from "swiper/modules";
import BannerImage1 from "@/assets/banner/backed-banner-image-1.png";
import MobileBannerImage1 from "@/assets/banner/mobile-backed-banner-image-1.png";
import BannerImage2 from "@/assets/banner/backed-banner-image-2.png";
import BannerImage3 from "@/assets/banner/backed-banner-image-3.png";
import Twitter from "@/assets/socials/twitter.png";
import Discord from "@/assets/socials/discord.png";
import Telegram from "@/assets/socials/telegram.png";
import Link3 from "@/assets/socials/link3.png";
import Ellipse from "@/assets/banner/ellipse2.svg";
import PolkaDots from "@/assets/banner/polkadots-white.svg";
import Skewed from "@/assets/banner/skew.png";

import "swiper/css";
import "swiper/css/navigation";

const InvestorsSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const investors = [
    { name: "CASTRUM CAPITAL", logo: Castrum },
    {
      name: "BLOCKCHAIN FOUNDERS FUND",
      logo: Blockchain,
    },
    { name: "SIGNUM CAPITAL", logo: Signum },
    { name: "MASTER VENTURES", logo: MasterVentures },
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, @Klinkfinance sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore magnaaliqua. ncididunt ut labore et dolore magna.",
      readUrl: "#",
    },
    {
      logo: Cointrust,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, @Klinkfinance sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore magnaaliqua. ncididunt ut labore et dolore magna.",
      readUrl: "#",
    },
    {
      logo: CoinMarketCap,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, @Klinkfinance sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore magnaaliqua. ncididunt ut labore et dolore magna.",
      readUrl: "#",
    },
    {
      logo: Cointrust,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, @Klinkfinance sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore magnaaliqua. ncididunt ut labore et dolore magna.",
      readUrl: "#",
    },
  ];

  return (
    <div className="bg-primary relative overflow-hidden bg-gradient-to-b px-4 py-20 text-white sm:rounded-4xl sm:py-32">
      <div className="mx-auto mb-20 max-w-5xl sm:mb-48">
        <div className="relative z-10 mb-12 hidden items-center justify-between sm:flex">
          <h2 className="text-left text-6xl font-extrabold italic">
            Backed By <span className="text-klink-purple">The Best</span>
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button
              className="bg-opacity-50 rounded-full bg-gray-800 p-2"
              onClick={() => swiperRef.current?.slidePrev()}
            >
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
            <button
              className="bg-opacity-50 rounded-full bg-gray-800 p-2"
              onClick={() => swiperRef.current?.slideNext()}
            >
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

        <div className="mb-12 sm:hidden">
          <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[-3px]">
            Backed <br />
            <span className="text-klink-purple">by the best</span>
          </h2>
        </div>

        {/* <div className="grid grid-cols-2 gap-8 sm:grid-cols-4"> */}
        {/* Swiper Component */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 4 }, // Show 4 slides on larger screens
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          className="relative z-10"
        >
          {investors.map((investor, index) => (
            <SwiperSlide key={index} className="flex w-3xl justify-center">
              {/* Fixed width for the slide container */}
              <div className="flex h-16 w-48 items-center justify-center">
                <Image
                  src={investor.logo}
                  alt={investor.name}
                  className="object-contain"
                  width={192} // Set explicit width for the image
                  height={64} // Set explicit height for the image
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>

      <div className="mx-auto mb-20 max-w-5xl">
        <div className="mb-12 items-center justify-between sm:flex">
          <h2 className="hidden text-6xl font-extrabold italic sm:block">
            Our <span className="text-klink-purple">Media & Partners</span>
          </h2>
          <div className="mb-12 sm:hidden">
            <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[-3px]">
              Klink in <br />
              <span className="text-klink-purple">the Press</span>
            </h2>
          </div>
          <div className="mb-6 flex gap-4">
            <button className="rounded-full border border-purple-500 bg-transparent px-6 py-2 text-purple-500 transition-colors hover:bg-purple-500 hover:text-white">
              Clients
            </button>
            <button className="rounded-full border border-purple-500 bg-transparent px-6 py-2 text-purple-500 transition-colors hover:bg-purple-500 hover:text-white">
              Press
            </button>
          </div>
        </div>

        <div className="relative z-10 mb-16 w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.25}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {mediaPartners.map((partner, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="border-gradient-to-b flex w-full max-w-sm flex-col rounded-[25px] border-0 bg-gradient-to-b from-[#9C78ED20] to-[#9C78ED10] p-[30px] shadow-lg backdrop-blur-[130px]">
                  <div className="mb-auto">
                    <Image src={partner.logo} alt={partner.name} height={40} />
                  </div>
                  <Link
                    href={partner.readUrl}
                    className="border-border text-klink-purple mt-4 flex w-fit items-center rounded-3xl border-1 px-5 py-1 text-base"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* </div> */}

        <Swiper
          spaceBetween={10}
          slidesPerView={1.1} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 2 }, // Show 2 slides on larger screens
          }}
          autoplay={{
            delay: 3000, // 3 sec delay per slide
            disableOnInteraction: false, // Keeps autoplay running after interaction
          }}
          modules={[Autoplay]}
          className="mx-auto max-w-10/12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="border-gradient-to-b bg-opacity-30 flex h-full flex-col rounded-2xl border-0 bg-gradient-to-b from-[#9C78ED20] to-[#9C78ED10] p-8 shadow-lg backdrop-blur-[130px]">
                <div className="relative text-6xl text-[#9C78ED]">“</div>

                <p className="relative flex-grow text-base leading-relaxed text-white italic">
                  {testimonial.text}
                </p>

                <div className="relative my-6 flex flex-col gap-4">
                  <div className="text-klink-purple flex items-center gap-2 text-lg font-semibold">
                    <Image
                      src={testimonial.logo}
                      alt="CoinMarketCap"
                      width={235}
                      height={40}
                    />
                  </div>
                  <Link
                    href="#"
                    className="border-border text-klink-purple mt-4 hidden w-fit items-center rounded-3xl border-1 px-5 py-1 text-base sm:flex"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 hidden text-6xl font-extrabold italic sm:block">
          Join The{" "}
          <span className="text-klink-purple">
            Klink
            <br />
            Community
          </span>
        </h2>

        <div className="mb-12 sm:hidden">
          <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[-3px]">
            Join the <span className="text-klink-purple">Klink</span> <br />
            <span className="text-klink-purple">Community</span>
          </h2>
        </div>

        <div className="relative z-999 flex w-full flex-col items-center sm:mb-32 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="mb-4 text-2xl font-extrabold whitespace-nowrap text-white sm:mb-0">
            Official Channels
          </h2>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="https://x.com/klinkfinance"
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              <Image src={Twitter} alt="twitter-logo" />
              Twitter <span className="text-klink-purple">250k</span>
            </Link>

            <Link
              href="https://discord.gg/klinkfinance"
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              <Image src={Discord} alt="twitter-logo" />
              Telegram <span className="text-klink-purple">350k</span>
            </Link>

            <Link
              href="https://t.me/klinkfinance"
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              <Image src={Telegram} alt="twitter-logo" />
              Discord <span className="text-klink-purple">100k</span>
            </Link>

            <Link
              href="https://link3.to/klinkfinance"
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              <Image src={Link3} alt="twitter-logo" />
              Link3
            </Link>
          </div>
        </div>
      </div>
      <section>
        <Image
          src={BannerImage1}
          alt="banner-image-1"
          className="absolute top-[0] left-0 hidden w-full sm:flex"
        />
        <Image
          src={MobileBannerImage1}
          alt="banner-image-1"
          className="absolute top-[0] left-0 flex w-full sm:hidden"
        />
        <Image
          src={BannerImage2}
          alt="banner-image-1"
          className="absolute bottom-[0] left-0 z-0"
        />
        <Image
          src={BannerImage3}
          alt="banner-image-2"
          className="absolute top-0 left-0"
        />
        <Image
          src={Ellipse}
          alt="banner-image-3"
          className="absolute bottom-[0%] left-0 w-full"
        />
        <Image
          src={PolkaDots}
          alt="banner-image-3"
          className="absolute top-[-20%] left-0 w-full"
        />
        <Image
          src={PolkaDots}
          alt="banner-image-3"
          className="absolute bottom-[-20%] left-0 z-50 w-full"
        />
        <Image
          src={Skewed}
          alt="banner-image-3"
          className="absolute bottom-0 left-0 z-[999] hidden sm:flex"
        />
      </section>
    </div>
  );
};

export default InvestorsSection;
