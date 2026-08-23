"use client";

import React from "react";

export default function CTA() {
  return (
    <section className="w-full pb-24 bg-transparent relative overflow-hidden px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Glassmorphism Wrapper */}
        <div className="relative w-full rounded-[32px] md:rounded-[40px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-16">

          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start text-left z-10 mb-10 md:mb-0">
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] leading-[1.15] md:leading-[1.1] font-medium text-slate-900 tracking-tight font-geist mb-3 md:mb-4">
              Ready to Transform <br />
              <span className="font-serif italic text-slate-700">Your Business?</span>
            </h2>

            <p className="text-gray-500 text-[14px] md:text-[15px] font-medium max-w-[400px] mb-6 md:mb-8 leading-relaxed">
              Get the right IT solution tailored for your specific needs. Contact our experts today!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black text-white font-medium font-geist text-[14px] hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-md">
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] text-white font-medium font-geist text-[14px] hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.198 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 md:flex hidden justify-center md:justify-end items-center relative z-10 w-full mt-2 md:mt-0">
            <div className="relative w-full max-w-[450px] aspect-video md:aspect-[4/3] bg-white/50 rounded-3xl overflow-hidden flex items-center justify-center p-2 shadow-inner border border-white/40">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="POS System"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
