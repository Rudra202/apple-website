import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "iPhone - Apple" };

const products = [
  {
    name: "iPhone 17 Pro",
    tagline: "Pro. Beyond.",
    desc: "Pro Fusion camera system. A18 Pro chip. Titanium design. The ultimate iPhone.",
    chip: "A18 Pro",
    camera: "Pro Fusion 48MP",
    display: '6.3" or 6.9" OLED',
    color: "#1a2a3a",
    textColor: "#f5f5f7",
    img: "/images/iphone/17pro.png",
  },
  {
    name: "iPhone 17",
    tagline: "Brilliant. By design.",
    desc: "Dual Fusion camera system. A18 chip. Stunning colors and incredible battery life.",
    chip: "A18",
    camera: "Dual Fusion 48MP",
    display: '6.1" or 6.7" OLED',
    color: "#f5f5f7",
    textColor: "#1d1d1f",
    img: "/images/iphone/17.png",
  },
  {
    name: "iPhone 17e",
    tagline: "Powerful. Affordable.",
    desc: "Fusion camera system. A17 chip. Incredible value in a beautiful design.",
    chip: "A17",
    camera: "Fusion 48MP",
    display: '6.1" OLED',
    color: "#2d1b3a",
    textColor: "#f5f5f7",
    img: "/images/iphone/17e.png",
  },
];

const features = [
  {
    title: "Pro Fusion Camera",
    desc: "Advanced camera systems with Photonic Engine, Portrait mode, and 4K video.",
    img: "/images/iphone/camera.jpg",
  },
  {
    title: "A18 Chip",
    desc: "Blazing-fast performance and power efficiency. Built for Apple Intelligence.",
    img: "/images/iphone/chip.jpg",
  },
  {
    title: "Apple Intelligence",
    desc: "Personal intelligence system that understands you and your data — with privacy built in.",
    img: "/images/iphone/ios.jpg",
  },
];

export default function IphonePage() {
  return (
    <>
      <section className="min-h-[520px] max-md:min-h-[400px] flex flex-col items-center justify-center text-center pt-[120px] pb-[60px] px-5 bg-black text-[#f5f5f7] overflow-hidden relative">
        <Image src="/images/hero/iphone-family.jpg" alt="iPhone" fill className="object-cover opacity-40" priority />
        <div className="animate-fade-in relative z-10">
          <h1 className="text-7xl max-md:text-[44px] font-semibold tracking-[-0.005em] mb-3">iPhone</h1>
          <p className="text-2xl max-md:text-lg font-normal max-w-[620px] text-[#86868b]">Meet the latest iPhone lineup. Pro. Air. And iPhone 17.</p>
          <div className="flex gap-5 mt-6">
            <Link href="/iphone" className="text-[#2997ff] text-[17px] hover:underline">Explore the lineup ›</Link>
            <Link href="/iphone" className="bg-[#2997ff] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#0071e3] transition-all">Shop iPhone</Link>
          </div>
        </div>
        <div className="mt-10 animate-fade-in-up stagger-3 relative z-10">
          <div className="flex gap-8 items-end justify-center">
            <Image src="/images/iphone/17pro.png" alt="iPhone 17 Pro" width={100} height={180} className="object-contain" />
            <Image src="/images/iphone/17.png" alt="iPhone 17" width={95} height={170} className="object-contain" />
            <Image src="/images/iphone/17e.png" alt="iPhone 17e" width={90} height={165} className="object-contain" />
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-16 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-2 animate-fade-in">Find your iPhone.</h2>
        <p className="text-center text-[#6e6e73] mb-10 animate-fade-in-up stagger-1">Choose the one that&apos;s right for you.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div key={p.name} className="rounded-[20px] overflow-hidden text-center animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl" style={{ background: p.color, color: p.textColor }}>
              <div className="p-8 pb-4">
                <div className="animate-float">
                  <Image src={p.img} width={100} height={160} className="mx-auto object-contain" alt={p.name} />
                </div>
                <h3 className="text-2xl font-semibold mt-4">{p.name}</h3>
                <p className="text-sm text-[#2997ff] mt-1">{p.tagline}</p>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: i === 1 ? "#6e6e73" : "#a1a1a6" }}>{p.desc}</p>
              </div>
              <div className="grid grid-cols-3 gap-px" style={{ background: i === 1 ? "#d2d2d7" : "#444" }}>
                {[{ label: "Chip", val: p.chip }, { label: "Camera", val: p.camera }, { label: "Display", val: p.display }].map((spec) => (
                  <div key={spec.label} className="p-3" style={{ background: i === 1 ? "#fff" : "#222" }}>
                    <p className="text-[10px] opacity-60">{spec.label}</p>
                    <p className="text-[11px] font-semibold mt-0.5">{spec.val}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 flex gap-4 justify-center">
                <Link href="/iphone" className="text-[#2997ff] text-sm hover:underline">Learn more ›</Link>
                <Link href="/iphone" className="text-[#2997ff] text-sm hover:underline">Buy ›</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/hero/iphone-family.jpg">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[1024px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">Key Features.</h2>
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
          <h2 className="text-[40px] max-md:text-[28px] font-semibold mb-3">Trade in your smartphone.</h2>
          <p className="text-[#86868b] max-w-[500px] mx-auto mb-6">Get $195–$695 in credit toward your new iPhone. It&apos;s good for you and the planet.</p>
          <Link href="/" className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0071e3] transition-all">Get your estimate</Link>
        </div>
      </section>
    </>
  );
}
