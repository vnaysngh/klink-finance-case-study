import InvestorsSection from "./components/homepage/trusted-by";
import TrustedByTheBest from "./components/homepage/backed";
import Hero from "./components/homepage/Hero/hero";

export default function Page() {
  return (
    <>
      <section className="mx-auto p-3 sm:p-4">
        <Hero />
        <TrustedByTheBest />
      </section>
      <section className="p-0 sm:p-4">
        <InvestorsSection />
      </section>
    </>
  );
}
