"use client";

import React, { useState } from "react";
import { SectionTitle } from "../ui/typography";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of IT solutions do you offer?",
      answer: "We offer a comprehensive range of IT solutions including barcode printers, POS terminals, CCTV systems, networking equipment, and complete business automation setups."
    },
    {
      question: "Do you provide installation and maintenance?",
      answer: "Yes, our expert technicians provide full installation services and ongoing maintenance support for all the hardware and systems we supply."
    },
    {
      question: "How can I request a quote for bulk orders?",
      answer: "You can request a quote by contacting our sales team directly via email or phone. We offer special pricing for bulk enterprise orders."
    },
    {
      question: "What is your warranty policy?",
      answer: "All our products come with a standard manufacturer's warranty. Extended warranty and premium support packages are also available upon request."
    },
    {
      question: "Do you offer tailored solutions for small businesses?",
      answer: "Absolutely. We understand that every business is unique, and we tailor our IT packages to perfectly fit the scale and budget of small and medium enterprises."
    },
    {
      question: "How fast is your technical support response time?",
      answer: "We pride ourselves on our rapid response times. Our dedicated support team typically responds to critical issues within 2-4 hours during business days."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full pb-8 bg-transparent relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-3 md:mb-4">FAQ</p>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-medium text-black tracking-tight mb-4 font-geist leading-[1.15] md:leading-[1.2]">
            Frequently Asked <br />
            <span className="font-serif italic text-slate-700">Questions</span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="flex flex-col justify-center"
              >
                {/* Glassmorphism FAQ Card */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left group cursor-pointer relative p-5 sm:p-6 md:px-8 md:py-6 rounded-[28px] md:rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/60 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-geist font-medium text-[14px] sm:text-[15px] md:text-[16px] text-slate-900 leading-tight">
                      {faq.question}
                    </h3>

                    {/* Toggle Icon */}
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md transition-transform duration-300">
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>

                  {/* Expandable Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-[14px] md:text-[15px] text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
