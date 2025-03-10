"use client";
import React from "react";
import { motion } from "framer-motion";
import { metaMask } from "wagmi/connectors";
import { Price } from "@/app/components/ui/cards/price";
import Wallet from "@/app/components/homepage/hero/Wallet";
import { useDisconnect, useConnect, useAccount } from "wagmi";
import Link from "next/link";

export default function Menu({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  return (
    <div className="relative flex h-20 items-center justify-between rounded-tr-4xl pr-4 pl-4 md:pl-16 lg:flex-1">
      <div className="flex items-center space-x-3 lg:hidden">
        <div className="mr-1">
          {account.address ? (
            <div
              onClick={() => disconnect()}
              className="bg-opacity-75 flex items-center space-x-2 rounded-full border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] px-3 py-1.5 text-sm text-white backdrop-blur-sm"
            >
              <span>
                {`${account.address.slice(0, 3)}...${account.address.slice(-3)}`}
              </span>
            </div>
          ) : (
            <button
              onClick={() => connect({ connector: metaMask() })}
              className="from-klink-purple rounded-full bg-gradient-to-r to-blue-700 px-4 py-1.5 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl"
            >
              Connect
            </button>
          )}
        </div>

        <button
          className="bg-opacity-75 relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#55468B4D] text-gray-200 backdrop-blur-sm focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-6">
            <motion.span
              className="absolute top-0 left-0 h-0.5 w-6 bg-current"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 9 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-2 left-0 h-0.5 w-6 bg-current"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-4 left-0 h-0.5 w-6 bg-current"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -9 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </div>

      <nav className="hidden space-x-6 lg:flex">
        <Link href="/" className="hover:text-klink-purple text-gray-300">
          Home
        </Link>
        <Link href="/buy" className="hover:text-klink-purple text-gray-300">
          Buy SKLINK
        </Link>
        <Link href="/stake" className="hover:text-klink-purple text-gray-300">
          Stake SKLINK
        </Link>
      </nav>

      <div className="hidden items-center space-x-6 lg:flex">
        <Price />
        <Wallet />
      </div>
    </div>
  );
}
