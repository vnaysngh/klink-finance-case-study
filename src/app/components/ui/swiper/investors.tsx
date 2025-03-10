"use client";
import { investors } from "@/config/constants";
import Image from "next/image";
import React, { RefObject } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Investors({
  swiperRef,
}: {
  swiperRef: RefObject<SwiperCore | null>;
}) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.5}
      breakpoints={{
        640: { slidesPerView: 4 },
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Autoplay]}
      className="relative z-10"
    >
      {investors.map((investor, index) => (
        <SwiperSlide key={index} className="flex w-3xl justify-center">
          <div className="flex h-16 w-48 items-center justify-center p-2">
            <Image
              src={investor.logo}
              alt={investor.name}
              className="object-contain opacity-60"
              width={192}
              height={64}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
