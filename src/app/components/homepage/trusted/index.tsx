import React from "react";
import Testimonials from "../../ui/swiper/testimonials";
import { SparkLottie } from "../../ui/lotties";
import Backed from "./Backed";
import MediaIntro from "./MediaIntro";
import SocialMedia from "./SocialMedia";

const TrustedByTheBest = () => {
  return (
    <section className="p-0 sm:px-4">
      <div className="bg-primary relative overflow-hidden bg-gradient-to-b px-4 py-20 text-white sm:rounded-4xl sm:py-32">
        <SparkLottie />
        <Backed />
        <MediaIntro />
        <Testimonials />
        <SocialMedia />
      </div>
    </section>
  );
};

export default TrustedByTheBest;
