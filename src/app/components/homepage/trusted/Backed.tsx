"use client";
import { useRef } from "react";
import React from "react";
import { Swiper as SwiperCore } from "swiper/types";
import Investors from "../../ui/swiper/investors";
import { motion, useInView } from "framer-motion";

export default function Backed() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div ref={sectionRef} className="mx-auto mb-20 max-w-5xl sm:mb-48">
      <div className="relative z-10 mb-12 hidden items-center justify-between sm:flex">
        <motion.h2
          className="text-left text-6xl font-extrabold italic"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Backed By{" "}
          <motion.span
            className="text-klink-purple"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Best
          </motion.span>
        </motion.h2>
        <motion.div
          className="hidden gap-2 sm:flex"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.button
            className="bg-opacity-50 rounded-full bg-gray-800 p-2"
            onClick={() => swiperRef.current?.slidePrev()}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(55, 65, 81, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
          <motion.button
            className="bg-opacity-50 rounded-full bg-gray-800 p-2"
            onClick={() => swiperRef.current?.slideNext()}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(55, 65, 81, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="mb-12 sm:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[-3px]">
          Backed <br />
          <motion.span
            className="text-klink-purple"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            by the best
          </motion.span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Investors swiperRef={swiperRef} />
      </motion.div>
    </div>
  );
}
