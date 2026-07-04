import Link from "next/link";
import Image from "next/image";

function HeroLarge({
  title,
  subtitle,
  links,
  bgClass,
  imageSrc,
  imageAlt,
  children,
}: {
  title: string;
  subtitle: string;
  links: { label: string; href: string }[];
  bgClass?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden text-center pt-[88px] min-h-[620px] max-md:min-h-[480px] flex flex-col items-center justify-center px-5 pb-10 ${
        bgClass ?? "bg-black text-[#f5f5f7]"
      }`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          className="object-cover opacity-40"
          priority
        />
      )}
      <div className="relative z-10 animate-fade-in">
        <h2 className="text-[56px] max-md:text-[36px] font-semibold leading-[1.07143] tracking-[-0.005em] mb-1.5">
          {title}
        </h2>
        <p className="text-[28px] max-md:text-[20px] font-normal leading-[1.10722] tracking-[0.004em] mb-3.5">
          {subtitle}
        </p>
        <div className="flex gap-7.5 mt-2.5">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#2997ff] text-[17px] font-normal hover:underline transition-all duration-300 hover:brightness-150"
            >
              {link.label} &#x203A;
            </Link>
          ))}
        </div>
      </div>
      {children && <div className="mt-7 relative z-10 animate-fade-in-up stagger-3">{children}</div>}
    </section>
  );
}

function PromoCard({
  title,
  subtitle,
  links,
  dark,
  imageSrc,
  imageAlt,
  delay,
}: {
  title: string;
  subtitle: string;
  links: { label: string; href: string }[];
  dark?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  delay?: string;
}) {
  return (
    <div
      className={`relative rounded-[18px] overflow-hidden text-center pt-10 pb-6 px-5 min-h-[500px] max-md:min-h-[400px] flex flex-col items-center cursor-pointer group animate-fade-in-up ${delay} transition-all duration-500 hover:scale-[1.015] ${
        dark ? "bg-black text-[#f5f5f7]" : "bg-[#f5f5f7] text-[#1d1d1f]"
      }`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
      )}
      <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
        <h3 className="text-[28px] font-semibold leading-[1.14286] tracking-[0.004em]">{title}</h3>
        <p className="text-[17px] font-normal leading-[1.23536] tracking-[-0.016em] mt-1.5 max-w-[300px]">
          {subtitle}
        </p>
        <div className="flex gap-5 mt-3 relative z-10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#2997ff] text-sm hover:underline transition-all duration-300 hover:brightness-150"
            >
              {link.label} &#x203A;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroLarge
        title="MacBook Air"
        subtitle="Now supercharged by M5."
        links={[{ label: "Learn more", href: "/mac" }, { label: "Buy", href: "/mac" }]}
        imageSrc="/images/hero/macbook-air.jpg"
        imageAlt="MacBook Air"
      >
        <div className="flex gap-4 items-center justify-center text-[#86868b] text-sm">
          <span>M5 chip</span>
          <span className="w-px h-4 bg-[#555]" />
          <span>Up to 18h battery</span>
          <span className="w-px h-4 bg-[#555]" />
          <span>13.6″ or 15.3″</span>
        </div>
      </HeroLarge>

      <section className="relative w-full overflow-hidden text-center pt-[88px] min-h-[620px] max-md:min-h-[480px] flex flex-col items-center justify-center px-5 pb-10 bg-[#fbfbfd] text-[#1d1d1f]">
        <Image src="/images/hero/iphone-family.jpg" alt="iPhone lineup" fill className="object-contain max-md:object-cover" priority />
        <div className="relative z-10 animate-fade-in mt-auto mb-10">
          <h2 className="text-[56px] max-md:text-[36px] font-semibold leading-[1.07143] tracking-[-0.005em] mb-1.5">iPhone</h2>
          <p className="text-[28px] max-md:text-[20px] font-normal leading-[1.10722] tracking-[0.004em] mb-3.5">Meet the latest iPhone lineup.</p>
          <div className="flex gap-7.5 mt-2.5">
            <Link href="/iphone" className="text-[#2997ff] text-[17px] font-normal hover:underline">Learn more &#x203A;</Link>
            <Link href="/iphone" className="text-[#2997ff] text-[17px] font-normal hover:underline">Shop iPhone &#x203A;</Link>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden text-center pt-[88px] min-h-[620px] max-md:min-h-[480px] flex flex-col items-center justify-center px-5 pb-10 bg-[#f5f5f7] text-[#1d1d1f]">
        <Image src="/images/hero/ipad-air.jpg" alt="iPad Air" fill className="object-contain max-md:object-cover" />
        <div className="relative z-10 animate-fade-in mt-auto mb-10">
          <h2 className="text-[56px] max-md:text-[36px] font-semibold leading-[1.07143] tracking-[-0.005em] mb-1.5">iPad Air</h2>
          <p className="text-[28px] max-md:text-[20px] font-normal leading-[1.10722] tracking-[0.004em] mb-3.5">Now supercharged by M4.</p>
          <div className="flex gap-7.5 mt-2.5">
            <Link href="/ipad" className="text-[#2997ff] text-[17px] font-normal hover:underline">Learn more &#x203A;</Link>
            <Link href="/ipad" className="text-[#2997ff] text-[17px] font-normal hover:underline">Buy &#x203A;</Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-3 px-3">
        <video
          className="w-full rounded-[20px] max-h-[500px] object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/macbook-air.jpg"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 max-w-[1200px] mx-auto">
        <PromoCard title="MacBook Pro" subtitle="Now with M5, M5 Pro, and M5 Max." links={[{ label: "Learn more", href: "/mac" }, { label: "Buy", href: "/mac" }]} imageSrc="/images/promo/macbook-pro.jpg" imageAlt="MacBook Pro" dark delay="stagger-1" />

        <PromoCard title="AirPods Pro 3" subtitle="The world's best in-ear Active Noise Cancellation." links={[{ label: "Learn more", href: "/airpods" }, { label: "Buy", href: "/airpods" }]} imageSrc="/images/promo/airpods-pro.jpg" imageAlt="AirPods Pro" dark delay="stagger-2" />

        <PromoCard title="Apple Watch Series 11" subtitle="The ultimate way to watch your health." links={[{ label: "Learn more", href: "/watch" }, { label: "Buy", href: "/watch" }]} imageSrc="/images/promo/watch-series-11.jpg" imageAlt="Apple Watch Series 11" dark delay="stagger-3" />

        <PromoCard title="iPad Pro" subtitle="Advanced AI performance and game-changing capabilities." links={[{ label: "Learn more", href: "/ipad" }, { label: "Buy", href: "/ipad" }]} imageSrc="/images/promo/ipad-pro.jpg" imageAlt="iPad Pro" delay="stagger-4" />

        <PromoCard title="Apple Trade In" subtitle="Get up to $195–$695 in credit when you trade in iPhone 13 or higher." links={[{ label: "Get your estimate", href: "/" }]} imageSrc="/images/promo/iphone-tradein.jpg" imageAlt="iPhone Trade In" dark delay="stagger-5" />

        <PromoCard title="Apple Card" subtitle="Get up to 3% Daily Cash back with every purchase." links={[{ label: "Learn more", href: "/" }, { label: "Apply now", href: "/" }]} imageSrc="/images/promo/apple-card.jpg" imageAlt="Apple Card" delay="stagger-6" />
      </div>

      <section className="max-w-[1200px] mx-auto my-16 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold tracking-[-0.003em] mb-8 animate-fade-in">Endless entertainment.</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-5">
          {[
            { title: "Silo", desc: "Sci-Fi · New season", bg: "#1a1a2e" },
            { title: "Cape Fear", desc: "Thriller · Fear takes hold.", bg: "#2d1b00" },
            { title: "F1 on Apple TV", desc: "Every Grand Prix, live.", bg: "#003300" },
            { title: "Widow's Bay", desc: "Mystery · Welcome to the island.", bg: "#1a1a3a" },
            { title: "MLS on Apple TV", desc: "Watch every club, live.", bg: "#0a2a0a" },
          ].map((item) => (
            <div key={item.title} className="flex-[0_0_320px] snap-start rounded-[18px] overflow-hidden bg-[#f5f5f7] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-fade-in-up">
              <div className="h-[180px] flex items-center justify-center" style={{ background: item.bg }}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <polygon points="22,15 22,45 45,30" fill="#fff" opacity="0.8" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-[22px] font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[#6e6e73]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
