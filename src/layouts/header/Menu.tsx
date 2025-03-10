"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { metaMask } from "wagmi/connectors";
import { Price } from "@/app/components/ui/cards/price";
import Wallet from "@/app/components/homepage/hero/Wallet";
import { useDisconnect, useConnect, useAccount, useChainId } from "wagmi";
import Link from "next/link";
import Image from "next/image";
import { networkLogos } from "@/config/constants";

export interface MenuProps {
  toggleMenu: () => void;
  isMenuOpen?: boolean;
}

export default function Menu({ toggleMenu }: MenuProps) {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  const chainId = useChainId();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderWalletButton = () => {
    if (!isClient) return null; // Prevent rendering on the server

    return account?.address ? (
      <button
        onClick={() => disconnect()}
        className="bg-opacity-75 border-gradient-primary to-gradient-tertiary from-gradient-secondary flex items-center space-x-2 rounded-full border bg-gradient-to-r px-3 py-1.5 text-sm text-white backdrop-blur-sm"
      >
        {networkLogos[chainId ?? 1] && (
          <Image
            src={networkLogos[chainId ?? 1]}
            alt="Network Logo"
            width={20}
            height={20}
            className="h-6 w-6 rounded-[50%] bg-white p-1"
          />
        )}
        <span>{`${account.address.slice(0, 3)}...${account.address.slice(-3)}`}</span>
      </button>
    ) : (
      <button
        onClick={() => connect({ connector: metaMask() })}
        className="from-klink-purple rounded-full bg-gradient-to-r to-blue-700 px-4 py-1.5 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl"
      >
        Connect
      </button>
    );
  };

  return (
    <div className="relative flex h-20 items-center justify-between rounded-tr-4xl px-4 md:pl-16 lg:flex-1">
      <div className="flex items-center space-x-3 lg:hidden">
        <div className="mr-1">{renderWalletButton()}</div>
        <button
          className="bg-opacity-75 relative z-9999 flex h-10 w-10 items-center justify-center rounded-full bg-[#55468B4D] text-gray-200 backdrop-blur-sm focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-6">
            <motion.span
              className="absolute top-0 left-0 h-0.5 w-6 bg-current"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-2 left-0 h-0.5 w-6 bg-current"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-4 left-0 h-0.5 w-6 bg-current"
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </div>

      <nav className="hidden space-x-6 lg:flex">
        {["Home", "Buy SKLINK", "Stake SKLINK"].map((text, index) => (
          <Link
            key={index}
            href={`/${text.toLowerCase().replace(" ", "")}`}
            className="hover:text-klink-purple text-gray-300"
          >
            {text}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center space-x-6 lg:flex">
        <Price />
        {isClient && <Wallet />}
      </div>
    </div>
  );
}
