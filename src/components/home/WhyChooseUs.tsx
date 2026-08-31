import React from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Domain Expertise",
      description:
        "Our teams are trained in enterprise POS, barcode systems, and retail infrastructure. We understand how commercial workflows run day to day, which helps reduce errors and downtime.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white shrink-0"
        >
          {/* Pixelated globe icon */}
          <rect x="8" y="2" width="8" height="2" />
          <rect x="4" y="4" width="4" height="2" />
          <rect x="16" y="4" width="4" height="2" />
          <rect x="2" y="6" width="2" height="4" />
          <rect x="20" y="6" width="2" height="4" />
          <rect x="2" y="14" width="2" height="4" />
          <rect x="20" y="14" width="2" height="4" />
          <rect x="4" y="18" width="4" height="2" />
          <rect x="16" y="18" width="4" height="2" />
          <rect x="8" y="20" width="8" height="2" />
          {/* Center grid lines */}
          <rect x="11" y="4" width="2" height="16" />
          <rect x="4" y="11" width="16" height="2" />
          <rect x="7" y="6" width="2" height="4" />
          <rect x="15" y="6" width="2" height="4" />
          <rect x="7" y="14" width="2" height="4" />
          <rect x="15" y="14" width="2" height="4" />
        </svg>
      ),
    },
    {
      title: "Workforce Excellence",
      description:
        "Experienced technical specialists and certified hardware engineers trained in retail standards, rapid on-site commissioning, and client-tailored support.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white shrink-0"
        >
          {/* Pixelated workforce / team icon */}
          <rect x="8" y="2" width="4" height="4" />
          <rect x="16" y="6" width="4" height="4" />
          <rect x="6" y="8" width="8" height="2" />
          <rect x="4" y="10" width="2" height="6" />
          <rect x="14" y="12" width="6" height="2" />
          <rect x="20" y="14" width="2" height="6" />
          <rect x="4" y="16" width="8" height="2" />
          <rect x="14" y="20" width="8" height="2" />
          <rect x="6" y="18" width="2" height="4" />
          <rect x="10" y="18" width="2" height="4" />
        </svg>
      ),
    },
    {
      title: "AI-Enhanced Services",
      description:
        "Smart automation and cloud intelligence supported by human oversight to improve billing speed, inventory accuracy, and business cost benefits.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white shrink-0"
        >
          {/* Pixelated diamond / neural constellation icon */}
          <rect x="18" y="2" width="2" height="2" />
          <rect x="16" y="4" width="2" height="2" />
          <rect x="20" y="4" width="2" height="2" />
          <rect x="18" y="6" width="2" height="2" />
          <rect x="6" y="10" width="4" height="2" />
          <rect x="4" y="12" width="2" height="4" />
          <rect x="10" y="12" width="2" height="4" />
          <rect x="6" y="16" width="4" height="2" />
          <rect x="14" y="14" width="2" height="2" />
          <rect x="12" y="16" width="2" height="2" />
          <rect x="16" y="16" width="2" height="2" />
          <rect x="14" y="18" width="2" height="2" />
        </svg>
      ),
    },
    {
      title: "Scalability",
      description:
        "Our delivery model is built for scalability as transaction volumes and requirements change. Capacity and processes expand without disrupting operations.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white shrink-0"
        >
          {/* Pixelated sync / loop arrows icon */}
          <rect x="6" y="4" width="10" height="2" />
          <rect x="14" y="2" width="2" height="2" />
          <rect x="18" y="4" width="2" height="6" />
          <rect x="16" y="8" width="2" height="2" />
          <rect x="8" y="18" width="10" height="2" />
          <rect x="8" y="20" width="2" height="2" />
          <rect x="4" y="14" width="2" height="6" />
          <rect x="6" y="14" width="2" height="2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#030712] text-white py-24 md:py-32 relative overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[500px] bg-gradient-to-tr from-purple-950/15 via-transparent to-blue-950/20 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Summary */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/10 backdrop-blur-md mb-8">
              <span className="text-[12px] font-medium text-slate-300 tracking-wide font-geist">
                Why Choose Us
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1] font-geist mb-6">
              What Sets Us <br />
              Apart
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-slate-400 font-normal leading-relaxed max-w-[420px] font-geist">
              We bring together deep industry expertise and modern automation to
              help Qatar & GCC businesses operate with greater speed, clarity, and confidence.
            </p>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start group"
              >
                {/* Icon Container */}
                <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-semibold text-white mb-3 font-geist tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-slate-400 leading-relaxed font-geist font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
