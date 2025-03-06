"use client";
import StatCounter from "@/components/Homepage/Stats/StatsCounter";
import PartnerGrid from "@/components/Homepage/Partners/PartnerGrid";
import Mission from "@/components/Homepage/Mission/MissionGrid";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background my-12 py-12">
      <div className="w-full py-4 bg-muted/30">
        <div className="container mx-auto text-center text-muted-foreground text-2xl italic text-heading opacity-60 tracking-tighter">
          Trusted by the best in Web3
        </div>
      </div>

      <div className="container mx-auto px-4">
        <PartnerGrid />

        <section className="px-32">
          <StatCounter />
          <Mission />
        </section>
      </div>
    </div>
  );
}
