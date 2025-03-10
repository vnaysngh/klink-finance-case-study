"use client";
import Footer from "@/layouts/footer";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/homepage/hero"), {
  ssr: false,
});

const TrustedByTheBest = dynamic(
  () => import("./components/homepage/trusted"),
  {
    ssr: false,
  },
);

const Mission = dynamic(() => import("./components/homepage/Mission/mission"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <section className="mx-auto p-3 sm:pt-4">
        <Hero />
        <Mission />
      </section>
      <>
        <section className="p-0 sm:px-4">
          <TrustedByTheBest />
        </section>
        <Footer />
      </>
    </>
  );
};

export default Page;
