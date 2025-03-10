import TrustedByTheBest from "./components/homepage/trusted";
import Hero from "./components/homepage/hero";
import Footer from "@/layouts/footer";
import Mission from "./components/homepage/mission";

export default function Page() {
  return (
    <>
      <section className="mx-auto p-3 sm:pt-4">
        <Hero />
        <Mission />
      </section>
      <section className="p-0 sm:px-4">
        <TrustedByTheBest />
      </section>
      <Footer />
    </>
  );
}
