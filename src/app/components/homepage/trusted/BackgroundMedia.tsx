import React from "react";
import BannerImage1 from "@/assets/banner/backed-banner-image-1.png";
import MobileBannerImage1 from "@/assets/banner/mobile-backed-banner-image-1.png";
import BannerImage2 from "@/assets/banner/backed-banner-image-2.png";
import BannerImage3 from "@/assets/banner/backed-banner-image-3.png";
import Ellipse from "@/assets/banner/ellipse2.svg";
import PolkaDots from "@/assets/banner/polkadots-white.svg";
import Skewed from "@/assets/banner/skew.png";
import Image from "next/image";

export default function BackgroundMedia() {
  return (
    <section>
      <Image
        src={BannerImage1}
        alt="banner-image-1"
        className="absolute top-[0] left-0 hidden w-full sm:flex"
      />

      <Image
        src={MobileBannerImage1}
        alt="banner-image-2"
        className="absolute top-[0] left-0 flex w-full sm:hidden"
      />

      <Image
        src={BannerImage2}
        alt="banner-image-3"
        className="absolute bottom-[0] left-0 z-0"
      />

      <Image
        src={BannerImage3}
        alt="banner-image-4"
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src={Ellipse}
        alt="banner-image-5"
        className="absolute bottom-[0%] left-0 w-full"
      />
      <Image
        src={PolkaDots}
        alt="banner-image-6"
        className="absolute top-[-20%] left-0 w-full"
      />
      <Image
        src={PolkaDots}
        alt="banner-image-7"
        className="absolute bottom-[-20%] left-0 z-50 w-full"
      />
      <Image
        src={Skewed}
        alt="banner-image-8"
        className="absolute bottom-0 left-0 z-[999] hidden sm:flex"
      />
    </section>
  );
}
