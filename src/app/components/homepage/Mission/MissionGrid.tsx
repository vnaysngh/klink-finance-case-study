import { motion } from "framer-motion";
import Image from "next/image";
import Apps from "@/assets/logos/apps.png";

export default function MissionSection() {
  return (
    <div className="container mx-auto px-4 text-center sm:text-left">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="text-klink-purple mb-4 block text-base sm:text-2xl">
            The Klink Mission
          </span>

          <h2 className="mb-6 text-3xl leading-tight tracking-[-3px] sm:text-5xl">
            Activating Millions of Web3 Users Through AI-Enabled Wealth Creation
            Technology
          </h2>

          <p className="text-muted-foreground mb-4 text-base leading-relaxed italic opacity-60">
            Klink operates a dual ecosystem: Serving the Klink community through
            its wealth creation platform; Simultaneously, as a Web3 partner
            integration layer, offering easy-to-embed tools for user activation
            and monetization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <Image src={Apps} alt={"apps"} />
        </motion.div>
      </div>
    </div>
  );
}
