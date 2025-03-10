"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import BackgroundMedia from "./BackgroundMedia";
import { socialLinks } from "@/config/constants";

export default function SocialMedia() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const socialContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const socialItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-12 hidden text-6xl font-extrabold italic sm:block"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Join The{" "}
          <motion.span
            className="text-klink-purple"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Klink
            <br />
            Community
          </motion.span>
        </motion.h2>

        <motion.div
          className="mb-12 sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[-3px]">
            Join the <span className="text-klink-purple">Klink</span> <br />
            <motion.span
              className="text-klink-purple"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Community
            </motion.span>
          </h2>
        </motion.div>

        <div className="relative z-999 flex w-full flex-col items-center sm:mb-32 sm:flex-row sm:items-center sm:justify-between">
          <motion.h2
            className="mb-4 text-2xl font-extrabold whitespace-nowrap text-white sm:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Official Channels
          </motion.h2>

          <motion.div
            className="flex flex-col items-center gap-3 sm:flex-row"
            variants={socialContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {socialLinks.map(({ name, url, img, followers }) => (
              <motion.div key={name} variants={socialItem}>
                <Link
                  href={url}
                  target="_blank"
                  className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:scale-105 hover:opacity-80"
                >
                  <Image src={img} alt={`${name}-logo`} />
                  {name}{" "}
                  {followers && (
                    <span className="text-klink-purple">{followers}</span>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <BackgroundMedia />
    </>
  );
}
