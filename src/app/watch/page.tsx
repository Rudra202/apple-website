import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Apple Watch - Apple" };

const products = [
  {
    name: "Apple Watch Series 11",
    tagline: "The ultimate way to watch your health.",
    desc: "Advanced health features. Beautiful always-on display. The essential wearable.",
    chip: "S11 SiP",
    display: "Always-On Retina LTPO",
    size: "42mm or 46mm",
    color: "#333",
    img: "/images/watch/s11-hero.jpg",
  },
  {
    name: "Apple Watch Ultra 3",
    tagline: "The most rugged watch ever.",
    desc: "Designed for endurance athletes and outdoor adventurers. Titanium case.",
    chip: "S11 SiP",
    display: "Always-On Retina LTPO 3000 nits",
    size: "49mm titanium",
    color: "#2a2a2a",
    img: "/images/promo/watch-series-11.jpg",
  },
  {
    name: "Apple Watch SE",
    tagline: "All the essentials. Great value.",
    desc: "Core Apple Watch features at an accessible price. Perfect for everyone.",
    chip: "S9 SiP",
    display: "Retina LTPO OLED",
    size: "40mm or 44mm",
    color: "#e8e8ed",
    img: "/images/watch/se-hero.jpg",
  },
];

const features = [
  {
    title: "Health Monitoring",
    desc: "ECG, blood oxygen, sleep tracking, and temperature sensing. Your health at a glance.",
    img: "/images/watch/rings.png",
  },
  {
    title: "Workout Tracking",
    desc: "From running to yoga to swimming. Track your workouts with precision.",
    img: "/images/watch/workout.jpg",
  },
  {
    title: "Always-On Display",
    desc: "The display never sleeps. See your time, complications, and activity at a glance.",
    img: "/images/watch/contrast-s11.png",
  },
];

export default function WatchPage() {
  return (
    <>
      <section className="min-h-[520px] max-md:min-h-[400px] flex flex-col items-center justify-center text-center pt-[120px] pb-[60px] px-5 bg-black text-[#f5f5f7] overflow-hidden relative">
        <Image src="/images/watch/s11-hero.jpg" alt="Apple Watch" fill className="object-cover opacity-30" priority />
        <div className="animate-fade-in relative z-10">
          <h1 className="text-7xl max-md:text-[44px] font-semibold tracking-[-0.005em] mb-3">Apple Watch</h1>
          <p className="text-2xl max-md:text-lg font-normal max-w-[620px] text-[#86868b]">The ultimate way to watch your health.</p>
          <div className="flex gap-5 mt-6">
            <Link href="/watch" className="text-[#2997ff] text-[17px] hover:underline">Explore the lineup ›</Link>
            <Link href="/watch" className="bg-[#2997ff] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#0071e3] transition-all">Shop Apple Watch</Link>
          </div>
        </div>
        <div className="mt-10 animate-fade-in-up stagger-3 relative z-10 flex gap-6 items-end justify-center">
          <Image src="/images/watch/s11-hero.jpg" alt="Series 11" width={100} height={140} className="object-contain rounded-2xl" />
          <Image src="/images/promo/watch-series-11.jpg" alt="Ultra 3" width={100} height={140} className="object-contain rounded-2xl" />
          <Image src="/images/watch/se-hero.jpg" alt="SE" width={90} height={130} className="object-contain rounded-2xl" />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-16 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-2 animate-fade-in">Find your fit.</h2>
        <p className="text-center text-[#6e6e73] mb-10 animate-fade-in-up stagger-1">Three watches. Countless ways to make them yours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div key={p.name} className="rounded-[20px] overflow-hidden text-center animate-fade-in-up transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl" style={{ background: p.color }}>
              <div className="p-8 pb-4" style={{ color: i < 2 ? "#f5f5f7" : "#1d1d1f" }}>
                <div className="animate-float">
                  <Image src={p.img} width={100} height={140} className="mx-auto object-contain rounded-xl" alt={p.name} />
                </div>
                <h3 className="text-2xl font-semibold mt-4">{p.name}</h3>
                <p className="text-sm text-[#2997ff] mt-1">{p.tagline}</p>
                <p className="text-sm mt-3 leading-relaxed opacity-70">{p.desc}</p>
              </div>
              <div className="grid grid-cols-3 gap-px" style={{ background: i < 2 ? "#555" : "#d2d2d7" }}>
                {[{ label: "Chip", val: p.chip }, { label: "Display", val: p.display }, { label: "Size", val: p.size }].map((spec) => (
                  <div key={spec.label} className="p-3" style={{ background: i < 2 ? "#222" : "#fff", color: i < 2 ? "#f5f5f7" : "#1d1d1f" }}>
                    <p className="text-[10px] opacity-60">{spec.label}</p>
                    <p className="text-[11px] font-semibold mt-0.5">{spec.val}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 flex gap-4 justify-center" style={{ background: p.color }}>
                <Link href="/watch" className="text-[#2997ff] text-sm hover:underline">Learn more ›</Link>
                <Link href="/watch" className="text-[#2997ff] text-sm hover:underline">Buy ›</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/watch/s11-hero.jpg">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[1024px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">Why Apple Watch.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className={`text-center p-6 bg-[#f5f5f7] rounded-[18px] animate-fade-in-up transition-all duration-500 hover:scale-[1.03] hover:shadow-lg`}>
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
          <h2 className="text-[40px] max-md:text-[28px] font-semibold mb-3">Why Apple Watch.</h2>
          <p className="text-[#86868b] max-w-[500px] mx-auto mb-6">It can do what your phone can&apos;t. And do what your phone can, right from your wrist.</p>
          <Link href="/watch" className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0071e3] transition-all">Compare all models</Link>
        </div>
      </section>
    </>
  );
}
