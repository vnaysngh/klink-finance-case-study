import { motion } from "framer-motion";
import Binance from "@/assets/logos/binance.png";
import Wirex from "@/assets/logos/wirex.png";
import CryptoDotCom from "@/assets/logos/cryptodotcom.png";
import Revolut from "@/assets/logos/revolut.png";
import Nexo from "@/assets/logos/nexo.png";
import Image from "next/image";

const partners = [
  { icon: Binance, name: "Binance" },
  { icon: Wirex, name: "Wirex" },
  { icon: CryptoDotCom, name: "Crypto.com" },
  { icon: Revolut, name: "Revolut" },
  { icon: Nexo, name: "Nexo" },
];

export default function PartnerGrid() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-5 items-center justify-items-center">
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
    </div>
  );
}
