"use client";
import Link from "next/link";
import KlinkLogo from "@/assets/logos/klink-logo.svg";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="mx-auto flex items-center">
        {/* White Section (Logo) */}
        <div className="relative z-10 flex h-20 items-center bg-white pr-10 pl-6">
          <Link href="/">
            <Image src={KlinkLogo} alt="Klink Logo" />
          </Link>
        </div>

        {/* Blue Section (Navigation Links) */}
        <div className="bg-primary relative flex h-20 flex-1 items-center justify-between rounded-tr-4xl pr-6 pl-16">
          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/buy" className="text-gray-300 hover:text-white">
              Buy SKLINK
            </Link>
            <Link href="/stake" className="text-gray-300 hover:text-white">
              Stake SKLINK
            </Link>
          </nav>

          {/* SKLINK Price and Connect Wallet Button */}
          <div className="hidden items-center space-x-6 md:flex">
            {/* SKLINK Price */}
            <div className="text-gray-300">
              SKLINK = <span className="font-bold">$0.05</span>
            </div>

            {/* Connect Wallet Button */}
            <button className="rounded-full bg-white px-6 py-2 font-semibold text-blue-900 transition-colors hover:bg-gray-100">
              Connect Wallet
            </button>
          </div>
          {/* Diagonal Partition */}
          <div className="bg-primary border-b-primary absolute top-0 left-0 z-20 h-0 w-0 border-b-[80px] border-l-[40px] border-l-white"></div>
        </div>
      </div>
      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-20 right-0 left-0 z-[99999] bg-blue-900 p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/buy" className="text-gray-300 hover:text-white">
              Buy SKLINK
            </Link>
            <Link href="/stake" className="text-gray-300 hover:text-white">
              Stake SKLINK
            </Link>
          </nav>
          <div className="mt-4">
            <div className="text-gray-300">
              SKLINK = <span className="font-bold">$0.05</span>
            </div>
            <button className="mt-4 rounded-full bg-white px-6 py-2 font-semibold text-blue-900 transition-colors hover:bg-gray-100">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
