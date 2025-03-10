import React from "react";
import Testimonials from "../../ui/swiper/testimonials";
import { SparkLottie } from "../../ui/lotties";
import dynamic from "next/dynamic";

const Backed = dynamic(() => import("./Backed"), {
  ssr: false,
});

const MediaIntro = dynamic(() => import("./MediaIntro"), {
  ssr: false,
});

const SocialMedia = dynamic(() => import("./SocialMedia"), {
  ssr: false,
});

const TrustedByTheBest = () => {
  return (
    <div className="bg-primary relative overflow-hidden bg-gradient-to-b px-4 py-20 text-white sm:rounded-4xl sm:py-32">
      <SparkLottie />
      <Backed />
      <MediaIntro />
      <Testimonials />
      <SocialMedia />
    </div>
  );
};

export default TrustedByTheBest;
