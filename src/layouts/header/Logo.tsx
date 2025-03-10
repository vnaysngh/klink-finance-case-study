import Image from "next/image";
import Link from "next/link";
import React from "react";
import KlinkLogo from "@/assets/logos/klink-logo.svg";

export default function Logo() {
  return (
    <div className="relative z-10 flex h-20 items-center px-3 sm:pr-10 sm:pl-6">
      <Link href="/">
        <Image
          src={KlinkLogo}
          alt="Klink Logo"
          className="h-7 w-auto sm:h-auto"
        />
      </Link>
    </div>
  );
}
