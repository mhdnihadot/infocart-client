"use client";

import React, { useState } from "react";
import Link from "next/link";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    service: "POS Systems & Hardware",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact InfoCart Technical Solutions",
    url: "https://infocart.ae/contact",
    description: "Get in touch with InfoCart for enterprise POS systems, barcode solutions, and IT support in Qatar & UAE.",
    mainEntity: {
      "@type": "Organization",
      name: "InfoCart Technical Solutions",
      telephone: "+971-4-341-1140",
      email: "info@infocart.ae",
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Doha",
          addressCountry: "QA",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 font-sans relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <DesktopHeader />
      <MobileHeader />

      <main className="flex-1 w-full pt-24 lg:pt-32 pb-24">
        
        {/* Top Hero Section (Exact Match to Reference Top) */}
        <section className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-16 pt-8 pb-12">
          {/* Breadcrumb */}
          <p className="text-xs sm:text-[13px] font-normal text-slate-400 font-geist mb-3">
            <Link href="/" className="hover:text-slate-600 transition-colors">
              Home
            </Link>{" "}
            / Contact_Us
          </p>

          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight font-geist">
            Contact Us
          </h1>
        </section>

        {/* Main Two-Column Card Section (Exact Match to Reference Layout) */}
        <section className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Contact Information */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-geist tracking-tight leading-tight mb-3">
                    Need more information? <br />
                    Get in touch with us
                  </h2>
                  <p className="text-sm sm:text-[15px] text-slate-500 font-geist leading-relaxed mb-10">
                    A connected set of services designed to turn strategy into scale. Speak with our retail hardware specialists and certified technicians.
                  </p>

                  {/* 3 Contact Info Blocks */}
                  <div className="space-y-6">
                    
                    {/* Phone Block */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-400 font-geist">Phone Number</span>
                        <a href="tel:+97143411140" className="text-sm sm:text-base font-semibold text-slate-900 font-geist hover:text-blue-600 transition-colors">
                          +971 4 341 1140
                        </a>
                      </div>
                    </div>

                    {/* Email Block */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-400 font-geist">Email</span>
                        <a href="mailto:info@infocart.ae" className="text-sm sm:text-base font-semibold text-slate-900 font-geist hover:text-blue-600 transition-colors">
                          info@infocart.ae
                        </a>
                      </div>
                    </div>

                    {/* Address Block */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-400 font-geist">Address</span>
                        <span className="text-sm font-medium text-slate-900 font-geist leading-relaxed">
                          Sheikh Zayed Road, Dubai, UAE <br />
                          Grand Hamad Street, Doha, Qatar
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Direct WhatsApp Quick Chat Pill */}
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <a
                    href="https://wa.me/97143411140"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all group"
                  >
                    <svg className="w-6 h-6 text-[#25D366] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-slate-900 font-geist group-hover:text-green-700">
                        Chat on WhatsApp
                      </p>
                      <p className="text-[11px] text-slate-500 font-geist">
                        Instant response from technical team
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Send Message Form */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-geist tracking-tight mb-2">
                  Send Message
                </h3>
                <p className="text-sm text-slate-500 font-geist mb-8">
                  Please fill out the form below with your details and message to contact with us.
                </p>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 font-geist mb-1">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-geist max-w-sm">
                      Thank you for contacting InfoCart. Our technical solutions consultant will reach out to you within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-geist focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-geist focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Email or Phone Number */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Email or Phone Number"
                        value={formData.emailOrPhone}
                        onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-geist focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-700 text-sm font-geist focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      >
                        <option>POS Systems & Hardware</option>
                        <option>Barcode Printers & RFID Solutions</option>
                        <option>Self-Service Kiosks & HMI</option>
                        <option>CCTV Security & Access Control</option>
                        <option>IT Infrastructure & AMC Support</option>
                        <option>General Inquiry / Other</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div>
                      <textarea
                        required
                        rows={5}
                        placeholder="Write Message Here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-geist focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 font-geist cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Regional Offices Grid */}
        <section className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-16 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* UAE Office */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 font-geist">
                  UAE Headquarters
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-geist mb-2">
                  Dubai Commercial Operations
                </h4>
                <p className="text-sm text-slate-600 font-geist leading-relaxed mb-6">
                  Sheikh Zayed Road, Al Quoz Industrial Area, Dubai, United Arab Emirates
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 font-geist">
                <span>Direct: +971 4 341 1140</span>
                <span className="text-green-600">Open (Mon - Sat)</span>
              </div>
            </div>

            {/* Qatar Office */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4 font-geist">
                  Qatar Regional Office
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-geist mb-2">
                  Doha Systems Center
                </h4>
                <p className="text-sm text-slate-600 font-geist leading-relaxed mb-6">
                  Grand Hamad Street, Banking District, Doha, State of Qatar
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 font-geist">
                <span>Support: info@infocart.ae</span>
                <span className="text-green-600">Open (Mon - Sat)</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
