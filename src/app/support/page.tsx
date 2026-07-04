import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Support - Apple" };

const supportOptions = [
  {
    title: "Apple Support App",
    desc: "Get personalized solutions for all your Apple products and services.",
    img: "/images/support/hero.jpg",
  },
  {
    title: "Get Help with Sign In",
    desc: "Apple Account, iCloud, App Store, iTunes, and more.",
    img: "/images/iphone/ios.jpg",
  },
  {
    title: "Repair & Service",
    desc: "Schedule a repair or get a quote for your device.",
    img: "/images/iphone/camera.jpg",
  },
  {
    title: "Coverage & Warranty",
    desc: "Check your coverage status and learn about AppleCare+.",
    img: "/images/iphone/chip.jpg",
  },
  {
    title: "Manuals & Specs",
    desc: "User guides, technical specifications, and downloads.",
    img: "/images/mac/mba-chip.jpg",
  },
  {
    title: "Support Communities",
    desc: "Get answers from Apple experts and fellow users.",
    img: "/images/iphone/ios.jpg",
  },
];

const popularTopics = [
  {
    title: "iPhone",
    desc: "Get help with iPhone",
    img: "/images/iphone/17pro.png",
  },
  {
    title: "Mac",
    desc: "Get help with Mac",
    img: "/images/mac/mba-design.png",
  },
  {
    title: "iPad",
    desc: "Get help with iPad",
    img: "/images/ipad/ipad-pro-hero.jpg",
  },
  {
    title: "Apple ID",
    desc: "Manage your account",
    img: "/images/iphone/17.png",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="relative min-h-[560px] max-md:min-h-[440px] flex flex-col items-center justify-center text-center pt-[120px] pb-[80px] px-5 bg-black text-[#f5f5f7] overflow-hidden">
        <Image src="/images/support/hero.jpg" alt="Support" fill className="object-cover opacity-30" priority />
        <div className="relative z-10 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animate-float">
              <circle cx="40" cy="32" r="18" stroke="#2997ff" strokeWidth="2.5" fill="none" />
              <path d="M54 44l12 12" stroke="#2997ff" strokeWidth="2.5" strokeLinecap="round" />
              <text x="40" y="37" textAnchor="middle" fontSize="18" fill="#2997ff" fontWeight="bold" fontFamily="SF Pro Display, sans-serif">?</text>
            </svg>
          </div>
          <h1 className="text-7xl max-md:text-[48px] font-semibold tracking-[-0.005em] mb-4">Support</h1>
          <p className="text-xl max-md:text-lg font-normal max-w-[620px] text-[#86868b] mb-8">We&apos;re here to help. Get support for all your Apple devices.</p>
          <Link
            href="/support"
            className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#0071e3] transition-all"
          >
            Get Support
          </Link>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto my-20 px-5">
        <h2 className="text-[40px] max-md:text-[28px] font-semibold text-center mb-2 animate-fade-in">How can we help?</h2>
        <p className="text-center text-[#6e6e73] mb-12 animate-fade-in-up stagger-1">Choose a support option below.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {supportOptions.map((opt, i) => (
            <div
              key={opt.title}
              className={`bg-[#f5f5f7] rounded-[20px] p-8 animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="mb-5">
                <Image src={opt.img} alt={opt.title} width={40} height={40} className="rounded-lg object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{opt.title}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{opt.desc}</p>
              <Link href="/support" className="inline-block mt-4 text-[#2997ff] text-sm font-semibold hover:underline">
                Learn more ›
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto my-10 px-3">
        <video className="w-full rounded-[20px] max-h-[500px] object-cover" autoPlay muted loop playsInline poster="/images/support/hero.jpg">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="max-w-[900px] mx-auto my-20 px-5">
        <h2 className="text-[32px] max-md:text-[24px] font-semibold text-center mb-10 animate-fade-in">Popular support topics.</h2>
        <div className="flex flex-col gap-4">
          {popularTopics.map((topic, i) => (
            <Link
              key={topic.title}
              href="/support"
              className={`flex items-center gap-4 bg-white border border-[#d2d2d7] rounded-[16px] p-5 animate-fade-in-up stagger-${i + 1} transition-all duration-500 hover:scale-[1.01] hover:shadow-md hover:border-[#2997ff]`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center overflow-hidden">
                <Image src={topic.img} alt={topic.title} width={32} height={32} className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold">{topic.title}</h3>
                <p className="text-sm text-[#6e6e73]">{topic.desc}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-[#86868b]">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1d1d1f] text-[#f5f5f7] py-20 text-center px-5">
        <div className="animate-fade-in">
          <h2 className="text-[36px] max-md:text-[26px] font-semibold mb-4">Still need help?</h2>
          <p className="text-[#86868b] max-w-[480px] mx-auto mb-8">
            Our Apple Support experts are ready to help you by phone, chat, or email.
          </p>
          <Link
            href="/support"
            className="inline-block bg-[#2997ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#0071e3] transition-all"
          >
            Contact Apple Support
          </Link>
          <p className="text-[#6e6e73] mt-6 text-sm">Or call 1-800-MY-APPLE</p>
        </div>
      </section>
    </>
  );
}
