"use client";
import React, { RefObject } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

export default function MobileMenu({
  isMenuOpen,
  toggleMenu,
  sheetRef,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  sheetRef: RefObject<HTMLDivElement | null>;
  setIsMenuOpen: (val: boolean) => void;
}) {
  const dragControls = useDragControls();

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

  const NavLink = ({ href, label, onClick }: NavLinkProps) => (
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
    <>
      {" "}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-10 bg-black backdrop-blur-sm lg:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={sheetRef}
            className="fixed right-0 bottom-0 left-0 z-9999 overflow-hidden rounded-t-2xl bg-white shadow-2xl lg:hidden"
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
    </>
  );
}
