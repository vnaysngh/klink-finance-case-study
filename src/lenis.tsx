"use client";
import { ReactLenis } from "lenis/react";
export default function LenisProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReactLenis root>{children}</ReactLenis>;
}
