import InvestorsSection from "./components/homepage/trusted";
import Hero from "./components/homepage/hero";
import Footer from "@/layouts/footer";
import TrustedByTheBest from "./components/homepage/trusted";

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
      <Footer />
    </>
  );
}
