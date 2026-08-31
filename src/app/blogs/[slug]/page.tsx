"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";

export default function BlogDetailsPage() {
  const params = useParams();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  // Sample blog post data
  const post = {
    category: "POS & RETAIL TECH",
    title: "How Next-Gen Cloud POS & AI Automation are Reshaping Retail Across Qatar & UAE",
    subtitle:
      "A comprehensive guide on cutting checkout friction by 65%, automating inventory verification, and scaling multi-branch retail infrastructure with zero downtime.",
    author: {
      name: "Ahmed Al-Mansoor",
      role: "Lead Systems Architect at InfoCart",
      bio: "Over 15 years of hands-on experience deploying enterprise POS systems, barcode infrastructure, and automated supply chains across Qatar & UAE.",
      avatar: "A",
      date: "January 28, 2026",
      updatedDate: "March 25, 2026",
      readTime: "6 min read",
    },
    reviewer: {
      name: "Harish TR",
      role: "Principal Hardware Engineer",
    },
    tableOfContents: [
      { id: "intro", title: "Introduction & GCC Retail State" },
      { id: "why-upgrade", title: "Why Legacy Cash Registers Fail Peak Hours" },
      { id: "essential-components", title: "6 Must-Have Modern POS Components" },
      { id: "customer-display", title: "1. Dual-Screen Customer Displays" },
      { id: "barcode-automation", title: "2. Industrial Thermal Barcode Printing" },
      { id: "cloud-sync", title: "3. Offline-Resilient Cloud Synchronization" },
      { id: "security-compliance", title: "4. CCTV & MOI Regulatory Compliance" },
      { id: "conclusion", title: "Conclusion & Strategic Takeaways" },
    ],
    relatedPosts: [
      {
        id: "1",
        title: "How to Speed Up Your Supermarket Checkout Lines by 40%",
        slug: "speed-up-supermarket-checkout",
        category: "Retail Operations",
      },
      {
        id: "2",
        title: "Thermal Receipt Printers vs Impact Printers: 2026 Comparison",
        slug: "thermal-vs-impact-printers",
        category: "Hardware Guide",
      },
      {
        id: "3",
        title: "Top 7 Barcode Scanner Errors and Certified Field Solutions",
        slug: "barcode-scanner-troubleshooting",
        category: "Barcode & RFID",
      },
      {
        id: "4",
        title: "Kitchen Display Systems (KDS) vs Paper Slips for Fast Dining",
        slug: "kds-vs-paper-receipts",
        category: "Restaurant Tech",
      },
      {
        id: "5",
        title: "Why an IT Annual Maintenance Contract (AMC) Saves 70% in Downtime",
        slug: "it-amc-retail-benefits",
        category: "Support & AMC",
      },
    ],
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Scroll listener for TOC active highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = post.tableOfContents.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(post.tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post.tableOfContents]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans relative">
      <DesktopHeader />
      <MobileHeader />

      <main className="flex-1 w-full pt-24 lg:pt-32 pb-24">
        
        {/* Article Header Container */}
        <article className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-4 font-geist">
            <Link href="/blogs" className="hover:underline">
              INSIGHTS
            </Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          {/* Article Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-slate-900 tracking-tight leading-[1.15] font-geist mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Author & Reviewer Metadata Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-slate-200 mb-10">
            <div className="flex items-start gap-4">
              {/* Author Avatar */}
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                {post.author.avatar}
              </div>

              {/* Author Details */}
              <div className="flex flex-col text-xs sm:text-[13px] text-slate-600 font-geist">
                <div className="text-slate-900 font-normal leading-relaxed max-w-xl">
                  By{" "}
                  <span className="font-semibold text-blue-600">
                    {post.author.name}
                  </span>
                  , {post.author.bio}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-1.5 text-slate-500">
                  <span>
                    Reviewed by:{" "}
                    <span className="font-medium text-slate-700">
                      {post.reviewer.name}
                    </span>
                  </span>
                  <span>•</span>
                  <span>Published on {post.author.date}</span>
                  <span>•</span>
                  <span>Last updated on {post.author.updatedDate}</span>
                  <span>•</span>
                  <span className="font-medium text-slate-800">{post.author.readTime}</span>
                </div>
              </div>
            </div>

            {/* Social Share & Bookmark Actions */}
            <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={handleShare}
                className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-xs font-medium font-geist"
                title="Share article link"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>{copied ? "Copied!" : "Share"}</span>
              </button>

              <button
                type="button"
                className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors"
                title="Bookmark article"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hero Feature Banner Graphic (Exact Match to Reference Center Banner) */}
          <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 h-[300px] sm:h-[420px] md:h-[480px] mb-14 relative flex items-center justify-center shadow-xl border border-slate-800">
            {/* Ambient Lighting */}
            <div className="absolute inset-0 bg-radial from-indigo-500/20 via-transparent to-transparent opacity-60" />
            
            {/* 3D Modern Refraction Artwork */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 flex items-center justify-center mb-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-white/80 font-geist text-xs uppercase tracking-widest font-semibold">
                InfoCart Research & Engineering
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-geist mt-1">
                Next-Gen Retail Architecture in GCC
              </h2>
            </div>
          </div>

          {/* Main 3-Column Layout (TOC on Left, Medium-style Focused Content in Center, You May Also Like on Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Column: Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-geist mb-3">
                Table of Contents
              </h3>
              <nav className="flex flex-col space-y-2 border-l border-slate-200 pl-3.5">
                {post.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-xs leading-relaxed font-geist transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-blue-600 font-semibold translate-x-1"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Center Column: Medium-style Focused Content Column */}
            <div className="lg:col-span-6 max-w-[720px] mx-auto text-slate-800 font-geist leading-[1.8] text-[15px] sm:text-[16px] space-y-7">
              
              <section id="intro" className="space-y-4">
                <p>
                  According to the <strong className="font-semibold text-slate-900">GCC Retail Tech Outlook 2026</strong>, over 74% of commercial retail stores in Qatar, UAE, and Saudi Arabia have upgraded their legacy cash counters to modern cloud-connected point-of-sale (POS) architectures.
                </p>
                <p>
                  As consumer expectations for frictionless checkout grow, businesses that rely on legacy standalone cash registers suffer from peak-hour queues, manual reconciliation discrepancies, and stockout blind spots.
                </p>
              </section>

              {/* In a Nutshell Callout Box (Exact Match to Reference Callout) */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/50 border border-blue-100 shadow-sm my-8">
                <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider font-geist mb-2.5">
                  In a Nutshell
                </h4>
                <p className="text-[14px] text-slate-700 leading-relaxed italic font-geist">
                  &ldquo;Deploying an integrated POS stack with dual-screen capacitive touchscreens, high-speed thermal barcode printers, and real-time cloud inventory synchronization reduces customer wait times by over 60% while completely eliminating billing errors.&rdquo;
                </p>
              </div>

              <section id="why-upgrade" className="space-y-4 pt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-geist">
                  Why Legacy Cash Registers Fail Peak Hours
                </h3>
                <p>
                  During holiday sales and evening rushes, conventional terminals struggle with barcode scanning latency and slow serial printers. When a terminal takes 15 seconds per item lookup, the queue backlog triples in minutes.
                </p>
                <p>
                  Furthermore, isolated registers lack multi-branch live inventory checks, resulting in misplaced stock and missed sales opportunities.
                </p>
              </section>

              <section id="essential-components" className="space-y-6 pt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-geist">
                  6 Must-Have Modern POS Components
                </h3>

                {/* Subsections */}
                <div id="customer-display" className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 font-geist">
                    1. Dual-Screen Customer Displays
                  </h4>
                  <p>
                    Modern dual-display POS systems feature a secondary 10.1&quot; to 15.6&quot; screen facing the customer. This enables instant item verification, transparency during checkout, and promotional multimedia ad banners that increase upsell conversions.
                  </p>
                </div>

                <div id="barcode-automation" className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 font-geist">
                    2. Industrial Thermal Barcode & Label Printing
                  </h4>
                  <p>
                    Direct thermal and thermal transfer printers allow instantaneous barcode label creation with 203 to 300 DPI resolution, ensuring 100% scan accuracy even under low lighting or wrinkled plastic packaging.
                  </p>
                </div>

                <div id="cloud-sync" className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 font-geist">
                    3. Offline-Resilient Cloud Synchronization
                  </h4>
                  <p>
                    Internet fluctuations must never halt cashier operations. InfoCart&apos;s POS architecture stores sales transactions locally during outages and automatically synchronizes with the central cloud database as soon as connectivity resumes.
                  </p>
                </div>

                <div id="security-compliance" className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 font-geist">
                    4. CCTV & MOI Regulatory Compliance
                  </h4>
                  <p>
                    In Qatar and the UAE, point-of-sale integration with high-definition overhead security cameras provides verified timestamp overlays on video recordings, mitigating register shortages and internal theft.
                  </p>
                </div>
              </section>

              <section id="conclusion" className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-geist">
                  Conclusion & Strategic Takeaways
                </h3>
                <p>
                  Investing in certified enterprise hardware and automated retail software is no longer optional—it is the foundation of competitive retail operations.
                </p>
                <p>
                  With proper hardware staging, structured cabling, and 24/7 AMC warranty support, businesses can scale from a single boutique to hundreds of branches effortlessly.
                </p>
              </section>

              {/* Author Bio Box */}
              <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0">
                  {post.author.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 font-geist mb-1">
                    Written by {post.author.name}
                  </h4>
                  <p className="text-xs text-slate-600 font-geist leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: "You May Also Like" Sticky Widget (Exact Match to Reference Right) */}
            <aside className="lg:col-span-3 sticky top-28 space-y-6">
              <div className="border-t-2 border-blue-600 pt-3">
                <h3 className="text-base font-bold text-slate-900 font-geist tracking-tight mb-5">
                  You May Also Like
                </h3>

                <div className="flex flex-col space-y-5">
                  {post.relatedPosts.map((related, idx) => (
                    <div key={related.id} className="group flex items-start gap-3.5 pb-4 border-b border-slate-100 last:border-none">
                      <span className="text-blue-600 font-bold font-geist text-sm shrink-0">
                        {idx + 1}
                      </span>
                      <Link
                        href={`/blogs/${related.slug}`}
                        className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors font-geist leading-snug"
                      >
                        {related.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation / Quote Widget */}
              <div className="p-5 rounded-2xl bg-[#060a13] text-white text-left">
                <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-2 font-geist">
                  Need Expert Help?
                </p>
                <h4 className="text-sm font-semibold font-geist mb-2">
                  Upgrade your retail hardware today
                </h4>
                <p className="text-xs text-slate-400 font-geist mb-4 leading-relaxed">
                  Speak with our POS engineers in Qatar & UAE for a free site survey.
                </p>
                <Link
                  href="/services"
                  className="inline-block w-full py-2 bg-blue-600 hover:bg-blue-700 text-center rounded-lg text-xs font-semibold font-geist transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </aside>

          </div>

        </article>

      </main>

      <Footer />
    </div>
  );
}
