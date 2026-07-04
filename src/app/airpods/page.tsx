import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "AirPods - Apple" };

const products = [
  {
    name: "AirPods Pro 3",
    tagline: "The world's best in-ear ANC",
    desc: "H3 chip. Adaptive Audio. USB-C. Everything you love about AirPods, turned up.",
    chip: "H3",
    audio: "Adaptive Audio",
    connector: "USB-C",
    img: "/images/airpods/airpods-pro-hero.jpg",
  },
  {
    name: "AirPods 4",
    tagline: "Open-ear design",
    desc: "H2 chip. Personalized Spatial Audio. USB-C. A magical fit for every ear.",
    chip: "H2",
    audio: "Personalized Spatial Audio",
    connector: "USB-C",
    img: "/images/airpods/airpods-4-hero.jpg",
  },
  {
    name: "AirPods Max",
    tagline: "Over-ear headphones",
    desc: "H2 chip. Active Noise Cancellation. Lightning. Exceptional sound, iconic design.",
    chip: "H2",
    audio: "Active Noise Cancellation",
    connector: "Lightning",
    img: "/images/airpods/airpods-max-hero.jpg",
  },
];

const features = [
  {
    title: "Active Noise Cancellation",
    desc: "Block out the world and focus on your music, podcasts, or calls.",
    img: "/images/airpods/audio-quality.jpg",
  },
  {
    title: "Spatial Audio",
    desc: "Immersive sound that surrounds you, creating a personal listening experience.",
    img: "/images/airpods/siri.jpg",
  },
  {
    title: "Adaptive EQ",
    desc: "Music tailored to your ears in real time based on the shape of your ear.",
    img: "/images/airpods/battery.jpg",
  },
  {
    title: "Battery Life",
    desc: "Up to 30 hours of listening time. More time to play, less time to charge.",
    img: "/images/airpods/audio-quality.jpg",
  },
];

export default function AirpodsPage() {
  return (
    <>
      <section className="min-h-[520px] max-md:min-h-[400px] flex flex-col items-center justify-center text-center pt-[120px] pb-[60px] px-5 bg-black text-[#f5f5f7] overflow-hidden relative">
        <Image src="/images/airpods/airpods-pro-hero.jpg" alt="AirPods" fill className="object-cover opacity-30" priority />
        <div className="animate-fade-in relative z-10">
          <h1 className="text-7xl max-md:text-[44px] font-semibold tracking-[-0.005em] mb-3">AirPods</h1>
          <p className="text-2xl max-md:text-lg font-normal max-w-[620px] text-[#86868b]">Sound that moves you.</p>
          <div className="flex gap-5 mt-6">
            <Link href="/airpods" className="text-[#2997ff] text-[17px] hover:underline">Explore the lineup ›</Link>
            <Link href="/airpods" className="bg-[#2997ff] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#0071e3] transition-all">Shop</Link>
          </div>
        </div>
        <div className="mt-10 animate-fade-in-up stagger-3 relative z-10 flex gap-6 items-center justify-center">
          <Image src="/images/airpods/airpods-pro-hero.jpg" alt="AirPods Pro 3" width={100} height={120} className="object-contain rounded-xl" />
          <Image src="/images/airpods/airpods-4-hero.jpg" alt="AirPods 4" width={100} height={120} className="object-contain rounded-xl" />
          <Image src="/images/airpods/airpods-max-hero.jpg" alt="AirPods Max" width={110} height={130} className="object-contain rounded-xl" />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-16 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-10 animate-fade-in">Find your sound.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div key={p.name} className={`rounded-[20px] overflow-hidden text-center animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-[#f5f5f7] text-[#1d1d1f]`}>
              <div className="p-8 pb-4">
                <div className="animate-float">
                  <Image src={p.img} width={100} height={120} className="mx-auto object-contain rounded-xl" alt={p.name} />
                </div>
                <h3 className="text-2xl font-semibold mt-4">{p.name}</h3>
                <p className="text-sm text-[#2997ff] mt-1">{p.tagline}</p>
                <p className="text-sm mt-3 leading-relaxed text-[#6e6e73]">{p.desc}</p>
              </div>
              <div className="grid grid-cols-3 gap-px bg-[#d2d2d7]">
                {[
                  { label: "Chip", val: p.chip },
                  { label: "Audio", val: p.audio },
                  { label: "Connector", val: p.connector },
                ].map((spec) => (
                  <div key={spec.label} className="p-3 bg-[#f5f5f7]">
                    <p className="text-[10px] opacity-60">{spec.label}</p>
                    <p className="text-[11px] font-semibold mt-0.5">{spec.val}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 flex gap-4 justify-center">
                <Link href="/airpods" className="text-[#2997ff] text-sm hover:underline">Learn more ›</Link>
                <Link href="/airpods" className="text-[#2997ff] text-sm hover:underline">Buy ›</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/airpods/airpods-pro-hero.jpg">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[1024px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">Amazing features.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className={`text-center p-8 bg-[#f5f5f7] rounded-[18px] animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.03] hover:shadow-lg`}>
              <div className="mb-4 flex justify-center">
                <Image src={f.img} alt={f.title} width={56} height={56} className="rounded-xl object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-[#f5f5f7] py-16 text-center px-5">
        <div className="animate-fade-in">
          <h2 className="text-[40px] max-md:text-[28px] font-semibold mb-6">Find the right AirPods for you.</h2>
          <Link href="/airpods" className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0071e3] transition-all">Compare AirPods models</Link>
        </div>
      </section>
    </>
  );
}
