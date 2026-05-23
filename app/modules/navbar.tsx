"use client";

import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, language, setLanguage } = useAppContext();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "id", label: "Indonesia" },
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
  ];

  const navItems = [
    { href: "#", label: { id: "Beranda", en: "Home", zh: "首页" } },
    { href: "#", label: { id: "Profil", en: "Profile", zh: "简介" } },
    { href: "#", label: { id: "Katekese", en: "Catechesis", zh: "教理讲授" } },
    { href: "#", label: { id: "Prosedur", en: "Procedure", zh: "程序" } },
    { href: "#", label: { id: "Berita", en: "News", zh: "新闻" } },
    { href: "#", label: { id: "Galeri", en: "Gallery", zh: "相册" } },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-gray-900/95 backdrop-blur-sm shadow-md text-white"
            : "bg-white/95 backdrop-blur-sm shadow-md text-black"
          : theme === "dark"
          ? "bg-gray-900/50 text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="sticky container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 justify-center flex-row">
          <div className="flex items-center space-x-2 justify-center flex-row">
            <img src="/logosanmar.png" alt="Logo" className="max-w-[65px] max-h-[65px]"/>
            <div className="">
              <p className="text-sm">Paroki Santa Maria Yang Dikandung Tanpa Noda</p>
              <h1 className="font-bold">GEREJA KATEDRAL MEDAN</h1>
              <h1 className="font-bold">KEUSKUPAN AGUNG MEDAN</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item, idx) => (
              <li key={`${item.href}-${item.label.id}-${idx}`}>
                <a href={item.href} className="hover:opacity-70 transition duration-300 font-bold">
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="px-3 py-1 rounded-md border border-current hover:opacity-70 transition duration-300 text-sm"
            >
              {language.toUpperCase()}
            </button>
            {showLanguageMenu && (
              <div className={`absolute right-0 mt-2 w-32 rounded-md shadow-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} z-10`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as "id" | "en" | "zh");
                      setShowLanguageMenu(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:opacity-70 ${
                      language === lang.code ? "font-semibold" : ""
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-1 rounded-md border border-current hover:opacity-70 transition duration-300 text-lg"
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}

