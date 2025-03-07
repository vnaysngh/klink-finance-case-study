"use client";
import StatCounter from "@/components/homepage/Stats/StatsCounter";
import PartnerGrid from "@/components/homepage/Partners/PartnerGrid";
import Mission from "@/components/homepage/Mission/MissionGrid";
export default function Home() {
  return (
    <div className="bg-background my-12 min-h-screen w-full py-12">
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
  );
}
