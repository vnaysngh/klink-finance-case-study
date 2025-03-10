import React from "react";
import MediaPartners from "../../ui/swiper/media";

export default function MediaIntro() {
  return (
    <div className="mx-auto mb-20 max-w-5xl">
      <div className="mb-12 items-center justify-between sm:flex">
        <h2 className="hidden text-6xl font-extrabold italic sm:block">
          Our <span className="text-klink-purple">Media & Partners</span>
        </h2>
        <div className="mb-12 sm:hidden">
          <h2 className="text-center text-[44px] leading-none font-extrabold tracking-[-3px]">
            Klink in <br />
            <span className="text-klink-purple">the Press</span>
          </h2>
        </div>
        <div className="mx-auto flex w-max rounded-full bg-[#312749] p-1">
          <button className="px-6 py-2 text-lg font-semibold text-white transition-colors sm:px-14">
            Clients
          </button>
          <button className="rounded-full bg-gradient-to-b from-[#674EFF] to-[#9583FF] px-6 py-4 text-lg font-semibold transition-colors sm:px-14">
            Press
          </button>
        </div>
      </div>
      <MediaPartners />
    </div>
  );
}
