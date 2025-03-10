"use client";
import React, { useRef } from "react";
import MediaPartners from "../../ui/swiper/media";
import { motion, useInView } from "framer-motion";

export default function MediaIntro() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div ref={sectionRef} className="mx-auto mb-20 max-w-5xl">
      <div className="mb-12 items-center justify-between sm:flex">
        <motion.h2
          className="hidden text-6xl font-extrabold italic sm:block"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our{" "}
          <motion.span
            className="text-klink-purple"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Media & Partners
          </motion.span>
        </motion.h2>
        <motion.div
          className="mb-12 sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[-3px]">
            Klink in <br />
            <motion.span
              className="text-klink-purple"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              the Press
            </motion.span>
          </h2>
        </motion.div>
        <motion.div
          className="mx-auto flex w-max rounded-full bg-[#312749] p-1"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            className="px-6 py-2 text-lg font-semibold text-white transition-colors sm:px-14"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Clients
          </motion.button>
          <motion.button
            className="rounded-full bg-gradient-to-b from-[#674EFF] to-[#9583FF] px-6 py-4 text-lg font-semibold transition-colors sm:px-14"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Press
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <MediaPartners />
      </motion.div>
    </div>
  );
}
