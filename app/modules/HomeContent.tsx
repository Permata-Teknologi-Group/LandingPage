"use client";

import Image from "next/image";
import Navbar from "./navbar";
import IntensiForm from "./IntensiForm";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

const translations = {
  id: {
    heroQuote: '"Aku ini hamba Tuhan. Terjadilah padaku seperti yang Engkau katakan itu"',
    scripture: "Lukas 1:38",
    schedule: "Jadwal Misa",
    announcement: "Pengumuman",
    churchArticle: "Artikel Gereja",
    liturgyStaff: "Petugas Liturgi",
    massIntention: "Intensi Misa",
    qris: "QRIS",
    liturgy: "Liturgi",
    source: "sumber",
    galleryTitle: "Galeri",
    pricing: "Harga",
    basic: "Dasar",
    pro: "Pro",
    enterprise: "Perusahaan",
    choosePlan: "Pilih Paket",
    contactUs: "Hubungi Kami",
    featureA: "Fitur A",
    featureB: "Fitur B",
    featureC: "Fitur C",
    featureD: "Fitur D",
    featureE: "Fitur E",
    endTitle: "Bergabunglah dengan kami",
    endDescription: "Selamat datang di Paroki Santa Maria. Mari hadiri Misa, berdoa, dan berbagi kebersamaan dalam iman.",
    visitTitle: "Alamat",
    visitDetails: "Jl. Keuskupan No. 1, Medan, Sumatera Utara",
    connectTitle: "Hubungi Kami",
    connectDetails: "Telp: +62 61 1234567 · Email: info@katedralmedan.id",
    followUs: "Ikuti Kami",
  },
  en: {
    heroQuote: '"I am the Lord\'s servant. May your word to me be fulfilled."',
    scripture: "Luke 1:38",
    schedule: "Mass Schedule",
    announcement: "Announcement",
    churchArticle: "Church Article",
    liturgyStaff: "Liturgy Staff",
    massIntention: "Mass Intention",
    qris: "QRIS",
    liturgy: "Liturgy",
    source: "source",
    galleryTitle: "Gallery",
    pricing: "Pricing",
    basic: "Basic",
    pro: "Pro",
    enterprise: "Enterprise",
    choosePlan: "Choose Plan",
    contactUs: "Contact Us",
    featureA: "Feature A",
    featureB: "Feature B",
    featureC: "Feature C",
    featureD: "Feature D",
    featureE: "Feature E",
    endTitle: "Be Part of Our Community",
    endDescription: "Welcome to St. Mary Parish. Join our Mass, prayer, and community activities with faith and fellowship.",
    visitTitle: "Location",
    visitDetails: "Jl. Keuskupan No. 1, Medan, North Sumatra",
    connectTitle: "Get in Touch",
    connectDetails: "Phone: +62 61 1234567 · Email: info@katedralmedan.id",
    followUs: "Follow Us",
  },
  zh: {
    heroQuote: '“我是主的仆人。愿你的话在我身上成就。”',
    scripture: "路加福音 1:38",
    schedule: "弥撒时间",
    announcement: "公告",
    churchArticle: "教会文章",
    liturgyStaff: "礼拜人员",
    massIntention: "弥撒意向",
    qris: "二维码支付",
    liturgy: "礼拜",
    source: "来源",
    galleryTitle: "图库",
    pricing: "价格",
    basic: "基础",
    pro: "专业",
    enterprise: "企业",
    choosePlan: "选择方案",
    contactUs: "联系我们",
    featureA: "功能 A",
    featureB: "功能 B",
    featureC: "功能 C",
    featureD: "功能 D",
    featureE: "功能 E",
    endTitle: "与我们同行",
    endDescription: "欢迎来到圣玛利亚堂。请加入我们的弥撒、祈祷和社区活动，体验信仰与爱心的力量。",
    visitTitle: "地址",
    visitDetails: "Jl. Keuskupan No. 1, Medan, Sumatera Utara",
    connectTitle: "联系我们",
    connectDetails: "电话: +62 61 1234567 · 邮件: info@katedralmedan.id",
    followUs: "关注我们",
  },
};

export default function HomeContent() {
  const { theme, language } = useAppContext();
  const t = translations[language];
  const [typedQuote, setTypedQuote] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    setTypedQuote("");

    const timer = setInterval(() => {
      currentIndex += 1;
      setTypedQuote(t.heroQuote.slice(0, currentIndex));
      if (currentIndex >= t.heroQuote.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [t.heroQuote]);

  const endSectionClass = theme === "dark"
    ? "py-20 bg-gradient-to-br from-violet-950 via-slate-950 to-fuchsia-950 text-slate-100"
    : "py-20 bg-blue-950 text-white";
  const endCardClass = theme === "dark"
    ? "rounded-[2rem] border border-violet-500/20 bg-white/5 p-10 shadow-2xl backdrop-blur-xl"
    : "rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl";
  const endPanelClass = theme === "dark"
    ? "rounded-[2rem] border border-violet-500/20 bg-white/5 p-8"
    : "rounded-[2rem] border border-white/10 bg-white/5 p-8";

  return (
    <div className="">
      <div className="absolute min-h-screen inset-0 overflow-hidden">
        <Image
          src="/kmimg1.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="w-full h-full absolute bg-black/50"></div>
      </div>
      <Navbar />
      <main className="relative min-h-full flex flex-col bg-transparent text-black">
        <div id="beranda" className="relative min-h-screen flex-1 flex items-center justify-center z-10 overflow-hidden">
          <div className="relative w-full text-center sm:text-left px-4 py-24 flex flex-col items-center justify-center">
            <div className="mx-auto max-w-3xl sm:mx-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                {typedQuote}
                <span className="inline-block h-8 w-1 bg-white align-middle ml-2 animate-pulse" />
              </h1>
              <p className="text-lg text-white font-medium">{t.scripture}</p>
            </div>
          </div>
        </div>
      </main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center items-start justify-start flex flex-col">
          <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
            <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
              {t.schedule}
            </span>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="bg-pink-500/50 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Sabtu</h1>
                <p className="text-lg">17.30 WIB</p>
              </div>
              <div className="bg-blue-500/50 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Minggu</h1>
                <p className="text-lg">06.30 WIB</p>
              </div>
              <div className="bg-blue-500/50 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Minggu</h1>
                <p className="text-lg">08.00 WIB</p>
              </div>
              <div className="bg-blue-500/50 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Minggu</h1>
                <p className="text-lg">10.00 WIB</p>
              </div>
              <div className="bg-blue-500/50 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Minggu</h1>
                <p className="text-lg">15.00 WIB</p>
              </div>
              <div className="bg-blue-500/50 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Minggu</h1>
                <p className="text-lg">17.00 WIB</p>
              </div>
              <div className="bg-green-500/50 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Harian</h1>
                <p className="text-lg">06.00 WIB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.announcement}
              </span>
              <div className="text-center py-4">
                <p className="text-lg">17.30 WIB</p>
              </div>
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.churchArticle}
              </span>
              <div className="text-center py-4">
                <p className="text-lg">17.30 WIB</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.liturgyStaff}
              </span>
              <div className="py-4">
                <div className="mb-4 w-full text-sm text-left font-bold bg-orange-300/50 text-white p-4 rounded-lg">
                  <h1>Hari: Sabtu</h1>
                  <h1>Tanggal: XX/XX/XXXX</h1>
                  <h1>Sesi: I</h1>
                  <h1>Waktu: XX.XX WIB</h1>
                  <h1>Lektor: L1</h1>
                  <h1>Kolektan: K1</h1>
                  <h1>Mazmur: M1</h1>
                  <h1>Orangins: O1</h1>
                  <h1>Dirigen: D1</h1>
                  <h1>Dekor: D1</h1>
                </div>
              </div>
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.massIntention}
              </span>
              <IntensiForm />
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.qris}
              </span>
              <img src="/qris_kat.jpeg" alt="QRIS" className="w-full h-auto object-contain" />
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.liturgy}
              </span>
              <div className="text-center py-4">
                <div className="mb-4 bg-yellow-100/50 text-white p-10 rounded-lg flex flex-col items-center justify-center">
                  <img src="https://www.imankatolik.or.id/kal_tgl_img.php" alt="" className="w-full h-auto object-contain" />
                  <img src="https://www.imankatolik.or.id/kal_perayaan_img.php" alt="" className="w-full h-auto object-contain mt-4" />
                  <img src="https://www.imankatolik.or.id/kal_alkitab_img.php" alt="" className="w-full h-auto object-contain mt-4" />
                  <img src="https://www.imankatolik.or.id/kal_warna_img.php" alt="" className="w-full h-auto object-contain mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">{t.galleryTitle}</h2>
            <p className="mt-2 text-slate-300">Lihat koleksi foto kegiatan dan suasana gereja kami.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img src="/kmimg1.jpeg" alt="Gallery 1" className="h-60 w-full rounded-2xl object-cover" />
            <img src="/qris_kat.jpeg" alt="Gallery 2" className="h-60 w-full rounded-2xl object-cover" />
            <img src="/kmimg1.jpeg" alt="Gallery 3" className="h-60 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>
      <section className={endSectionClass}>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className={endCardClass}>
              <span className="inline-flex rounded-full bg-fuchsia-500/10 px-4 py-1 text-sm font-semibold text-fuchsia-200">
                {t.followUs}
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
                {t.endTitle}
              </h2>
              <p className="mt-5 max-w-xl text-slate-200 text-lg leading-relaxed">
                {t.endDescription}
              </p>
              <a
                href="#"
                className="mt-8 inline-flex rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
              >
                {t.contactUs}
              </a>
            </div>

            <div className="grid gap-6">
              <div className={endPanelClass}>
                <h3 className="text-xl font-semibold text-white">{t.visitTitle}</h3>
                <p className="mt-4 text-slate-200 leading-relaxed">{t.visitDetails}</p>
              </div>
              <div className={endPanelClass}>
                <h3 className="text-xl font-semibold text-white">{t.connectTitle}</h3>
                <p className="mt-4 text-slate-200 leading-relaxed">{t.connectDetails}</p>
              </div>
              <div className={endPanelClass}>
                <h3 className="text-xl font-semibold text-white">{t.source}</h3>
                <p className="mt-4 text-slate-200 leading-relaxed">
                  ImanKatolik · gereja.katolik.id · katedralmedan.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
