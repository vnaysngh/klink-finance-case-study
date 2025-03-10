"use client";
import StatCounter from "@/app/components/homepage/mission/StatsCounter";
import PartnerGrid from "@/app/components/homepage/mission/PartnerGrid";
import Mission from "@/app/components/homepage/mission/MissionGrid";
import { MissionLottie } from "../../ui/lotties";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <MissionLottie />
      <div className="bg-background relative mx-auto my-12 min-h-screen w-full max-w-6xl py-12">
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
