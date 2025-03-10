"use client";
import KlinkCoin from "@/assets/logos/logo-high-res.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative flex flex-col items-center space-y-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="h-20 w-20"
        >
          <Image
            src={KlinkCoin}
            alt="$KLINK Coin"
            width={80}
            height={80}
            className="rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
