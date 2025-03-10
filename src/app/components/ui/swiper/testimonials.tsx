import { testimonials } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="mx-auto mb-20 max-w-5xl">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
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
  );
}
