"use client";
import { useRef } from "react";
import React from "react";
import { Swiper as SwiperCore } from "swiper/types";
import Investors from "../../ui/swiper/investors";

export default function Backed() {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
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
      <Investors swiperRef={swiperRef} />
    </div>
  );
}
