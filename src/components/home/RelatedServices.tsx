import React from "react";
import Link from "next/link";

export default function RelatedServices() {
  const services = [
    {
      title: "UI/UX & POS Systems",
      description:
        "Embracing intuitive POS UI/UX in crafting seamless billing experiences, keeping up with high checkout volume and maximum operational efficiency.",
      bannerGradient: "from-[#818cf8] via-[#a78bfa] to-[#c084fc]",
      variant: 1,
    },
    {
      title: "Mobile Experience & Handhelds",
      description:
        "Unleashing the potential of mobile POS and rugged wireless PDA scanners to enhance floor operations and inventory audits with ease.",
      bannerGradient: "from-[#60a5fa] via-[#93c5fd] to-[#c7d2fe]",
      variant: 2,
    },
    {
      title: "Commerce & Inventory Experience",
      description:
        "Crafting touchpoints and warehouse interactions that leave a positive management experience and consistently enhance sales and supply control.",
      bannerGradient: "from-[#38bdf8] via-[#7dd3fc] to-[#bae6fd]",
      variant: 3,
    },
    {
      title: "Human Machine Interface (HMI)",
      description:
        "Designs that are ergonomically sound for self-checkout kiosks and touch terminals that help prevent errors while reducing operator workload.",
      bannerGradient: "from-[#6366f1] via-[#818cf8] to-[#93c5fd]",
      variant: 4,
    },
    {
      title: "Barcode & RFID Solutions",
      description:
        "Convey complex tracking, itemization, and asset management in an automated, highly reliable, and easily understandable manner.",
      bannerGradient: "from-[#a5b4fc] via-[#c4b5fd] to-[#ddd6fe]",
      variant: 5,
    },
    {
      title: "IT Infrastructure & Security",
      description:
        "Enterprise-grade networking, structured cabling, CCTV surveillance, and certified hardware maintenance for uninterrupted retail continuity.",
      bannerGradient: "from-[#38bdf8] via-[#818cf8] to-[#c084fc]",
      variant: 6,
    },
  ];

  // Helper to render abstract 3D glass slats / geometric banners matching the reference image
  const renderBannerGraphic = (variant: number) => {
    switch (variant) {
      case 1:
        return (
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 360 140"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="360" height="140" fill="url(#grad1)" />
            {/* 3D Glass Slats */}
            <path d="M20 140L60 20H85L45 140H20Z" fill="white" fillOpacity="0.35" />
            <path d="M80 140L120 20H145L105 140H80Z" fill="white" fillOpacity="0.4" />
            <path d="M140 140L180 20H205L165 140H140Z" fill="white" fillOpacity="0.45" />
            <path d="M200 140L240 20H265L225 140H200Z" fill="white" fillOpacity="0.4" />
            <path d="M260 140L300 20H325L285 140H260Z" fill="white" fillOpacity="0.35" />
            {/* Horizon light bar */}
            <rect y="132" width="360" height="8" fill="white" fillOpacity="0.25" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 360 140"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="360" height="140" fill="url(#grad2)" />
            {/* Dynamic Glass Shards */}
            <path d="M40 0L140 140H180L80 0H40Z" fill="white" fillOpacity="0.35" />
            <path d="M160 0L260 140H300L200 0H160Z" fill="white" fillOpacity="0.4" />
            <path d="M0 60L100 140H140L40 60H0Z" fill="white" fillOpacity="0.25" />
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0e7ff" />
                <stop offset="50%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 3:
        return (
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 360 140"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="360" height="140" fill="url(#grad3)" />
            {/* Glass panels */}
            <path d="M220 140L300 0H350L270 140H220Z" fill="white" fillOpacity="0.45" />
            <path d="M150 140L230 0H270L190 140H150Z" fill="white" fillOpacity="0.35" />
            <path d="M80 140L160 0H200L120 140H80Z" fill="white" fillOpacity="0.25" />
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="60%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 4:
        return (
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 360 140"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="360" height="140" fill="url(#grad4)" />
            {/* Geometric prisms */}
            <polygon points="30,140 80,30 140,30 90,140" fill="white" fillOpacity="0.3" />
            <polygon points="120,140 170,30 230,30 180,140" fill="white" fillOpacity="0.4" />
            <polygon points="210,140 260,30 320,30 270,140" fill="white" fillOpacity="0.3" />
            <defs>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="60%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#c7d2fe" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 5:
        return (
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 360 140"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="360" height="140" fill="url(#grad5)" />
            {/* Translucent Circles & Wave */}
            <circle cx="180" cy="140" r="100" fill="white" fillOpacity="0.3" />
            <circle cx="280" cy="140" r="70" fill="white" fillOpacity="0.25" />
            <circle cx="80" cy="140" r="80" fill="white" fillOpacity="0.2" />
            <defs>
              <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="60%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return (
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 360 140"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="360" height="140" fill="url(#grad6)" />
            <polygon points="50,140 120,20 180,20 110,140" fill="white" fillOpacity="0.35" />
            <polygon points="170,140 240,20 300,20 230,140" fill="white" fillOpacity="0.4" />
            <defs>
              <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <section
      id="services"
      className="w-full bg-[#f8fafc] py-20 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium text-slate-900 tracking-tight font-geist">
            Related Services
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Glass Banner */}
                <div className="h-32 sm:h-36 w-full relative overflow-hidden">
                  {renderBannerGraphic(service.variant)}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-slate-900 font-geist tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-slate-600 font-normal leading-relaxed font-geist">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-blue-600 group-hover:text-blue-700 transition-all font-geist"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
