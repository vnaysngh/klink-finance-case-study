import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ value, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += 1;
        setCount(Math.min(Math.floor(current * stepValue), value));

        if (current >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-7xl mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xl text-klink-purple text-muted-foreground ">
        {label}
      </div>
    </motion.div>
  );
};

export default function StatCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 my-32 py-20 ">
      <StatItem value={500} label="Users Across 127+ Countries" suffix="K" />
      <StatItem value={120} label="Affiliate Partners" suffix="+" />
      <StatItem value={10} label="Airdrops to Date" suffix="+" />
      <StatItem value={30} label="SDK Waitlist Partners" suffix="+" />
    </div>
  );
}
