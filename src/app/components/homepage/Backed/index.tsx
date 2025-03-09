"use client";
import StatCounter from "@/app/components/homepage/stats/StatsCounter";
import PartnerGrid from "@/app/components/homepage/partners/PartnerGrid";
import Mission from "@/app/components/homepage/mission/MissionGrid";
import Lottie from "lottie-react";

import backgroundAnimation from "@/assets/lottie/lazydoge.json";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 left-0 hidden h-full w-full sm:block">
        <div className="h-full opacity-5">
          <Lottie animationData={backgroundAnimation} loop={true} />
        </div>
      </div>

      <div className="bg-background relative mx-auto my-12 min-h-screen w-full max-w-6xl py-12">
        {/* Content with higher z-index to appear above the background */}
        <div className="relative z-15">
          <div className="bg-muted/30 w-full py-4">
            <div className="text-muted-foreground text-heading container mx-auto text-center text-2xl tracking-tighter italic opacity-60">
              Trusted by the best in Web3
            </div>
          </div>

          <div className="container mx-auto">
            <PartnerGrid />

            <StatCounter />
            <Mission />
          </div>
        </div>
      </div>
    </div>
  );
}
