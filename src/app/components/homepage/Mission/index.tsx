import { MissionLottie } from "../../ui/lotties";
import PartnerGrid from "./PartnerGrid";
import StatCounter from "./StatsCounter";
import MissionGrid from "./MissionGrid";

const Mission = () => {
  return (
    <section className="mx-auto p-3 sm:pt-4">
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
              <MissionGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
