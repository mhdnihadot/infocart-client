import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import RelatedServices from "@/components/home/RelatedServices";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | InfoCart IT Solutions Qatar & GCC - Leading POS & Retail Tech",
  description:
    "Discover InfoCart Technical Solutions. Over 20 years providing enterprise POS hardware, barcode automation, RFID tracking, CCTV security systems, and retail IT infrastructure across Qatar & GCC.",
  keywords: [
    "POS Systems Qatar",
    "Point of Sale Doha",
    "Retail IT Solutions UAE",
    "Barcode Scanners Qatar",
    "Thermal Receipt Printers",
    "Restaurant Billing Software",
    "CCTV Security Solutions",
    "RFID Inventory Tracking",
    "InfoCart Technical Solutions",
  ],
  alternates: {
    canonical: "https://infocart.ae/about",
  },
  openGraph: {
    title: "About Us - InfoCart Technical Solutions",
    description:
      "Enterprise POS systems, barcode solutions, and retail automation hardware for businesses across Qatar & UAE.",
    url: "https://infocart.ae/about",
    siteName: "InfoCart Technical Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About InfoCart IT Solutions",
    description:
      "Qatar & GCC's leading POS hardware and retail IT solutions provider.",
  },
};

export default function AboutPage() {
  const stats = [
    { value: "20+", label: "Years of Industry Experience" },
    { value: "5,000+", label: "Retail & F&B Deployments" },
    { value: "99.9%", label: "Hardware Reliability Rate" },
    { value: "24/7", label: "Dedicated On-Site Support" },
  ];

  const values = [
    {
      title: "Reliability & Zero Downtime",
      description:
        "We specify only commercial-grade, field-tested hardware designed to withstand peak retail rush hours without failures.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Smart Automation & Speed",
      description:
        "Integrating barcode scanners, self-checkout kiosks, and fast thermal printers to keep queues moving and customer satisfaction high.",
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Certified Qatar & GCC Support",
      description:
        "Our local technical team provides rapid on-site setup, preventive maintenance, and 2-4 hour emergency response.",
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Seamless Ecosystem Integration",
      description:
        "Open compatibility with leading accounting software, ERP backends, inventory databases, and payment gateway terminals.",
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
  ];

  const industries = [
    { title: "Supermarkets & Grocery", desc: "High-speed barcode scales, bi-optic scanners & dual-screen POS." },
    { title: "Restaurants & Cafes", desc: "Kitchen display systems (KDS), waiter tablets & cloud billing sync." },
    { title: "Warehousing & Logistics", desc: "Industrial RFID, rugged mobile PDA terminals & pallet labeling." },
    { title: "Fashion & Boutiques", desc: "Smart inventory matrix, barcode tagging & VIP loyalty integration." },
    { title: "Pharmacies & Healthcare", desc: "Batch & expiry date tracking, 2D GS1 barcode readers & prescription billing." },
    { title: "Hospitality & Kiosks", desc: "Interactive self-service check-in, queue management & digital signage." },
  ];

  // Schema.org JSON-LD structured data for Google Search snippet indexing
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InfoCart Technical Solutions",
    url: "https://infocart.ae",
    logo: "https://infocart.ae/logo.svg",
    description:
      "Leading provider of POS hardware, barcode automation, and IT solutions in Qatar and UAE.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "Dubai",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-4-341-1140",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost for the web design & POS services of your company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our pricing depends on your specific business requirements, number of terminals, software integrations, and hardware selections. We offer tailored, cost-effective packages for startups and multi-branch enterprises.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide on-site installation and staff training in Qatar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our certified field engineers handle full on-site installation, structured cabling, network configuration, and comprehensive staff training.",
        },
      },
      {
        "@type": "Question",
        name: "What warranty and after-sales support do you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All hardware equipment comes with a standard manufacturer warranty of 1 to 3 years, along with annual maintenance contracts (AMC) and emergency on-site support.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <DesktopHeader />
      <MobileHeader />

      <main className="flex-1 w-full pt-20 lg:pt-28">
        {/* About Hero Section */}
        <section className="w-full bg-[#02040a] text-white py-20 lg:py-28 relative overflow-hidden">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            {/* Breadcrumb / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6">
              <span className="text-[12px] font-medium text-blue-400 font-geist">
                About InfoCart
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.1] font-geist mb-6">
                  Empowering Smarter Businesses with Next-Gen IT & POS Solutions
                </h1>
                <p className="text-[16px] sm:text-[18px] text-slate-400 font-normal leading-relaxed max-w-2xl font-geist">
                  From single checkout counters to multi-chain retail enterprises across Qatar and the GCC, InfoCart delivers high-performance point-of-sale hardware, custom software integration, and mission-critical support.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <h3 className="text-white font-semibold text-lg mb-2 font-geist">Our Mission</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-geist">
                    To eliminate checkout friction, automate inventory lifecycles, and empower retail leaders with resilient, high-speed technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-geist mb-2 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-geist">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-20 bg-[#fbfcfd] border-b border-slate-200">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2 font-geist">Our Principles</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-geist tracking-tight">
                Built on Trust, Performance & Innovation
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 font-geist">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-geist">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: What Sets Us Apart (Why Choose Us - Reference 1) */}
        <WhyChooseUs />

        {/* Section 2: Related Services (Reference 3) */}
        <RelatedServices />

        {/* Industries We Serve Section */}
        <section className="w-full py-20 bg-white border-y border-slate-200">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2 font-geist">Tailored Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-geist tracking-tight mb-4">
                Industries We Empower
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-geist">
                Tailored point-of-sale and automation hardware configured for your unique business workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 font-geist flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    {ind.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-geist leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: FAQ (Reference 2) */}
        <FAQ />

        {/* Section 4: CTA */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
