import PartnerGrid from "./PartnerGrid";
import MissionGrid from "./MissionGrid";
import { MissionLottie } from "../../ui/lotties";
import StatCounter from "./StatsCounter";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <MissionLottie />
      <div className="bg-background relative mx-auto my-12 min-h-screen w-full max-w-6xl py-12">
        <div className="z-15 relative">
          <div className="bg-muted/30 w-full py-4">
            <div className="text-muted-foreground text-heading container mx-auto text-center text-2xl italic tracking-tighter opacity-60">
              Trusted by the best in Web3
            </div>
          </div>
          <div className="container mx-auto">
            <PartnerGrid />
            <StatCounter />
            <MissionGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
