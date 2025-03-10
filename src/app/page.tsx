"use client";
import { useState, useEffect } from "react";
import InvestorsSection from "./components/homepage/trusted";
import TrustedByTheBest from "./components/homepage/mission";
import Hero from "./components/homepage/hero";
import Footer from "@/layouts/footer";
import Loader from "./loader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // Simulate loading time
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loader />;

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
