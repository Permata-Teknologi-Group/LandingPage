"use client";

import Image from "next/image";
import Navbar from "./navbar";
import IntensiForm from "./IntensiForm";
import { useAppContext } from "../context/AppContext";

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
        <div className="relative min-h-screen flex-1 flex items-center justify-center z-10 overflow-hidden">
          <div className="relative w-full text-left px-4 py-24">
            <h1 className="text-4xl max-w-2xl font-bold mb-4 ml-10 text-white">
              {t.heroQuote}
            </h1>
            <p className="text-lg ml-10 text-white font-medium">{t.scripture}</p>
          </div>
        </div>
      </main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center items-start justify-start flex flex-col">
          <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
            <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
              {t.schedule}
            </span>
            <div className="text-center flex flex-row space-x-4 items-center justify-center">
              <div className="mb-4 bg-pink-500/50 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Sabtu</h1>
                <p className="text-lg min-w-[120px]">17.30 WIB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center items-start justify-start flex flex-row mt-10">
          <div className="w-80/100 flex flex-col items-center justify-center pr-5">
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6 mb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.announcement}
              </span>
              <div className="text-center flex flex-row space-x-4 items-center justify-center">
                <p className="text-lg min-w-[120px]">17.30 WIB</p>
              </div>
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6 mb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.churchArticle}
              </span>
              <div className="text-center flex flex-row space-x-4 items-center justify-center">
                <p className="text-lg min-w-[120px]">17.30 WIB</p>
              </div>
            </div>
          </div>
          <div className="w-20/100 flex flex-col items-center justify-center pl-5">
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6 mb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.liturgyStaff}
              </span>
              <div className="text-center flex flex-row space-x-4 items-center justify-center">
                <div className="mb-4 bg-pink-500/50 text-white p-4 rounded-lg">
                  <h1 className="text-xl font-bold">Sabtu</h1>
                  <p className="text-lg min-w-[120px]">17.30 WIB</p>
                </div>
              </div>
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6 mb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.massIntention}
              </span>
              <IntensiForm />
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6 mb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.qris}
              </span>
              <img src="/qris_kat.jpeg" alt="QRIS" className="min-w-full min-h-auto" />
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6 mb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                {t.liturgy}
              </span>
              <div className="text-center flex flex-row space-x-4 items-center justify-center">
                <div className="mb-4 bg-yellow-100/50 text-white p-10 rounded-lg flex flex-col items-center justify-center">
                  <img src="https://www.imankatolik.or.id/kal_tgl_img.php" alt="" />
                  <img src="https://www.imankatolik.or.id/kal_perayaan_img.php" alt="" />
                  <img src="https://www.imankatolik.or.id/kal_alkitab_img.php" alt="" />
                  <img src="https://www.imankatolik.or.id/kal_warna_img.php" alt="" />
                </div>
              </div>
            </div>
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
