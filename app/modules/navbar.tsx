"use client";

import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, language, setLanguage } = useAppContext();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const hideMobileMenu = () => {
    setShowMobileMenu(false);
    setOpenDropdown(null);
    setShowLanguageMenu(false);
  };

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

  const translations = {
    id: {
      Home: "Beranda",
      Profile: "Profil",
      History: "Sejarah",
      VisionMission: "Visi & Misi",
      Organization: "Struktur Organisasi",
      Catechesis: "Katekese",
      Prayer: "Doa",
      Teaching: "Pengajaran",
      Sacraments: "Sakramen",
      Procedure: "Prosedur",
      Baptism: "Pembaptisan",
      Marriage: "Pernikahan",
      Services: "Pelayanan",
      News: "Berita",
      Articles: "Artikel",
      Announcements: "Pengumuman",
      Events: "Acara",
      Gallery: "Galeri",
      Login: "Masuk",
    },
    en: {
      Home: "Home",
      Profile: "Profile",
      History: "History",
      VisionMission: "Vision & Mission",
      Organization: "Organization",
      Catechesis: "Catechesis",
      Prayer: "Prayer",
      Teaching: "Teaching",
      Sacraments: "Sacraments",
      Procedure: "Procedure",
      Baptism: "Baptism",
      Marriage: "Marriage",
      Services: "Services",
      News: "News",
      Articles: "Articles",
      Announcements: "Announcements",
      Events: "Events",
      Gallery: "Gallery",
      Login: "Login",
    },
    zh: {
      Home: "首页",
      Profile: "简介",
      History: "历史",
      VisionMission: "愿景与使命",
      Organization: "组织结构",
      Catechesis: "教理讲授",
      Prayer: "祈祷",
      Teaching: "教导",
      Sacraments: "圣礼",
      Procedure: "程序",
      Baptism: "洗礼",
      Marriage: "婚礼",
      Services: "服务",
      News: "新闻",
      Articles: "文章",
      Announcements: "公告",
      Events: "事件",
      Gallery: "相册",
      Login: "登录",
    },
  };

  type TranslationKey = keyof typeof translations.id;
  const t = translations[language];

  const navItems: Array<{
    id: string;
    key: TranslationKey;
    href?: string;
    subitems?: TranslationKey[];
  }> = [
    { id: "home", key: "Home", href: "#beranda" },
    {
      id: "profile",
      key: "Profile",
      subitems: ["History", "VisionMission", "Organization"],
    },
    {
      id: "catechesis",
      key: "Catechesis",
      subitems: ["Prayer", "Teaching", "Sacraments"],
    },
    {
      id: "procedure",
      key: "Procedure",
      subitems: ["Baptism", "Marriage", "Services"],
    },
    {
      id: "news",
      key: "News",
      subitems: ["Articles", "Announcements", "Events"],
    },
    { id: "gallery", key: "Gallery", href: "#gallery" },
    { id: "login", key: "Login", href: "#login" },
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
        <div className="flex items-center gap-3">
          <img
            src="/logosanmar.png"
            alt="Logo"
            className="max-w-[52px] max-h-[52px]"
          />
          <div className="hidden md:block">
            <p className="text-sm">Paroki Santa Maria Yang Dikandung Tanpa Noda</p>
            <h1 className="font-bold text-sm">GEREJA KATEDRAL MEDAN</h1>
            <h1 className="font-bold text-sm">KEUSKUPAN AGUNG MEDAN</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden text-xl inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/0 text-lg text-current hover:bg-white/20 transition"
            aria-label="Toggle mobile menu"
          >
            {showMobileMenu ? "✕" : "☰"}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  {item.subitems ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.id ? null : item.id
                          )
                        }
                        className="hover:opacity-70 transition duration-300 font-bold flex items-center gap-1"
                      >
                        {t[item.key]}
                        <span
                          className={`text-xs transition-transform origin-center ${
                            openDropdown === item.id ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                      {openDropdown === item.id && (
                        <div
                          className={`absolute left-0 mt-2 w-40 rounded-md shadow-lg ${
                            theme === "dark"
                              ? "bg-gray-800 text-white"
                              : "bg-white text-black"
                          } z-20`}
                        >
                          {item.subitems.map((subkey, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className={`block px-4 py-2 text-sm hover:opacity-70 transition ${
                                idx === 0 ? "rounded-t-md" : ""
                              } ${
                                idx === item.subitems!.length - 1
                                  ? "rounded-b-md"
                                  : ""
                              }`}
                            >
                              {t[subkey]}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href ?? "#"}
                      className="font-bold"
                    >
                      {t[item.key]}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="px-3 py-1 rounded-md border border-current hover:opacity-70 transition duration-300 text-sm"
              >
                {language.toUpperCase()}
              </button>
              {showLanguageMenu && (
                <div
                  className={`absolute right-0 mt-2 w-32 rounded-md shadow-lg ${
                    theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black"
                  } z-10`}
                >
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

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="px-3 py-1 rounded-md border border-current hover:opacity-70 transition duration-300 text-lg"
              title={theme === "light" ? "Dark Mode" : "Light Mode"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <div
          className={`md:hidden border-t border-current/10 px-4 pb-4 pt-3 ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <div key={item.id} className="rounded-md bg-white/5 p-2">
                {item.subitems ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.id ? null : item.id
                        )
                      }
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold hover:bg-slate-100/70 transition"
                    >
                      {t[item.key]}
                      <span
                        className={`text-xs transition-transform ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openDropdown === item.id && (
                      <div className="mt-2 space-y-1 rounded-md bg-slate-100/90 p-2 text-slate-900">
                        {item.subitems.map((subkey) => (
                          <a
                            key={subkey}
                            href="#"
                            onClick={hideMobileMenu}
                            className="block rounded-md px-3 py-2 text-sm hover:bg-slate-200 transition"
                          >
                            {t[subkey]}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href ?? "#"}
                    onClick={hideMobileMenu}
                    className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-slate-100/70 transition"
                  >
                    {t[item.key]}
                  </a>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="w-full rounded-md border border-current px-3 py-2 text-sm hover:bg-slate-100/70 transition"
              >
                {language.toUpperCase()}
              </button>
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="w-full rounded-md border border-current px-3 py-2 text-sm hover:bg-slate-100/70 transition"
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>

            {showLanguageMenu && (
              <div className="rounded-md border border-current/10 bg-slate-100 p-2 text-slate-900">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as "id" | "en" | "zh");
                      hideMobileMenu();
                    }}
                    className="block w-full text-left rounded-md px-3 py-2 text-sm hover:bg-slate-200 transition"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

