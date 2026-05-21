"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="sticky container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">MyLogo</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:opacity-70 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-70 transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-70 transition duration-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-70 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

