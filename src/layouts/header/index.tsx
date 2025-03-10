"use client";
import { useState, useRef, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sheetRef.current &&
        event.target instanceof Node &&
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

  return (
    <header>
      <div className="relative z-20 mx-auto flex items-center justify-between lg:justify-end">
        <Logo />
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        sheetRef={sheetRef}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
}
