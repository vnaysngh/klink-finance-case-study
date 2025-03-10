import { mediaPartners } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MediaPartners() {
  return (
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
  );
}
