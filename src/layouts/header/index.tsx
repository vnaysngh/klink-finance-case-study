"use client";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("./Menu"), {
  ssr: false,
});

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen && typeof window !== undefined) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header>
      <div className="relative z-20 mx-auto flex items-center justify-between lg:justify-end">
        <Logo />
        <Menu toggleMenu={toggleMenu} />
      </div>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        sheetRef={sheetRef}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};

export default Header;
