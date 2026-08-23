import { SectionSubtitle, SectionTitle } from "../ui/typography";

export default function Products() {
  const products = [
    {
      title: "Phone Holder Sakti",
      category: "Other",
      rating: "5.0",
      reviews: "1.2k",
      price: "$29.90",
      image: "/products/phone_holder_1787421451039.jpg"
    },
    {
      title: "Headsound",
      category: "Music",
      rating: "5.0",
      reviews: "1.2k",
      price: "$12.00",
      image: "/products/headsound_1787421464003.jpg"
    },
    {
      title: "Adudu Cleaner",
      category: "Other",
      rating: "4.4",
      reviews: "1k",
      price: "$29.90",
      image: "/products/adudu_cleaner_1787421476041.jpg"
    },
    {
      title: "CCTV Maling",
      category: "Home",
      rating: "4.8",
      reviews: "120",
      price: "$50.00",
      image: "/products/cctv_maling_1787421489449.jpg"
    },
    {
      title: "Stuffus Peker 32",
      category: "Other",
      rating: "5.0",
      reviews: "1.2k",
      price: "$9.90",
      image: "/products/stuffus_peker_1787421502300.jpg"
    },
    {
      title: "Stuffus R175",
      category: "Music",
      rating: "4.8",
      reviews: "2.4k",
      price: "$34.10",
      image: "/products/stuffus_r175_1787421523624.jpg"
    },
    {
      title: "Smart Speaker",
      category: "Audio",
      rating: "4.9",
      reviews: "800",
      price: "$45.00",
      image: "/products/headsound_1787421464003.jpg"
    },
    {
      title: "Desk Organizer",
      category: "Office",
      rating: "4.6",
      reviews: "450",
      price: "$15.50",
      image: "/products/phone_holder_1787421451039.jpg"
    },
    {
      title: "Mini Camera",
      category: "Home",
      rating: "4.7",
      reviews: "920",
      price: "$38.00",
      image: "/products/cctv_maling_1787421489449.jpg"
    },
    {
      title: "Earbuds Pro",
      category: "Music",
      rating: "4.9",
      reviews: "3.1k",
      price: "$55.00",
      image: "/products/stuffus_r175_1787421523624.jpg"
    }
  ];

  return (
    <section id="products" className="w-full pb-10 md:pb-20 bg-transparent">

      {/* ══════════════════════════════════════
          MOBILE ONLY  (hidden on md+)
      ══════════════════════════════════════ */}
      <div className="block md:hidden pt-2 pb-6">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 mb-5">
          <h2 className="text-[18px] font-bold text-slate-900 font-geist">Best Sellers</h2>
          <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#3b82f6] font-geist hover:underline">
            View All
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="relative w-full">
          <div
            className="flex overflow-x-auto gap-3 pb-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Left spacer */}
            <div style={{ minWidth: "16px", flexShrink: 0 }} />
            {products.map((product, index) => (
              <div key={index} className="flex flex-col flex-shrink-0 snap-start cursor-pointer group w-[130px]">
                {/* Image Box */}
                <div className="w-[130px] h-[130px] bg-[#F5F5F7] rounded-2xl mb-2.5 flex items-center justify-center overflow-hidden p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Info */}
                <span className="font-semibold font-geist text-slate-900 text-[11px] leading-tight line-clamp-1 mb-0.5 px-0.5 text-center">
                  {product.title}
                </span>
                <span className="text-[#3b82f6] font-geist text-[11px] pt-1 font-medium text-center px-0.5">
                  Shop Now
                </span>
              </div>
            ))}
            {/* Right spacer */}
            <div style={{ minWidth: "16px", flexShrink: 0 }} />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP ONLY  (hidden on mobile)
      ══════════════════════════════════════ */}
      <div className="hidden md:block pt-0">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Desktop Section Header */}
          <div className="flex justify-between items-end mb-6">
            <div className="flex flex-col gap-1.5">
              <SectionTitle>Best Sellers</SectionTitle>
              <SectionSubtitle>
                Discover our most popular and highly rated IT products.
              </SectionSubtitle>
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors group mb-1">
              <span className="text-gray-600 font-geist text-[13px] font-medium text-center">View All</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M3 12h18M14 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Desktop Products Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col bg-transparent">
                {/* Image Box */}
                <div className="relative w-full aspect-square bg-[#F5F5F7] rounded-3xl mb-4 overflow-hidden group cursor-pointer flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain mix-blend-multiply rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Product Info */}
                <div className="flex flex-col items-center mt-1">
                  <h3 className="font-semibold font-geist text-black text-[13px] tracking-wider capitalize mb-1 text-center group-hover:text-slate-700 transition-colors">
                    {product.title}
                  </h3>
                  <span className="text-[#3b82f6] font-geist text-[12px] font-medium text-center group-hover:text-black transition-colors">
                    Shop Now
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
