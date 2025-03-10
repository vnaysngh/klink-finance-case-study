"use client";
import Footer from "@/layouts/footer";
import Hero from "./components/homepage/hero";
import TrustedByTheBest from "./components/homepage/trusted";
import Mission from "./components/homepage/Mission/mission";

const Page = () => {
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
};

export default Page;
