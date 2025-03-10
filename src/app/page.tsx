"use client";
import Footer from "@/layouts/footer";
import dynamic from "next/dynamic";
import Loader from "./components/ui/loader";

const Hero = dynamic(() => import("./components/homepage/hero"), {
  ssr: false,
  loading: () => <Loader />,
});

const TrustedByTheBest = dynamic(
  () => import("./components/homepage/trusted"),
  {
    ssr: false,
    loading: () => <Loader />,
  },
);

const Mission = dynamic(() => import("./components/homepage/Mission/mission"), {
  ssr: false,
  loading: () => <Loader />,
});

const Page = () => {
  return (
    <>
      <Hero />
      <Mission />
      <TrustedByTheBest />
      <Footer />
    </>
  );
};

export default Page;
