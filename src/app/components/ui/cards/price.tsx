import React from "react";
import Image from "next/image";
import KlinkIcon from "@/assets/logos/klink_icon.svg";

export const Price = () => {
  return (
    <div className="border-gradient-primary flex h-14 items-center space-x-2 rounded-[36.82px] border-[1.5px] bg-[#1E1E30] px-6 py-4 text-white">
      <Image src={KlinkIcon} alt="Klink Logo" height={24} width={24} />
      <span className="text-sm font-semibold">$KLINK = ${0.05}</span>
      <div className="rounded-full bg-[#2AB18426] p-2 text-xs font-semibold text-[#80FF77]">
        &#9650; 12.45%
      </div>
    </div>
  );
};
