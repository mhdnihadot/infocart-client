export default function Products() {
  const products = [
    {
      title: "POS Systems",
      desc: "Advanced POS systems for retail, restaurants, and businesses.",
      // Monitor + receipt SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Retail Software",
      desc: "Powerful billing & inventory software for retail stores.",
      // Shopping cart SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "Restaurant POS",
      desc: "Complete POS solution for restaurants, cafes, and food businesses.",
      // Silverware / Restaurant SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      )
    },
    {
      title: "Barcode Solutions",
      desc: "Barcode printers, scanners & labels for efficient business operations.",
      // Barcode SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
        </svg>
      )
    },
    {
      title: "Accounting Software",
      desc: "Smart accounting software to manage your finances.",
      // Chart / Finance SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Access Control",
      desc: "Security solutions for access control & time attendance.",
      // Lock / Shield SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    },
    {
      title: "Clinic Management",
      desc: "Manage appointments, patients & clinic operations easily.",
      // Heart / Clinic SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      )
    },
    {
      title: "E-Commerce Solutions",
      desc: "E-commerce website & app development solutions.",
      // Bag / Store SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      )
    },
    {
      title: "Web & App Development",
      desc: "Custom website & mobile app development for your business.",
      // Code / App SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      title: "IT Services",
      desc: "End-to-end IT services & AMC support for your business.",
      // Server / Tech SVG
      icon: (
        <svg className="w-16 h-16 text-[#004EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="products" className="w-full py-20 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[13px] font-bold text-[#004EEB] uppercase tracking-widest mb-3">
            Our Products & Solutions
          </h3>
          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-black mb-5 tracking-tight">
            Explore Our Products & Solutions
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Complete range of IT solutions to simplify your business operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,78,235,0.15)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Image / Icon Placeholder */}
              <div className="w-full h-32 mb-6 flex items-center justify-center bg-[#F8FAFC] rounded-xl group-hover:bg-[#EEF2FC] transition-colors">
                {product.icon}
              </div>

              {/* Content */}
              <h4 className="text-[17px] font-extrabold text-black mb-3">
                {product.title}
              </h4>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                {product.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
