import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mac - Apple" };

const products = [
  {
    name: "MacBook Air",
    tagline: "Now supercharged by M5",
    desc: "Strikingly thin design with all-day battery life. Available in four stunning colors.",
    color: "#f5f5f7",
    chip: "M5",
    screen: '13.6" or 15.3"',
    battery: "Up to 18 hours",
    weight: "From 2.7 lbs",
    img: "/images/mac/mba-design.png",
  },
  {
    name: "MacBook Pro",
    tagline: "With M5, M5 Pro, and M5 Max",
    desc: "Pro performance that goes beyond the limits. For developers, designers, and pros.",
    color: "#1a1a1a",
    chip: "M5 / M5 Pro / M5 Max",
    screen: '14.2" or 16.2"',
    battery: "Up to 22 hours",
    weight: "From 3.5 lbs",
    img: "/images/mac/mbp-hero.jpg",
  },
  {
    name: "iMac",
    tagline: "The all-in-one for everyone",
    desc: "Stunning 24-inch display in seven vibrant colors. Supercharged by M4.",
    color: "#f0f0f5",
    chip: "M4",
    screen: '24" 4.5K Retina',
    battery: "Always plugged in",
    weight: "From 9.87 lbs",
    img: "/images/mac/imac-design.jpg",
  },
];

const features = [
  {
    title: "Apple Silicon",
    desc: "Every Mac is powered by Apple silicon, delivering incredible performance, efficiency, and unified memory architecture.",
    img: "/images/mac/mba-chip.jpg",
  },
  {
    title: "macOS Sequoia",
    desc: "The operating system designed for the way you work. Continuity features work seamlessly with your other Apple devices.",
    img: "/images/mac/mba-continuity.jpg",
  },
  {
    title: "Built for AI",
    desc: "With the Neural Engine and powerful GPUs, every Mac is ready for advanced AI workloads and on-device machine learning.",
    img: "/images/mac/mba-ai.jpg",
  },
  {
    title: "Retina Display",
    desc: "From Liquid Retina to XDR — every Mac display delivers exceptional color accuracy, brightness, and clarity.",
    img: "/images/mac/mba-battery.jpg",
  },
];

export default function MacPage() {
  return (
    <>
      <section className="min-h-[520px] max-md:min-h-[400px] flex flex-col items-center justify-center text-center pt-[120px] pb-[60px] px-5 bg-black text-[#f5f5f7] overflow-hidden">
        <div className="animate-fade-in">
          <h1 className="text-7xl max-md:text-[44px] font-semibold tracking-[-0.005em] mb-3">Mac</h1>
          <p className="text-2xl max-md:text-lg font-normal max-w-[620px] text-[#86868b]">
            The most powerful Mac lineup ever. Supercharged by Apple M-series chips.
          </p>
          <div className="flex gap-5 mt-6">
            <Link href="/mac" className="text-[#2997ff] text-[17px] hover:underline transition-all hover:brightness-150">Explore the lineup ›</Link>
            <Link href="/mac" className="bg-[#2997ff] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#0071e3] transition-all duration-300">Shop Mac</Link>
          </div>
        </div>
        <div className="mt-10 animate-fade-in-up stagger-3">
          <Image
            src="/images/mac/mba-design.png"
            alt="MacBook Air"
            width={600}
            height={220}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-16 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-2 animate-fade-in">Explore the lineup.</h2>
        <p className="text-center text-[#6e6e73] mb-10 animate-fade-in-up stagger-1">Three distinct models. One powerful family.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-[20px] overflow-hidden text-center animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
              style={{ background: p.color }}
            >
              <div className="p-8 pb-4">
                <div className="animate-float">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={200}
                    height={140}
                    className="mx-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold mt-5">{p.name}</h3>
                <p className="text-sm text-[#2997ff] mt-1">{p.tagline}</p>
                <p className="text-sm text-[#6e6e73] mt-3 leading-relaxed">{p.desc}</p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[#d2d2d7]">
                {[
                  { label: "Chip", val: p.chip },
                  { label: "Display", val: p.screen },
                  { label: "Battery", val: p.battery },
                  { label: "Weight", val: p.weight },
                ].map((spec) => (
                  <div key={spec.label} className="bg-white dark:bg-[#222] p-4">
                    <p className="text-xs text-[#6e6e73]">{spec.label}</p>
                    <p className="text-sm font-semibold mt-0.5">{spec.val}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 flex gap-4 justify-center">
                <Link href="/mac" className="text-[#2997ff] text-sm hover:underline">Learn more ›</Link>
                <Link href="/mac" className="text-[#2997ff] text-sm hover:underline">Buy ›</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/mac/macbook-air-hero.png">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[1024px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">Why Mac.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`text-center p-6 bg-[#f5f5f7] rounded-[18px] animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.03] hover:shadow-lg`}
            >
              <div className="mb-4 flex justify-center">
                <Image src={f.img} alt={f.title} width={80} height={80} className="rounded-xl object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-[#f5f5f7] py-16 text-center px-5">
        <div className="animate-fade-in">
          <h2 className="text-[40px] max-md:text-[28px] font-semibold mb-3">Find the right Mac for you.</h2>
          <p className="text-[#86868b] max-w-[500px] mx-auto mb-6">Not sure which Mac is right for you? Compare models and get personalized recommendations.</p>
          <Link href="/mac" className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0071e3] transition-all duration-300">Compare Mac models</Link>
        </div>
      </section>
    </>
  );
}
