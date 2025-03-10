import Image from "next/image";
import React from "react";
import { ContractAddress } from "../../ui/cards/contract";
import Certik from "@/assets/logos/certik.svg";

export default function Audited() {
  return (
    <div className="mx-auto mt-12 sm:px-12">
      <p className="mb-4 text-center text-base text-white opacity-70 sm:text-left">
        Audited By
      </p>
      <div className="flex flex-wrap gap-4">
        <div className="m-auto flex h-[53px] items-center overflow-hidden rounded-[16px] border-0 border-[#362B4F] bg-[#2E2746] shadow-lg backdrop-blur-[130px] transition-all duration-300 hover:bg-[#362B4F] sm:m-0">
          <div className="flex h-full w-1/2 items-center justify-center rounded-l-[14px] bg-[#2E2746] px-4">
            <Image src={Certik} alt="Certik Logo" className="h-6 w-auto" />
          </div>
          <ContractAddress />
        </div>
      </div>
    </div>
  );
}
