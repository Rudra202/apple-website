import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "TV & Home - Apple" };

const products = [
  {
    name: "Apple TV 4K",
    tagline: "The highest-quality video",
    desc: "Cinematic experience with Dolby Vision, HDR10+, and the powerful A17 chip.",
    chip: "A17 Pro",
    display: "Dolby Vision",
    storage: "128GB / 256GB",
    color: "#1d1d1f",
    textColor: "#f5f5f7",
    img: "/images/tv-home/atv-hero.jpg",
  },
  {
    name: "HomePod",
    tagline: "Room-filling sound",
    desc: "Immersive audio with Spatial Audio, S7 chip, and 360-degree room-sensing sound.",
    chip: "S7",
    display: "Spatial Audio",
    storage: "360° Sound",
    color: "#f5f5f7",
    textColor: "#1d1d1f",
    img: "/images/tv-home/homepod-hero.jpg",
  },
  {
    name: "HomePod mini",
    tagline: "Big sound for any space",
    desc: "Compact design with S5 chip, Room Sensing, and 360-degree audio for every room.",
    chip: "S5",
    display: "Room Sensing",
    storage: "360° Audio",
    color: "#f5f5f7",
    textColor: "#1d1d1f",
    img: "/images/tv-home/hpm-hero.jpg",
  },
];

const features = [
  {
    title: "Dolby Vision & HDR10+",
    desc: "Cinema-quality picture with stunning contrast and vibrant colors.",
    img: "/images/tv-home/atv-hero.jpg",
  },
  {
    title: "Spatial Audio",
    desc: "Sound that surrounds you from every direction for a deeper experience.",
    img: "/images/tv-home/homepod-hero.jpg",
  },
  {
    title: "Smart Home",
    desc: "Control your home with Siri. Lights, thermostats, and more.",
    img: "/images/tv-home/homepod-mini-hero.jpg",
  },
  {
    title: "Multi-Room Audio",
    desc: "Fill every room with music. Sync speakers throughout your home.",
    img: "/images/tv-home/hpm-hero.jpg",
  },
];

export default function TvHomePage() {
  return (
    <>
      <section className="relative min-h-[520px] max-md:min-h-[400px] flex flex-col items-center justify-center text-center pt-[120px] pb-[60px] px-5 bg-black text-[#f5f5f7] overflow-hidden">
        <Image src="/images/tv-home/atv-hero.jpg" alt="TV & Home" fill className="object-cover opacity-30" priority />
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-7xl max-md:text-[44px] font-semibold tracking-[-0.005em] mb-3">TV &amp; Home</h1>
          <p className="text-2xl max-md:text-lg font-normal max-w-[620px] text-[#86868b]">The home entertainment experience. Elevated.</p>
          <div className="flex gap-5 mt-6">
            <Link href="/tv-home" className="text-[#2997ff] text-[17px] hover:underline">Learn more ›</Link>
            <Link href="/tv-home" className="bg-[#2997ff] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#0071e3] transition-all">Shop</Link>
          </div>
        </div>
        <div className="relative z-10 mt-10 animate-fade-in-up stagger-3 flex gap-5 items-center justify-center">
          <Image src="/images/tv-home/atv-hero.jpg" alt="Apple TV 4K" width={140} height={100} className="object-contain rounded-xl" />
          <Image src="/images/tv-home/homepod-hero.jpg" alt="HomePod" width={70} height={120} className="object-contain rounded-xl" />
          <Image src="/images/tv-home/hpm-hero.jpg" alt="HomePod mini" width={60} height={100} className="object-contain rounded-xl" />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-16 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-2 animate-fade-in">Explore the lineup.</h2>
        <p className="text-center text-[#6e6e73] mb-10 animate-fade-in-up stagger-1">Find the perfect entertainment for your home.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-[20px] overflow-hidden text-center animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
              style={{ background: p.color, color: p.textColor }}
            >
              <div className="p-8 pb-4">
                <div className="animate-float">
                  <Image src={p.img} alt={p.name} width={160} height={120} className="mx-auto object-contain rounded-xl" />
                </div>
                <h3 className="text-2xl font-semibold mt-4">{p.name}</h3>
                <p className="text-sm mt-1 text-[#2997ff]">{p.tagline}</p>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: p.color === "#1d1d1f" ? "#a1a1a6" : "#6e6e73" }}>{p.desc}</p>
              </div>
              <div className="grid grid-cols-3 gap-px" style={{ background: p.color === "#1d1d1f" ? "#444" : "#d2d2d7" }}>
                {[{ label: "Chip", val: p.chip }, { label: "Tech", val: p.display }, { label: "Storage", val: p.storage }].map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3"
                    style={{ background: p.color === "#1d1d1f" ? "#2d2d2f" : "#fff", color: p.color === "#1d1d1f" ? "#f5f5f7" : "#1d1d1f" }}
                  >
                    <p className="text-[10px] opacity-60">{spec.label}</p>
                    <p className="text-[11px] font-semibold mt-0.5">{spec.val}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 flex gap-4 justify-center">
                <Link href="/tv-home" className="text-[#2997ff] text-sm hover:underline">Learn more ›</Link>
                <Link href="/tv-home" className="text-[#2997ff] text-sm hover:underline">Buy ›</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/tv-home/atv-hero.jpg">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[1024px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">Why TV &amp; Home.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`text-center p-8 bg-[#f5f5f7] rounded-[18px] animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.03] hover:shadow-lg`}
            >
              <div className="mb-4 flex justify-center">
                <Image src={f.img} alt={f.title} width={60} height={60} className="rounded-xl object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-[#f5f5f7] py-16 text-center px-5">
        <div className="animate-fade-in">
          <h2 className="text-[40px] max-md:text-[28px] font-semibold mb-3">Entertain your home.</h2>
          <p className="text-[#86868b] max-w-[500px] mx-auto mb-6">Discover the ultimate way to watch, listen, and control your home.</p>
          <Link href="/tv-home" className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0071e3] transition-all">Shop TV &amp; Home</Link>
        </div>
      </section>
    </>
  );
}
