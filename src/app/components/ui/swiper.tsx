"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Kucoin from "@/assets/logos/kucoin.svg";
import BitPanda from "@/assets/logos/bitpanda.svg";
import Coinmarketcap from "@/assets/logos/coinmarket.png";
import Gate from "@/assets/logos/gate.svg";
import Mexc from "@/assets/logos/mexc.svg";
import Gecko from "@/assets/logos/gecko.svg";
import Aerodrome from "@/assets/logos/aerodome.svg";
import Uniswap from "@/assets/logos/uniswap.svg";

const logos = [
  Kucoin,
  Gate,
  BitPanda,
  Uniswap,
  Mexc,
  Aerodrome,
  Coinmarketcap,
  Gecko,
];

export default function ListedOnSwiper() {
  return (
    <div className="mx-auto mt-12 px-3 sm:px-12">
      <p className="mb-4 text-center text-base text-white opacity-70 sm:text-left">
        $KLINK Listed On
      </p>
      <Swiper
        slidesPerView={3.25} // Show 3.5 logos on mobile
        breakpoints={{
          640: { slidesPerView: 8 }, // 4 on medium screens
          1024: { slidesPerView: 8 }, // 5 on larger screens
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex h-[40px] w-[100px] items-center justify-center rounded-[12px] border border-[#362B4F] bg-[#2E2746] p-[5px] shadow-lg backdrop-blur-[130px] sm:h-[50px] sm:w-[130px] sm:p-[10px]">
              <Image src={logo} alt="Exchange Logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
