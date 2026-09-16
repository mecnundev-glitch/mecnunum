import React from "react";
import { Navbar } from "@/components/navigation/navbar";

export function Header() {
  return (
    <>
      {/* Accessible Skip to Content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-studio-cyan focus:px-4 focus:py-2.5 focus:text-black focus:font-mono focus:font-bold focus:shadow-[0_0_30px_rgba(0,242,254,0.6)] focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <Navbar />
    </>
  );
}

export default Header;
