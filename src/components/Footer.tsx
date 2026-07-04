import Link from 'next/link';

const linkGroups = [
  {
    title: 'Shop and Learn',
    links: [
      { label: 'Store', href: '/' },
      { label: 'Mac', href: '/mac' },
      { label: 'iPad', href: '/ipad' },
      { label: 'iPhone', href: '/iphone' },
      { label: 'Watch', href: '/watch' },
      { label: 'Vision', href: '/apple-vision-pro' },
      { label: 'AirPods', href: '/airpods' },
      { label: 'TV & Home', href: '/tv-home' },
      { label: 'AirTag', href: '/' },
      { label: 'Accessories', href: '/accessories' },
      { label: 'Gift Cards', href: '/' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Manage Your Apple Account', href: '/' },
      { label: 'Apple Store Account', href: '/' },
      { label: 'iCloud.com', href: '/' },
    ],
  },
  {
    title: 'Entertainment',
    links: [
      { label: 'Apple One', href: '/' },
      { label: 'Apple TV', href: '/' },
      { label: 'Apple Music', href: '/' },
      { label: 'Apple Arcade', href: '/' },
      { label: 'Apple Fitness+', href: '/' },
      { label: 'Apple News+', href: '/' },
      { label: 'Apple Podcasts', href: '/' },
      { label: 'Apple Books', href: '/' },
      { label: 'App Store', href: '/' },
    ],
  },
  {
    title: 'Apple Store',
    links: [
      { label: 'Find a Store', href: '/' },
      { label: 'Genius Bar', href: '/' },
      { label: 'Today at Apple', href: '/' },
      { label: 'Apple Camp', href: '/' },
      { label: 'Apple Store App', href: '/' },
      { label: 'Certified Refurbished', href: '/' },
      { label: 'Apple Trade In', href: '/' },
      { label: 'Financing', href: '/' },
      { label: 'Carrier Deals at Apple', href: '/' },
      { label: 'Order Status', href: '/' },
      { label: 'Shopping Help', href: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-xs leading-[1.33337]">
      <div className="max-w-[1024px] mx-auto px-5 py-5">
        <div className="pb-2.5 border-b border-[#d2d2d7] mb-5 space-y-2">
          <p>
            Trade-in values will vary based on the condition, year, and configuration of your eligible
            trade-in device. Not all devices are eligible for credit. You must be at least the age of
            majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may
            be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual
            value awarded is based on receipt of a qualifying device matching the description provided
            when estimate was made. Sales tax may be assessed on full value of a new device purchase.
            In-store trade-in requires presentation of a valid photo ID (local law may require saving
            this information). Offer may not be available in all stores and may vary between in-store
            and online trade-in. Some stores may have additional requirements. Apple or its trade-in
            partners reserve the right to refuse, cancel, or limit quantity of any trade-in transaction
            for any reason. More details are available from Apple&apos;s trade-in partner for trade-in
            and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
          <p>A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.</p>
          <p>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-[#1d1d1f] mb-2.5">{group.title}</h4>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[#515154] hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#d2d2d7] py-3.5 flex flex-wrap items-center justify-between gap-2.5">
          <span>Copyright &copy; 2026 Apple Inc. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/" className="text-[#515154] hover:underline">Privacy Policy</Link>
            <Link href="/" className="text-[#515154] hover:underline">Terms of Use</Link>
            <Link href="/" className="text-[#515154] hover:underline">Sales and Refunds</Link>
            <Link href="/" className="text-[#515154] hover:underline">Legal</Link>
            <Link href="/" className="text-[#515154] hover:underline">Site Map</Link>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-4 pb-1 text-center text-[10px] flex flex-wrap items-center justify-center gap-2">
          <span>Made by Rudy</span>
          <span className="text-[#ff3b30]">&#x2764;</span>
          <a
            href="https://github.com/rudra202/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#515154] hover:text-[#1d1d1f] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>rudra202</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
