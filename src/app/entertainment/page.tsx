import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Entertainment - Apple" };

const services = [
  {
    name: "Apple TV+",
    desc: "Original stories from the most creative minds.",
    price: "$9.99/mo",
    src: "/images/entertainment/apple-tv-plus.jpg",
    dark: true,
  },
  {
    name: "Apple Music",
    desc: "Over 100 million songs. Start listening.",
    price: "$10.99/mo",
    src: "/images/entertainment/apple-music.jpg",
    dark: false,
  },
  {
    name: "Apple Arcade",
    desc: "Hundreds of games. No ads.",
    price: "$6.99/mo",
    src: "/images/entertainment/apple-arcade.jpg",
    dark: true,
  },
  {
    name: "Apple Fitness+",
    desc: "Studio-quality workouts from home.",
    price: "$9.99/mo",
    src: "/images/entertainment/apple-fitness.jpg",
    dark: false,
  },
];

const bundles = [
  {
    name: "Individual",
    price: "$19.95/mo",
    features: ["Apple Music", "Apple TV+", "Apple Arcade", "50GB iCloud storage"],
    premier: false,
  },
  {
    name: "Family",
    price: "$25.95/mo",
    features: ["Everything in Individual", "Share with up to 5 people", "200GB iCloud storage"],
    premier: false,
  },
  {
    name: "Premier",
    price: "$37.95/mo",
    features: ["Everything in Family", "Apple Fitness+", "Apple News+", "2TB iCloud storage"],
    premier: true,
  },
];

export default function EntertainmentPage() {
  return (
    <>
      <section className="relative min-h-[600px] max-md:min-h-[480px] flex flex-col items-center justify-center text-center pt-[120px] pb-[60px] px-5 bg-gradient-to-b from-[#000] to-[#1a1a2e] text-white overflow-hidden">
        <Image src="/images/entertainment/apple-tv-plus.jpg" alt="Entertainment" fill className="object-cover opacity-30" priority />
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-7xl max-md:text-[44px] font-semibold tracking-[-0.005em] mb-3">Entertainment</h1>
          <p className="text-2xl max-md:text-lg font-normal max-w-[600px] text-[#86868b]">Endless entertainment. One subscription.</p>
          <div className="flex gap-5 mt-6 justify-center">
            <Link href="/entertainment" className="text-[#2997ff] text-[17px] hover:underline">Learn more ›</Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-12 animate-fade-in">One subscription. Endless possibilities.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`rounded-[20px] p-8 animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] ${s.dark ? "bg-[#1d1d1f] text-[#f5f5f7]" : "bg-[#f5f5f7] text-[#1d1d1f]"}`}
            >
              <div className="mb-4 w-12 h-12 relative">
                <Image src={s.src} alt={s.name} fill className="object-cover rounded-xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{s.name}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${s.dark ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`}>{s.desc}</p>
              <p className="text-sm font-semibold mb-4">{s.price}</p>
              <Link href="/entertainment" className="text-[#2997ff] text-sm hover:underline">Learn more ›</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/entertainment/apple-tv-plus.jpg">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[1024px] mx-auto my-20 px-5">
        <h2 className="text-[56px] max-md:text-[36px] font-semibold text-center mb-2 animate-fade-in">Apple One</h2>
        <p className="text-center text-[#6e6e73] mb-12 animate-fade-in-up stagger-1">Four great services. One low price.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bundles.map((b, i) => (
            <div
              key={b.name}
              className={`rounded-[18px] p-6 animate-fade-in-up stagger-${i + 2} transition-all duration-500 hover:scale-[1.02] ${b.premier ? "bg-[#1d1d1f] text-[#f5f5f7]" : "bg-[#f5f5f7] text-[#1d1d1f]"}`}
            >
              <h3 className="text-xl font-semibold mb-2">{b.name}</h3>
              <p className="text-2xl font-semibold mb-4">{b.price}</p>
              <ul className="text-sm space-y-2 mb-6">
                {b.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#2997ff]">✓</span>
                    <span className={b.premier ? "text-[#a1a1a6]" : "text-[#6e6e73]"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/entertainment" className="text-[#2997ff] text-sm font-semibold hover:underline">Try Apple One free ›</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20 text-center px-5">
        <div className="animate-fade-in">
          <h2 className="text-[40px] max-md:text-[28px] font-semibold mb-6">Start your free trial today.</h2>
          <Link href="/entertainment" className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#0071e3] transition-all">Try Apple TV+ free</Link>
        </div>
      </section>
    </>
  );
}
