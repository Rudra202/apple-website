import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accessories - Apple" };

const categories = [
  {
    name: "iPhone Cases & Protection",
    desc: "Slim, durable cases designed for your iPhone.",
    img: "/images/iphone/camera.jpg",
  },
  {
    name: "iPad Cases & Keyboards",
    desc: "Type, draw, and protect with purpose-built accessories.",
    img: "/images/ipad/ipad-pro-hero.jpg",
  },
  {
    name: "Apple Watch Bands",
    desc: "Change your style with every band imaginable.",
    img: "/images/watch/contrast-s11.png",
  },
  {
    name: "AirPods Cases & Accessories",
    desc: "Keep your AirPods safe and always within reach.",
    img: "/images/airpods/airpods-pro-hero.jpg",
  },
  {
    name: "Charging & Cables",
    desc: "Fast, reliable charging for all your devices.",
    img: "/images/iphone/chip.jpg",
  },
  {
    name: "Audio & Speakers",
    desc: "Immersive sound for music, calls, and everything.",
    img: "/images/tv-home/homepod-hero.jpg",
  },
];

const featured = [
  {
    name: "FineWoven Case for iPhone 17",
    desc: "Made from durable micro-twill.",
    price: "$49",
    img: "/images/iphone/17pro.png",
  },
  {
    name: "Magic Keyboard for iPad",
    desc: "Typing and trackpad experience.",
    price: "$349",
    img: "/images/ipad/ipad-pro-hero.jpg",
  },
  {
    name: "Sport Band for Apple Watch",
    desc: "Form-fitting, durable material.",
    price: "$49",
    img: "/images/watch/workout.jpg",
  },
  {
    name: "AirPods Pro USB-C Cable",
    desc: "Braided, 1 meter.",
    price: "$29",
    img: "/images/airpods/audio-quality.jpg",
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <section className="relative min-h-[520px] max-md:min-h-[400px] flex flex-col items-center justify-center text-center pt-[120px] pb-[60px] px-5 bg-black text-[#f5f5f7] overflow-hidden">
        <Image src="/images/iphone/camera.jpg" alt="Accessories" fill className="object-cover opacity-30" priority />
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-7xl max-md:text-[44px] font-semibold tracking-[-0.005em] mb-3">Accessories</h1>
          <p className="text-2xl max-md:text-lg font-normal max-w-[620px] text-[#86868b]">
            Explore accessories for your favorite Apple devices.
          </p>
          <div className="flex gap-5 mt-6 justify-center">
            <Link
              href="/accessories"
              className="bg-[#2997ff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0071e3] transition-all"
            >
              Shop Accessories
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">Browse by category.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`bg-[#f5f5f7] rounded-[20px] p-8 animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="mb-5">
                <Image src={cat.img} alt={cat.name} width={64} height={64} className="object-cover rounded-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">{cat.desc}</p>
              <Link href="/accessories" className="text-[#2997ff] text-sm font-semibold hover:underline">
                Shop ›
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/iphone/17pro.png">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[1100px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">Featured accessories.</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((item, i) => (
            <div
              key={item.name}
              className={`bg-white border border-gray-200 rounded-[18px] p-6 text-center animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] hover:shadow-lg`}
            >
              <div className="mb-4 flex items-center justify-center h-[130px]">
                <Image src={item.img} alt={item.name} width={100} height={130} className="object-contain rounded-xl h-[130px]" />
              </div>
              <h3 className="text-sm font-semibold leading-tight mb-1">{item.name}</h3>
              <p className="text-xs text-[#6e6e73] mb-2">{item.desc}</p>
              <p className="text-sm font-semibold text-[#1d1d1f] mb-3">{item.price}</p>
              <Link href="/accessories" className="text-[#2997ff] text-xs font-semibold hover:underline">
                Shop ›
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-[#f5f5f7] py-20 text-center px-5">
        <div className="animate-fade-in">
          <h2 className="text-[40px] max-md:text-[28px] font-semibold mb-4">Make it yours.</h2>
          <p className="text-[#86868b] max-w-[500px] mx-auto mb-7">
            Find the perfect accessories to personalize your devices.
          </p>
          <Link
            href="/accessories"
            className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#0071e3] transition-all"
          >
            Shop all accessories
          </Link>
        </div>
      </section>
    </>
  );
}
