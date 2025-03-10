"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import Binance from "@/assets/logos/binance.png";
import Wirex from "@/assets/logos/wirex.png";
import CryptoDotCom from "@/assets/logos/cryptodotcom.png";
import Revolut from "@/assets/logos/revolut.png";
import Nexo from "@/assets/logos/nexo.png";

const partners = [
  { icon: Binance, name: "Binance" },
  { icon: Wirex, name: "Wirex" },
  { icon: CryptoDotCom, name: "Crypto.com" },
  { icon: Revolut, name: "Revolut" },
  { icon: Nexo, name: "Nexo" },
];

export default function PartnerGrid() {
  return (
    <div className="my-8 w-full">
      {/* Large screens - Normal Grid */}
      <div className="hidden grid-cols-5 items-center justify-items-center gap-4 sm:grid">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
          >
            <Image src={partner.icon} alt={partner.name} />
          </motion.div>
        ))}
      </div>

      {/* Mobile screens - Swiper */}
      <div className="sm:hidden">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
          slidesPerView={1}
          spaceBetween={20}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
              >
                <Image src={partner.icon} alt={partner.name} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
