import React from "react";
import Image from "next/image";
import KlinkIcon from "@/assets/logos/klink_icon.svg";

export const Price = () => {
  return (
    <div className="flex h-14 items-center space-x-2 rounded-[36.82px] border-[1.5px] border-[#9A8AFE] bg-[#1E1E30] px-6 py-4 text-white">
      <Image src={KlinkIcon} alt="Klink Logo" height={24} width={24} />
      <span className="text-sm font-semibold">$KLINK = ${}</span>
      <div className="rounded-full bg-green-600 px-2 py-1 text-xs font-semibold"></div>
    </div>
  );
};
