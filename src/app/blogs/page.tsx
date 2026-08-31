"use client";

import React, { useState } from "react";
import Link from "next/link";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All posts");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const categories = [
    "All posts",
    "POS Technology",
    "Retail & Supermarkets",
    "Barcode & RFID",
    "Restaurant Tech",
    "Security & CCTV",
  ];

  const featuredPost = {
    badge: "Featured",
    title: "How Next-Gen POS & AI Inventory Automation are Reshaping Retail Across Qatar & UAE",
    description:
      "Explore how leading supermarkets, luxury fashion boutiques, and multi-chain restaurants are cutting cashier bottlenecks by 65%, preventing stockouts, and scaling effortlessly with cloud-connected hardware.",
    author: {
      name: "Ahmed Al-Mansoor",
      role: "Lead Systems Architect",
      date: "28 Feb 2026",
    },
    category: "POS Technology",
    readTime: "6 min read",
  };

  const allPosts = [
    {
      id: 1,
      title: "Migrating to Cloud POS: A 5-Step Blueprint for Multi-Branch Retailers",
      excerpt:
        "Step-by-step guidance on transitioning legacy cash registers to modern cloud POS systems without store downtime.",
      category: "POS Technology",
      author: "Jonathan Wills",
      date: "19 Jan 2026",
      readTime: "4 min read",
      gradient: "from-blue-600 to-indigo-800",
      themeColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Building Your Barcode & RFID Stack: Thermal Printing vs Laser Scanners",
      excerpt:
        "Choosing between industrial direct thermal printers, RFID tags, and handheld 2D QR scanners for accurate warehouse tracking.",
      category: "Barcode & RFID",
      author: "Lana Steiner",
      date: "18 Jan 2026",
      gradient: "from-violet-600 to-purple-900",
      themeColor: "text-violet-600",
    },
    {
      id: 3,
      title: "Lessons in Retail Speed: Reducing Checkout Latency to Under 8 Seconds",
      excerpt:
        "Practical cashier ergonomics, bi-optic scanner scales, and dual-screen customer display best practices.",
      category: "Retail & Supermarkets",
      author: "Eve Wilkins",
      date: "18 Jan 2026",
      gradient: "from-sky-600 to-blue-900",
      themeColor: "text-sky-600",
    },
    {
      id: 4,
      title: "Kitchen Display Systems (KDS) vs Paper Receipts: Restaurant ROI Analysis",
      excerpt:
        "Why fast-casual dining and cloud kitchens in GCC are ditching noisy impact printers for digital KDS touchscreens.",
      category: "Restaurant Tech",
      author: "Eve Wilkins",
      date: "18 Jan 2026",
      gradient: "from-slate-700 to-slate-900",
      themeColor: "text-slate-700",
    },
    {
      id: 5,
      title: "What is an IT Annual Maintenance Contract (AMC) and Why is It Critical?",
      excerpt:
        "Understanding on-site response SLAs, preventative hardware servicing, and spare-parts buffer guarantees.",
      category: "POS Technology",
      author: "Lana Steiner",
      date: "18 Jan 2026",
      gradient: "from-indigo-600 to-cyan-900",
      themeColor: "text-indigo-600",
    },
    {
      id: 6,
      title: "AI-Powered CCTV Surveillance: Loss Prevention & Heatmaps for Retail Stores",
      excerpt:
        "How intelligent IP cameras and MOI-compliant CCTV analytics help store managers prevent shrinkage and understand customer footfall.",
      category: "Security & CCTV",
      author: "Jonathan Wills",
      date: "19 Jan 2026",
      gradient: "from-amber-600 to-orange-900",
      themeColor: "text-amber-600",
    },
    {
      id: 7,
      title: "Mobile POS (mPOS) Handheld Terminals: Boosting Line-Busting Efficiency",
      excerpt:
        "Unleash staff mobility with lightweight Android barcode terminals equipped with integrated wireless card payment.",
      category: "POS Technology",
      author: "Eve Wilkins",
      date: "15 Jan 2026",
      gradient: "from-teal-600 to-emerald-900",
      themeColor: "text-teal-600",
    },
    {
      id: 8,
      title: "Top 7 Barcode Scanner Errors and How to Prevent Hardware Failures",
      excerpt:
        "Common optical lens smudges, baud rate mismatches, and USB cable strain issues solved by certified field engineers.",
      category: "Barcode & RFID",
      author: "Lana Steiner",
      date: "12 Jan 2026",
      gradient: "from-rose-600 to-red-950",
      themeColor: "text-rose-600",
    },
    {
      id: 9,
      title: "Self-Service Ordering Kiosks: Increasing Average Basket Size by 28%",
      excerpt:
        "Case study on how interactive 27-inch touchscreen kiosks optimize upsells and multilingual Arabic/English ordering.",
      category: "Restaurant Tech",
      author: "Jonathan Wills",
      date: "10 Jan 2026",
      gradient: "from-blue-700 to-purple-900",
      themeColor: "text-blue-700",
    },
  ];

  const filteredPosts =
    activeCategory === "All posts"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    }, 400);
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "InfoCart Tech Blogs & Retail Insights",
    url: "https://infocart.ae/blogs",
    description: "Insights on POS hardware, barcode automation, and retail tech in Qatar & UAE.",
    publisher: {
      "@type": "Organization",
      name: "InfoCart Technical Solutions",
      url: "https://infocart.ae",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <DesktopHeader />
      <MobileHeader />

      <main className="flex-1 w-full pt-20 lg:pt-28 pb-20">
        
        {/* Top Header & Categories */}
        <section className="w-full pt-10 pb-8 px-6 md:px-12 max-w-[1280px] mx-auto">
          <div className="flex flex-col items-start mb-8">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 font-geist">
              InfoCart Insights
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-geist mb-3">
              Retail Technology & POS Blogs
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-geist max-w-2xl">
              Actionable guides, hardware comparisons, and industry trends to help Qatar & GCC businesses operate with maximum speed and clarity.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 font-geist cursor-pointer ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Hero Article Banner (Exact Match to Reference Top) */}
        <section className="w-full px-6 md:px-12 max-w-[1280px] mx-auto mb-16">
          <Link
            href="/blogs/how-cloud-pos-ai-reshaping-retail"
            className="block relative rounded-[28px] md:rounded-[36px] overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 min-h-[380px] sm:min-h-[440px] flex items-end p-8 sm:p-12 md:p-16 border border-slate-800 shadow-2xl group cursor-pointer"
          >
            {/* Ambient Background Graphic Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Geometric Glass Pattern Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 hidden md:block">
              <svg className="w-full h-full object-cover" viewBox="0 0 400 400" fill="none">
                <polygon points="100,0 250,400 350,400 200,0" fill="white" />
                <polygon points="220,0 350,400 400,400 270,0" fill="white" />
              </svg>
            </div>

            {/* Featured Content */}
            <div className="relative z-20 max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 font-geist">
                {featuredPost.badge}
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white font-geist leading-[1.18] tracking-tight mb-4 group-hover:text-blue-300 transition-colors">
                {featuredPost.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-geist mb-6 max-w-2xl font-normal">
                {featuredPost.description}
              </p>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 font-geist">
                <span className="font-semibold text-white">{featuredPost.author.name}</span>
                <span>•</span>
                <span>{featuredPost.author.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>

            {/* Arrow Button */}
            <div className="absolute top-8 right-8 sm:top-12 sm:right-12 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </section>

        {/* Recent Blog Posts 3-Column Grid (Exact Match to Reference) */}
        <section className="w-full px-6 md:px-12 max-w-[1280px] mx-auto">
          <div className="mb-8 text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-geist tracking-tight">
              Recent blog posts
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                href="/blogs/how-cloud-pos-ai-reshaping-retail"
                className="group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail Banner with 3D Refraction / Abstract Pattern */}
                  <div
                    className={`h-48 sm:h-52 w-full rounded-2xl bg-gradient-to-tr ${post.gradient} relative overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-300`}
                  >
                    {/* Glass Pattern */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                      <svg className="w-full h-full object-cover" viewBox="0 0 300 200" fill="none">
                        <path d="M40 0L140 200H180L80 0H40Z" fill="white" />
                        <path d="M160 0L260 200H300L200 0H160Z" fill="white" />
                      </svg>
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-white text-[11px] font-medium font-geist">
                      {post.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-[18px] sm:text-[19px] font-semibold text-slate-900 font-geist tracking-tight leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-[14px] text-slate-600 font-geist leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-2.5 pt-2 text-xs text-slate-500 font-geist">
                  <div className="w-7 h-7 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center font-bold text-slate-700 text-[11px]">
                    {post.author.charAt(0)}
                  </div>
                  <span className="font-medium text-slate-800">{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button (Matching Reference) */}
          {visibleCount < filteredPosts.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={loading}
                className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-all shadow-sm flex items-center gap-2 font-geist cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <span>Loading more...</span>
                  </>
                ) : (
                  <span>Loading more...</span>
                )}
              </button>
            </div>
          )}
        </section>

        {/* Bottom CTA Banner (Matching Bottom of Reference) */}
        <section className="w-full px-6 md:px-12 max-w-[1280px] mx-auto mt-20">
          <div className="rounded-[28px] md:rounded-[36px] bg-[#060a13] border border-slate-800 p-8 sm:p-12 md:p-16 text-center flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-geist mb-3 relative z-10">
              Let&apos;s get started on something great
            </h3>
            <p className="text-slate-400 text-sm sm:text-base font-geist mb-8 max-w-lg relative z-10">
              Join over 5,000+ businesses across Qatar & UAE growing with InfoCart IT Solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <a
                href="https://wa.me/97143411140"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white hover:bg-white/10 text-xs sm:text-sm font-semibold transition-all font-geist"
              >
                Chat to us
              </a>
              <Link
                href="/services"
                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-md font-geist"
              >
                Get started
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
