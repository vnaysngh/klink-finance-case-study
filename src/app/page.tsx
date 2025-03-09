import InvestorsSection from "./components/homepage/trusted-by";
import TrustedByTheBest from "./components/homepage/backed";
import Hero from "./components/homepage/Hero/hero";

export default function Page() {
  return (
    <>
      <section className="mx-auto p-3 sm:pt-4">
        <Hero />
        <TrustedByTheBest />
      </section>
      <section className="p-0 sm:px-4">
        <InvestorsSection />
      </section>
      {/*  <div className="relative h-[30vh] overflow-hidden">
        <div className="container-new absolute top-10 left-0 h-full w-full opacity-15">
          <div className="box-new">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
                <i>STAKE</i> EARN <i>WIN</i>
              </span>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
