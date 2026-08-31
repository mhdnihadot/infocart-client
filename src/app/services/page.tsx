import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "IT Solutions & POS Services in Qatar & UAE | InfoCart",
  description:
    "Comprehensive retail IT services by InfoCart: Point of Sale deployment, barcode & RFID automation, CCTV security installation, structured cabling, and 24/7 AMC hardware maintenance.",
  keywords: [
    "POS Installation Qatar",
    "Retail IT Services Doha",
    "Barcode Printer Maintenance",
    "CCTV Security Installation Qatar",
    "POS Hardware Support UAE",
    "Self-Checkout Kiosk Dephloyment",
    "IT Annual Maintenance Contract Qatar",
  ],
  alternates: {
    canonical: "https://infocart.ae/services",
  },
  openGraph: {
    title: "Services & IT Solutions - InfoCart Qatar & UAE",
    description:
      "Enterprise POS installation, barcode automation, networking, and 24/7 hardware support.",
    url: "https://infocart.ae/services",
    siteName: "InfoCart Technical Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfoCart IT & POS Services",
    description:
      "Full-stack retail IT deployment, structured cabling, and hardware maintenance in Qatar & GCC.",
  },
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: "pos-systems",
      title: "Point of Sale (POS) Deployment & Integration",
      tagline: "High-speed billing architecture engineered for zero queue bottlenecks.",
      description:
        "We design, supply, and configure complete POS ecosystems including dual-screen capacitive touch terminals, high-speed thermal receipt printers, magnetic stripe & EMV card readers, cash drawers, and customer-facing multimedia displays.",
      features: [
        "Dual-screen touchscreen POS terminals",
        "GCC VAT & multi-currency billing compliance",
        "Instant split billing & table/order management",
        "Offline-mode fallback with automatic cloud sync",
      ],
      variant: 1,
    },
    {
      id: "barcode-rfid",
      title: "Barcode, RFID & Asset Tracking",
      tagline: "Automate stock lifecycle, warehouse verification, and supply visibility.",
      description:
        "From heavy-duty industrial thermal transfer label printers to 1D/2D wireless QR code scanners and handheld rugged Android PDA mobile computers, we deliver end-to-end item identification systems.",
      features: [
        "Industrial direct thermal & thermal transfer printers",
        "Rugged wireless handheld PDA barcode scanners",
        "RFID gate readers & batch inventory taggers",
        "Automated expiry date and batch serial tracking",
      ],
      variant: 2,
    },
    {
      id: "mobile-pos",
      title: "Mobile POS & Handheld Terminals (mPOS)",
      tagline: "Empower staff to take orders and process payments anywhere on the floor.",
      description:
        "Eliminate customer waiting times with lightweight, drop-tested mobile POS tablets and handheld wireless devices equipped with built-in thermal printers and contactless card processing.",
      features: [
        "Table-side ordering & line-busting mobile terminals",
        "Drop-resistant ruggedized casing for retail & dining",
        "Digital receipt generation via SMS, WhatsApp & Email",
        "Real-time kitchen display and inventory synchronization",
      ],
      variant: 3,
    },
    {
      id: "kiosks-hmi",
      title: "Self-Service Ordering Kiosks & HMI Terminals",
      tagline: "Modern customer touchpoints that boost average basket size and speed.",
      description:
        "Sleek floor-standing, counter-top, and wall-mounted interactive kiosks tailored for quick-service restaurants (QSR), retail checkouts, and automated token queue management.",
      features: [
        "Ultra-responsive 21.5\" to 32\" multi-touch FHD displays",
        "Integrated thermal receipt printer & barcode scanner",
        "Bilingual Arabic and English customer interface",
        "Smart upsell prompts and loyalty program recognition",
      ],
      variant: 4,
    },
    {
      id: "cctv-security",
      title: "CCTV Surveillance, Security & Access Control",
      tagline: "MOI-compliant security systems protecting your merchandise and premises.",
      description:
        "High-definition IP surveillance cameras, AI video analytics, facial recognition biometric door access, and smart loss prevention systems tailored for retail stores, warehouses, and corporate facilities.",
      features: [
        "4K Ultra-HD night-vision IP dome & bullet cameras",
        "Smart NVR storage with remote multi-branch phone viewing",
        "Biometric fingerprint & face recognition attendance",
        "Qatar MOI & civil defense regulatory adherence",
      ],
      variant: 5,
    },
    {
      id: "infrastructure-amc",
      title: "IT Infrastructure, Server Cabling & 24/7 AMC",
      tagline: "Mission-critical network backbone and guaranteed uptime SLA support.",
      description:
        "Complete enterprise structured cabling, server rack assembly, managed PoE network switches, high-speed Wi-Fi 6 access points, and preventive Annual Maintenance Contracts (AMC).",
      features: [
        "Cat6/Cat6A structured data & VoIP voice cabling",
        "Dual-WAN failover internet and router configuration",
        "2-4 hour guaranteed emergency on-site technician dispatch",
        "Scheduled preventive hardware servicing & firmware updates",
      ],
      variant: 6,
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Site Survey & Requirement Audit",
      description:
        "Our solution architects assess your store floorplan, peak checkout volume, network capacity, and inventory complexity.",
    },
    {
      step: "02",
      title: "Custom Hardware & Tech Staging",
      description:
        "We curate genuine certified equipment, pre-configure databases, and thoroughly stress-test every component before dispatch.",
    },
    {
      step: "03",
      title: "On-Site Installation & Training",
      description:
        "Certified technicians handle cable dressing, mounting, POS setup, and provide hands-on cashier and manager training.",
    },
    {
      step: "04",
      title: "24/7 SLA Support & AMC Servicing",
      description:
        "Continuous remote monitoring, periodic preventative checkups, and fast spare-part replacement to guarantee zero downtime.",
    },
  ];

  // Helper for 3D frosted glass graphic banners
  const renderBannerGraphic = (variant: number) => {
    switch (variant) {
      case 1:
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 360 140" preserveAspectRatio="none" fill="none">
            <rect width="360" height="140" fill="url(#sgrad1)" />
            <path d="M20 140L60 20H85L45 140H20Z" fill="white" fillOpacity="0.35" />
            <path d="M80 140L120 20H145L105 140H80Z" fill="white" fillOpacity="0.4" />
            <path d="M140 140L180 20H205L165 140H140Z" fill="white" fillOpacity="0.45" />
            <path d="M200 140L240 20H265L225 140H200Z" fill="white" fillOpacity="0.4" />
            <path d="M260 140L300 20H325L285 140H260Z" fill="white" fillOpacity="0.35" />
            <defs>
              <linearGradient id="sgrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 360 140" preserveAspectRatio="none" fill="none">
            <rect width="360" height="140" fill="url(#sgrad2)" />
            <path d="M40 0L140 140H180L80 0H40Z" fill="white" fillOpacity="0.35" />
            <path d="M160 0L260 140H300L200 0H160Z" fill="white" fillOpacity="0.4" />
            <defs>
              <linearGradient id="sgrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0e7ff" />
                <stop offset="50%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 3:
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 360 140" preserveAspectRatio="none" fill="none">
            <rect width="360" height="140" fill="url(#sgrad3)" />
            <path d="M220 140L300 0H350L270 140H220Z" fill="white" fillOpacity="0.45" />
            <path d="M150 140L230 0H270L190 140H150Z" fill="white" fillOpacity="0.35" />
            <defs>
              <linearGradient id="sgrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="60%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 4:
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 360 140" preserveAspectRatio="none" fill="none">
            <rect width="360" height="140" fill="url(#sgrad4)" />
            <polygon points="30,140 80,30 140,30 90,140" fill="white" fillOpacity="0.3" />
            <polygon points="120,140 170,30 230,30 180,140" fill="white" fillOpacity="0.4" />
            <polygon points="210,140 260,30 320,30 270,140" fill="white" fillOpacity="0.3" />
            <defs>
              <linearGradient id="sgrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="60%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#c7d2fe" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 5:
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 360 140" preserveAspectRatio="none" fill="none">
            <rect width="360" height="140" fill="url(#sgrad5)" />
            <circle cx="180" cy="140" r="100" fill="white" fillOpacity="0.3" />
            <circle cx="280" cy="140" r="70" fill="white" fillOpacity="0.25" />
            <defs>
              <linearGradient id="sgrad5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="60%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 360 140" preserveAspectRatio="none" fill="none">
            <rect width="360" height="140" fill="url(#sgrad6)" />
            <polygon points="50,140 120,20 180,20 110,140" fill="white" fillOpacity="0.35" />
            <polygon points="170,140 240,20 300,20 230,140" fill="white" fillOpacity="0.4" />
            <defs>
              <linearGradient id="sgrad6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Retail IT & POS Solutions",
    provider: {
      "@type": "Organization",
      name: "InfoCart Technical Solutions",
      url: "https://infocart.ae",
    },
    areaServed: ["Qatar", "United Arab Emirates", "GCC"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "InfoCart Commercial Services",
      itemListElement: serviceList.map((s, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <DesktopHeader />
      <MobileHeader />

      <main className="flex-1 w-full pt-20 lg:pt-28">
        {/* Services Hero Section */}
        <section className="w-full bg-[#02040a] text-white py-20 lg:py-28 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6">
              <span className="text-[12px] font-medium text-blue-400 font-geist">
                Enterprise IT & POS Services
              </span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.12] font-geist mb-6">
                End-to-End Retail IT & Automation Services
              </h1>
              <p className="text-[16px] sm:text-[18px] text-slate-400 font-normal leading-relaxed font-geist mb-10">
                From turnkey point-of-sale hardware deployment and cloud inventory sync to structured cabling, CCTV surveillance, and 24/7 AMC support across Qatar & GCC.
              </p>

              {/* Quick Jump Buttons */}
              <div className="flex flex-wrap gap-2.5">
                {["POS Systems", "Barcode & RFID", "Mobile Checkout", "Self-Kiosks", "CCTV & Security", "Network & AMC"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-medium text-slate-300 font-geist"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid Showcase */}
        <section className="w-full bg-[#f8fafc] py-20 md:py-28 relative">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

            <div className="mb-14 text-left">
              <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2 font-geist">Our Capabilities</p>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-slate-900 font-geist tracking-tight">
                Complete Commercial Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceList.map((service, index) => (
                <div
                  key={index}
                  id={service.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* 3D Glass Geometric Banner */}
                    <div className="h-36 w-full relative overflow-hidden">
                      {renderBannerGraphic(service.variant)}
                    </div>

                    <div className="p-7">
                      <h3 className="text-[21px] font-semibold text-slate-900 font-geist tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[13px] font-medium text-blue-600 font-geist mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-[14px] text-slate-600 leading-relaxed font-geist mb-6">
                        {service.description}
                      </p>

                      {/* Capabilities Checklist */}
                      <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                        {service.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-geist">
                            <svg className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="px-7 pb-7 pt-2">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-blue-600 group-hover:text-blue-700 transition-all font-geist"
                    >
                      <span>Get a Custom Quote</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Service Workflow Section (4 Steps) */}
        <section className="w-full py-20 bg-white border-y border-slate-200">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2 font-geist">Our Process</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-geist tracking-tight">
                How We Deliver Seamless Deployments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-600 font-geist mb-4 block">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 font-geist">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 font-geist leading-relaxed mt-3">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart (Reference 1) */}
        <WhyChooseUs />

        {/* FAQ Section (Reference 2) */}
        <FAQ />

        {/* Call to Action */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
