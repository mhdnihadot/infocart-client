import React from "react";
import { SectionSubtitle, SectionTitle } from "../ui/typography";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Industry Expertise",
      description: "20+ years of experience in Qatar providing complete IT solutions and security systems.",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 mb-6">
          <circle cx="12" cy="8" r="6" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: "Comprehensive Solutions",
      description: "A wide range of integrated products to streamline operations and boost efficiency.",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 mb-6">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      )
    },
    {
      title: "Customer-Centric",
      description: "Dedicated support and personalized assistance to ensure your specific business needs are met.",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 mb-6">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full pb-20 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <SectionTitle className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-medium text-black tracking-tight mb-3 md:mb-4 font-geist leading-[1.15] md:leading-[1.2]">
            Why Choose Us?
          </SectionTitle>
          <p className="text-[14px] md:text-[15px]   text-gray-500  ">
            We deliver exceptional IT solutions tailored to your unique requirements, backed by decades of expertise and a commitment to excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-20 w-full px-2 md:px-0">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start md:items-center text-left md:text-center group cursor-default">
              <div className="mb-4 md:mb-5 text-[#3b82f6] transition-transform duration-300 group-hover:-translate-y-1">
                {feature.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-slate-900 mb-2 md:mb-3 font-geist">
                {feature.title}
              </h3>
              <p className="text-[13px] md:text-[15px]   text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
