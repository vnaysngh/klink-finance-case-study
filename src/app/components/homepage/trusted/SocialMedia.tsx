import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerImage1 from "@/assets/banner/backed-banner-image-1.png";
import MobileBannerImage1 from "@/assets/banner/mobile-backed-banner-image-1.png";
import BannerImage2 from "@/assets/banner/backed-banner-image-2.png";
import BannerImage3 from "@/assets/banner/backed-banner-image-3.png";
import Twitter from "@/assets/socials/twitter.png";
import Discord from "@/assets/socials/discord.png";
import Telegram from "@/assets/socials/telegram.png";
import Link3 from "@/assets/socials/link3.png";
import Ellipse from "@/assets/banner/ellipse2.svg";
import PolkaDots from "@/assets/banner/polkadots-white.svg";
import Skewed from "@/assets/banner/skew.png";

export default function SocialMedia() {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 hidden text-6xl font-extrabold italic sm:block">
          Join The{" "}
          <span className="text-klink-purple">
            Klink
            <br />
            Community
          </span>
        </h2>

        <div className="mb-12 sm:hidden">
          <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[-3px]">
            Join the <span className="text-klink-purple">Klink</span> <br />
            <span className="text-klink-purple">Community</span>
          </h2>
        </div>

        <div className="relative z-999 flex w-full flex-col items-center sm:mb-32 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="mb-4 text-2xl font-extrabold whitespace-nowrap text-white sm:mb-0">
            Official Channels
          </h2>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="https://x.com/klinkfinance"
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              <Image src={Twitter} alt="twitter-logo" />
              Twitter <span className="text-klink-purple">250k</span>
            </Link>

            <Link
              href="https://discord.gg/klinkfinance"
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              <Image src={Discord} alt="twitter-logo" />
              Telegram <span className="text-klink-purple">350k</span>
            </Link>

            <Link
              href="https://t.me/klinkfinance"
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              <Image src={Telegram} alt="twitter-logo" />
              Discord <span className="text-klink-purple">100k</span>
            </Link>

            <Link
              href="https://link3.to/klinkfinance"
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-full border border-[#ffffff1a] bg-gradient-to-b from-[#ffffff0d] to-[#ffffff05] px-4 py-2 font-semibold text-white transition hover:opacity-80"
            >
              <Image src={Link3} alt="twitter-logo" />
              Link3
            </Link>
          </div>
        </div>
      </div>
      <section>
        <Image
          src={BannerImage1}
          alt="banner-image-1"
          className="absolute top-[0] left-0 hidden w-full sm:flex"
        />
        <Image
          src={MobileBannerImage1}
          alt="banner-image-1"
          className="absolute top-[0] left-0 flex w-full sm:hidden"
        />
        <Image
          src={BannerImage2}
          alt="banner-image-1"
          className="absolute bottom-[0] left-0 z-0"
        />
        <Image
          src={BannerImage3}
          alt="banner-image-2"
          className="absolute top-0 left-0"
        />
        <Image
          src={Ellipse}
          alt="banner-image-3"
          className="absolute bottom-[0%] left-0 w-full"
        />
        <Image
          src={PolkaDots}
          alt="banner-image-3"
          className="absolute top-[-20%] left-0 w-full"
        />
        <Image
          src={PolkaDots}
          alt="banner-image-3"
          className="absolute bottom-[-20%] left-0 z-50 w-full"
        />
        <Image
          src={Skewed}
          alt="banner-image-3"
          className="absolute bottom-0 left-0 z-[999] hidden sm:flex"
        />
      </section>
    </>
  );
}
