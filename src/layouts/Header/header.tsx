"use client";
import Link from "next/link";
import KlinkLogo from "@/assets/logos/klink-logo.svg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Wallet from "@/app/components/homepage/wallet/wallet";
import { Price } from "@/app/components/homepage/klink-price/price";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { metaMask } from "wagmi/connectors";
import { useDisconnect, useConnect, useAccount } from "wagmi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  const sheetRef = useRef(null);
  const dragControls = useDragControls();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      y: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  const NavLink = ({ href, label, onClick }: any) => (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className="hover:bg-klink-purple flex flex-col items-center space-y-1 rounded-xl border border-gray-400 p-4 text-center transition-colors hover:text-white"
        onClick={onClick}
      >
        <span className="text-sm font-medium text-black">{label}</span>
      </Link>
    </motion.div>
  );

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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-10 bg-black backdrop-blur-sm sm:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={sheetRef}
            className="fixed right-0 bottom-0 left-0 z-9999 overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            drag="y"
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipeThreshold = 100;
              if (offset.y > swipeThreshold || velocity.y > 300) {
                setIsMenuOpen(false);
              }
            }}
          >
            <div className="p-6">
              <div
                className="mb-6 flex justify-center"
                onPointerDown={(e) => dragControls.start(e)}
              >
                <div className="h-1 w-16 rounded-full bg-gray-500 transition-colors hover:bg-gray-400"></div>
              </div>

              <motion.div
                variants={itemVariants}
                className="mb-6 rounded-xl border-[#9A8AFE] bg-[#1E1E30] p-4 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Current Price</p>
                    <p className="text-2xl font-bold">
                      SKLINK = <span className="text-klink-purple">$0.05</span>
                    </p>
                  </div>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1.5,
                    }}
                    className="bg-opacity-20 rounded-full bg-green-500 p-2"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-green-500 to-green-400 p-2">
                      +12.5%
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                  <NavLink href="/" label="Home" onClick={toggleMenu} />
                  <NavLink href="/buy" label="Buy" onClick={toggleMenu} />
                  <NavLink href="/stake" label="Stake" onClick={toggleMenu} />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-opacity-40 rounded-xl border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] p-4 text-left backdrop-blur-sm">
                    <p className="text-sm text-gray-300">Your Balance</p>
                    <p className="text-xl font-bold text-white">
                      25,000 $KLINK
                    </p>
                  </button>
                  <button className="bg-opacity-40 rounded-xl border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] p-4 text-left backdrop-blur-sm">
                    <p className="text-sm text-gray-300">Staking Rewards</p>
                    <p className="text-xl font-bold text-white">+125 $KLINK</p>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
