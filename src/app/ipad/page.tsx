import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "iPad - Apple" };

const products = [
  {
    name: "iPad Pro",
    tagline: "Supercharged by M4",
    desc: "Advanced AI performance and game-changing capabilities. The ultimate iPad experience.",
    chip: "M4",
    display: '11" or 13" Ultra Retina XDR',
    storage: "256GB – 2TB",
    color: "#f5f5f7",
    img: "/images/ipad/ipad-pro-hero.jpg",
  },
  {
    name: "iPad Air",
    tagline: "Supercharged by M4",
    desc: "Now supercharged by M4. Powerful, portable, and packed with AI features for everyone.",
    chip: "M4",
    display: '11" or 13" Liquid Retina',
    storage: "128GB – 1TB",
    color: "#e8e8ed",
    img: "/images/ipad/ipad-air-hero.jpg",
  },
  {
    name: "iPad",
    tagline: "A colorful way to do it all",
    desc: "The colorful, all-screen iPad for the things you do every day. A14 Bionic chip.",
    chip: "A14 Bionic",
    display: '10.9" Liquid Retina',
    storage: "64GB – 256GB",
    color: "#f0f0f5",
    img: "/images/ipad/ipad-hero.jpg",
  },
];

const features = [
  {
    title: "Apple Pencil Pro",
    desc: "Squeeze, barrel roll, and haptic feedback. A whole new way to create.",
    img: "/images/ipad/ipad-pro-hero.jpg",
  },
  {
    title: "Magic Keyboard",
    desc: "A remarkably smooth and consistent typing experience with a built-in trackpad.",
    img: "/images/ipad/ipad-air-hero.jpg",
  },
  {
    title: "iPadOS",
    desc: "Stay productive and connected with powerful multitasking and AI features.",
    img: "/images/ipad/ipad-hero.jpg",
  },
];

export default function IpadPage() {
  return (
    <>
      <section className="min-h-[520px] max-md:min-h-[400px] flex flex-col items-center justify-center text-center pt-[120px] pb-[60px] px-5 bg-black text-[#f5f5f7] overflow-hidden">
        <div className="animate-fade-in">
          <h1 className="text-7xl max-md:text-[44px] font-semibold tracking-[-0.005em] mb-3">iPad</h1>
          <p className="text-2xl max-md:text-lg font-normal max-w-[620px] text-[#86868b]">Three distinct models. One endless possibility.</p>
          <div className="flex gap-5 mt-6">
            <Link href="/ipad" className="text-[#2997ff] text-[17px] hover:underline">Explore the lineup ›</Link>
            <Link href="/ipad" className="bg-[#2997ff] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#0071e3] transition-all">Shop iPad</Link>
          </div>
        </div>
        <div className="mt-10 animate-fade-in-up stagger-3">
          <Image
            src="/images/ipad/ipad-pro-hero.jpg"
            alt="iPad Pro"
            width={500}
            height={220}
            className="max-w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-16 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-2 animate-fade-in">Explore the lineup.</h2>
        <p className="text-center text-[#6e6e73] mb-10 animate-fade-in-up stagger-1">Find the perfect iPad for you.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div key={p.name} className={`rounded-[20px] overflow-hidden text-center animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`} style={{ background: p.color }}>
              <div className="p-8 pb-4">
                <div className="animate-float">
                  <Image src={p.img} width={160} height={140} className="mx-auto object-contain rounded-xl" alt={p.name} />
                </div>
                <h3 className="text-2xl font-semibold mt-4">{p.name}</h3>
                <p className="text-sm text-[#2997ff] mt-1">{p.tagline}</p>
                <p className="text-sm text-[#6e6e73] mt-3 leading-relaxed">{p.desc}</p>
              </div>
              <div className="grid grid-cols-3 gap-px bg-[#d2d2d7]">
                {[{ label: "Chip", val: p.chip }, { label: "Display", val: p.display }, { label: "Storage", val: p.storage }].map((spec) => (
                  <div key={spec.label} className="bg-white p-3">
                    <p className="text-[10px] text-[#6e6e73]">{spec.label}</p>
                    <p className="text-[11px] font-semibold mt-0.5">{spec.val}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 flex gap-4 justify-center">
                <Link href="/ipad" className="text-[#2997ff] text-sm hover:underline">Learn more ›</Link>
                <Link href="/ipad" className="text-[#2997ff] text-sm hover:underline">Buy ›</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/ipad/ipad-air-hero.jpg">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[1024px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">Accessories.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className={`text-center p-6 bg-[#f5f5f7] rounded-[18px] animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.03] hover:shadow-lg`}>
              <div className="mb-4 flex justify-center">
                <Image src={f.img} alt={f.title} width={60} height={60} className="rounded-xl object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-[#f5f5f7] py-16 text-center px-5">
        <div className="animate-fade-in">
          <h2 className="text-[40px] max-md:text-[28px] font-semibold mb-3">Which iPad is right for you?</h2>
          <p className="text-[#86868b] max-w-[500px] mx-auto mb-6">Compare all iPad models to find the best fit for your needs and budget.</p>
          <Link href="/ipad" className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0071e3] transition-all">Compare iPad models</Link>
        </div>
      </section>
    </>
  );
}
