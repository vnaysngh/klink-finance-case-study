"use client";
import Footer from "@/layouts/footer";
import Hero from "./components/homepage/hero";
import TrustedByTheBest from "./components/homepage/trusted";
import Mission from "./components/homepage/Mission/mission";
import { useEffect, useState } from "react";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <section className="mx-auto p-3 sm:pt-4">
          <Hero />
          <Mission />
        </section>
        {isClient && (
          <>
            <section className="p-0 sm:px-4">
              <TrustedByTheBest />
            </section>
            <Footer />
          </>
        )}
      </>
    );
  }

  return null;
};

export default Page;
