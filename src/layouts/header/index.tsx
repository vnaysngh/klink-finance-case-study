"use client";
import { useState, useRef, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

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
