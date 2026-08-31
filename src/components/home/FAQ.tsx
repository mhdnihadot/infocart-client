"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const faqs = [
    {
      question: "How much does it cost me for the web design & POS services of your company?",
      answer:
        "Our pricing depends on your specific business requirements, number of terminals, software integrations, and hardware selections. We offer tailored, cost-effective packages for startups, growing retail shops, and multi-branch enterprises. Contact us for a customized quote.",
    },
    {
      question: "How do I get started with the website & IT solutions services?",
      answer:
        "Getting started is simple. You can reach out to us via our quote form, phone, or WhatsApp. Our solution architects will analyze your business workflow, recommend the optimal hardware and software setup, and schedule immediate on-site demonstration and deployment.",
    },
    {
      question: "Do you make the website & POS systems mobile-friendly or responsive?",
      answer:
        "Yes, absolutely. All our web platforms, merchant dashboards, and mobile POS applications are 100% responsive and optimized for smartphones, tablets, handheld barcode terminals, and touch desktop POS systems.",
    },
    {
      question: "Why should I choose your IT & POS hardware services?",
      answer:
        "With decades of specialized experience across Qatar & GCC, we provide genuine certified hardware (touch POS, barcode scanners, thermal receipt printers, cash drawers, CCTV), lifetime firmware support, rapid 2-4 hour replacement guarantees, and continuous technical maintenance.",
    },
    {
      question: "Do you provide on-site installation and staff training in Qatar?",
      answer:
        "Yes. Our certified field engineers handle full on-site installation, structured cabling, network configuration, database integration, and comprehensive staff training so your team can start billing with zero downtime.",
    },
    {
      question: "What warranty and after-sales support do you provide?",
      answer:
        "All hardware equipment comes with a standard manufacturer warranty of 1 to 3 years. We also provide annual maintenance contracts (AMC), remote support, and on-site emergency repairs.",
    },
    {
      question: "Can your POS software integrate with accounting and ERP systems?",
      answer:
        "Yes, our solutions seamlessly synchronize with popular accounting platforms, ERP software, payment gateways, and inventory management backends.",
    },
    {
      question: "How fast is your technical support response time?",
      answer:
        "Our dedicated local support team operates 24/7. Critical business incidents are responded to within 1-2 hours, with on-site technician dispatch whenever necessary.",
    },
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-20 md:py-28 relative">
      <div className="max-w-[1080px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-10 md:mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-slate-900 tracking-tight font-geist">
            FAQ
          </h2>
        </div>

        {/* Minimalist Accordion List */}
        <div className="border-t border-slate-300">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-slate-300 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 md:py-7 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] sm:text-[17px] md:text-[18px] font-medium text-slate-900 font-geist pr-8 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <span className="shrink-0 text-slate-700 text-2xl font-light leading-none transition-transform duration-300 select-none">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-blue-600" : "rotate-0 text-slate-800"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                {/* Expandable Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed font-geist font-normal max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-50 text-[14px] font-medium rounded-xs transition-colors duration-200 font-geist"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </section>
  );
}
