"use client";
import Link from "next/link";
import KlinkLogo from "@/assets/logos/klink-logo.svg";
import Image from "next/image";
import { useState } from "react";
import Wallet from "@/app/components/homepage/wallet/wallet";
import { Price } from "@/app/components/homepage/klink-price/price";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="relative">
      <div className="relative z-20 mx-auto flex items-center">
        <div className="relative z-10 flex h-20 items-center px-3 sm:pr-10 sm:pl-6">
          <Link href="/">
            <Image
              src={KlinkLogo}
              alt="Klink Logo"
              className="h-7 w-auto sm:h-auto"
            />
          </Link>
        </div>

        <div className="relative flex h-20 flex-1 items-center justify-between rounded-tr-4xl pr-6 pl-16">
          <div className="flex items-center space-x-3 sm:hidden">
            {/*     <div className="mr-1">
              <Wallet />
            </div> */}

            {/* Hamburger Menu Button */}
            <button
              className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#55468B4D] text-gray-200 focus:outline-none"
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

          {/* Desktop Navigation Links */}
          <nav className="hidden space-x-6 sm:flex">
            <Link href="/" className="hover:text-klink-purple text-gray-300">
              Home
            </Link>
            <Link href="/buy" className="hover:text-klink-purple text-gray-300">
              Buy SKLINK
            </Link>
            <Link
              href="/stake"
              className="hover:text-klink-purple text-gray-300"
            >
              Stake SKLINK
            </Link>
          </nav>

          <div className="hidden items-center space-x-6 sm:flex">
            <Price />
            <Wallet />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-opacity-50 fixed inset-0 z-20 bg-black backdrop-blur-sm sm:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="bg-klink-purple to-[#714EBD]; w-4.5/5 absolute top-0 right-0 z-20 overflow-hidden rounded-l-2xl bg-gradient-to-b from-[#674EFF] shadow-xl sm:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="p-6">
              <nav className="mb-8 border-b pb-6">
                <motion.div className="mb-4" variants={itemVariants}>
                  <Link
                    href="/"
                    className="block py-2 text-lg font-medium text-white"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div className="mb-4" variants={itemVariants}>
                  <Link
                    href="/buy"
                    className="block py-2 text-lg font-medium text-white"
                    onClick={toggleMenu}
                  >
                    Buy SKLINK
                  </Link>
                </motion.div>
                <motion.div className="mb-4" variants={itemVariants}>
                  <Link
                    href="/stake"
                    className="block py-2 text-lg font-medium text-white"
                    onClick={toggleMenu}
                  >
                    Stake SKLINK
                  </Link>
                </motion.div>
              </nav>

              <motion.div variants={itemVariants} className="rounded-xl">
                <Price />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
