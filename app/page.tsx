import Image from "next/image";
import Navbar from "./modules/navbar";

export const metadata = {
  title: "Landing Page",
  description: "Discover our amazing product and features.",
};

export default function Home() {
  return (
    <div className="bg-white">
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
              "Aku ini hamba Tuhan. Terjadilah padaku seperti yang Engkau katakan itu"
            </h1>
            <p className="text-lg ml-10 text-white font-medium">Lukas 1:38</p>
          </div>
        </div>
      </main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center items-start justify-start flex flex-col">
          <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6">
            <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
              Jadwal Misa
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
                Pengunguman
              </span>
              <div className="text-center flex flex-row space-x-4 items-center justify-center">
                <p className="text-lg min-w-[120px]">17.30 WIB</p>
              </div>
            </div>
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6 mb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                Artikel Gereja
              </span>
              <div className="text-center flex flex-row space-x-4 items-center justify-center">
                <p className="text-lg min-w-[120px]">17.30 WIB</p>
              </div>
            </div>
          </div>
          <div className="w-20/100 flex flex-col items-center justify-center pl-5">
            <div className="min-w-full min-h-[164px] relative border-2 border-blue-500 border-dotted border-blue-300 rounded-lg pt-8 px-6 pb-6 mb-6">
              <span className="absolute left-6 top-0 -translate-y-1/2 bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md border border-blue-100">
                Petugas Liturgi
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
                Intensi Misa
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
                QRIS
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
                Liturgi
              </span>
              <div className="text-center flex flex-row space-x-4 items-center justify-center">
                <div className="mb-4 bg-yellow-100/50 text-white p-10 rounded-lg flex flex-col items-center justify-center">
                  <img src="https://www.imankatolik.or.id/kal_tgl_img.php" alt="" />
                  <img src="https://www.imankatolik.or.id/kal_perayaan_img.php" alt="" />
                  <img src="https://www.imankatolik.or.id/kal_alkitab_img.php" alt="" />
                  <img src="https://www.imankatolik.or.id/kal_warna_img.php" alt="" />
                  <p className="text-black font-600 text-sm mt-2 p-0">sumber: <a className="text-blue-400 text-underline" href="https://www.imankatolik.or.id/">ImanKatolik</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-gray-600 mb-4">$9.99/month</p>
              <ul className="text-gray-600 mb-6">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Choose Plan</button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-gray-600 mb-4">$19.99/month</p>
              <ul className="text-gray-600 mb-6">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Choose Plan</button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-4">Contact us for pricing</p>
              <ul className="text-gray-600 mb-6">
                <li>Feature A</li>
                <li>  Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
                <li>Feature E</li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}