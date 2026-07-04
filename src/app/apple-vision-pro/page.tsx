import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Vision Pro - Apple",
};

export default function AppleVisionProPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <ProductsSection />
      <VideoSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#1a1a2e] to-black px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/vision/vision-pro-hero.jpg"
          alt="Apple Vision Pro"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#1a1a2e] blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        <div className="relative w-64 h-32 mb-8 drop-shadow-2xl animate-float">
          <Image
            src="/images/vision/vision-pro-hero.jpg"
            alt="Apple Vision Pro"
            fill
            className="object-contain rounded-2xl"
          />
        </div>
        <h1 className="text-7xl font-bold tracking-tight animate-fade-in-up stagger-1">
          Apple Vision Pro
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl animate-fade-in-up stagger-2">
          Welcome to the era of spatial computing.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-in-up stagger-3">
          <Link
            href="/apple-vision-pro"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-500 hover:scale-[1.02] hover:bg-gray-200"
          >
            Learn more
          </Link>
          <Link
            href="/apple-vision-pro"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
          >
            Buy
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      name: "Apple Vision Pro",
      tagline: "Hero product",
      price: "$3,499",
      specs: [
        { label: "Storage", value: "256GB" },
        { label: "Chips", value: "M2 + R1" },
        { label: "Display", value: "micro-OLED" },
      ],
      img: "/images/vision/vision-pro-hero.jpg",
    },
    {
      name: "Travel Case",
      tagline: "Protective case",
      price: "$199",
      specs: [
        { label: "Material", value: "Fabric" },
        { label: "Compatibility", value: "Apple Vision Pro" },
        { label: "Weight", value: "1.2 lbs" },
      ],
      img: "/images/vision/design.jpg",
    },
    {
      name: "Optical Inserts",
      tagline: "Zeiss",
      price: "$149",
      specs: [
        { label: "Type", value: "Prescription" },
        { label: "Brand", value: "Zeiss" },
        { label: "Compatibility", value: "Apple Vision Pro" },
      ],
      img: "/images/vision/vision-pro-endframe.jpg",
    },
  ];

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up stagger-1">
        Explore the lineup.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.name}
            className={`rounded-3xl bg-gray-900/60 p-8 border border-gray-800 transition-all duration-500 hover:scale-[1.02] hover:border-gray-600 animate-fade-in-up stagger-${index + 1}`}
          >
            <div className="mb-6 rounded-2xl overflow-hidden">
              <Image src={product.img} alt={product.name} width={300} height={180} className="w-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{product.tagline}</p>
            <p className="text-3xl font-bold mt-6">{product.price}</p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs border-t border-gray-800 pt-4">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <p className="text-gray-500">{spec.label}</p>
                  <p className="font-semibold text-gray-200 mt-1">{spec.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/apple-vision-pro"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black text-center transition-all duration-500 hover:scale-[1.02] hover:bg-gray-200"
              >
                Learn more
              </Link>
              <Link
                href="/apple-vision-pro"
                className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white text-center transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
              >
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="max-w-[1200px] mx-auto my-10 px-3">
      <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/vision/vision-pro-hero.jpg">
        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Spatial Computing",
      description: "Blend digital content with your physical space using advanced sensors and cameras that map your environment in real time.",
      img: "/images/vision/vision-pro-hero.jpg",
    },
    {
      title: "visionOS",
      description: "An infinite canvas for apps that scales beyond the boundaries of a traditional display, with a three-dimensional interface.",
      img: "/images/vision/design.jpg",
    },
    {
      title: "M2 & R1 Chips",
      description: "Dual-chip performance with M2 for compute and R1 dedicated to real-time sensor processing, delivering a seamless experience.",
      img: "/images/vision/vision-pro-endframe.jpg",
    },
    {
      title: "Design",
      description: "Precision-crafted aluminum and glass construction with a laminated display and custom aluminum alloy frame.",
      img: "/images/vision/vision-pro-hero.jpg",
    },
  ];

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up stagger-1">
        Revolutionary technology.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`rounded-2xl bg-gray-900/50 p-8 border border-gray-800 transition-all duration-500 hover:scale-[1.02] hover:border-gray-600 animate-fade-in-up stagger-${index + 1}`}
          >
            <div className="mb-5 rounded-xl overflow-hidden">
              <Image src={feature.img} alt={feature.title} width={200} height={120} className="w-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative px-6 py-32 text-center bg-gradient-to-b from-black via-[#0d0d1a] to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1a1a2e] blur-3xl" />
      </div>
      <div className="relative z-10 animate-fade-in">
        <h2 className="text-6xl font-bold tracking-tight animate-fade-in-up stagger-1">
          Experience the new era.
        </h2>
        <div className="mt-10 animate-fade-in-up stagger-2">
          <Link
            href="/apple-vision-pro"
            className="inline-block rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition-all duration-500 hover:scale-[1.02] hover:bg-gray-200"
          >
            Learn more about Apple Vision Pro
          </Link>
        </div>
      </div>
    </section>
  );
}
