export default function HeroContent({ badge, titleLine1, titleLine2, description }: { badge: string, titleLine1: string, titleLine2: string, description: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start w-full">

      {/* Premium Pill Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-blue-400 font-bold tracking-widest text-[10px] sm:text-[11px] uppercase font-geist">
            {badge}
          </span>
        </div>
      )}

      {/* Main Headline */}
      <h1 className="font-geist text-[2.1rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.0rem] font-bold leading-[1.05] tracking-tight mb-3 text-center lg:text-left">
        <span className="block text-white whitespace-nowrap">{titleLine1}</span>
        <span className="block text-[#3b82f6] whitespace-nowrap">{titleLine2}</span>
      </h1>

      {/* Sub-description */}
      <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] text-slate-300 max-w-[320px] sm:max-w-sm lg:max-w-md font-geist mb-5 leading-relaxed font-medium text-center lg:text-left mx-auto lg:mx-0 text-balance">
        {description}
      </p>

      {/* Action Buttons */}
      <div className="flex px-4 lg:px-0 flex-row items-center justify-center lg:justify-start gap-2 sm:gap-6 w-full sm:w-auto mb-6">
        <button className="w-1/2 sm:w-auto group px-1 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#3b82f6] text-white text-[12px] sm:text-[14px] font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-1.5 sm:gap-2">
          <span className="whitespace-nowrap">Shop Now</span>
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
        <button className="w-1/2 sm:w-auto group px-1 sm:px-8 py-3 sm:py-3.5 rounded-full border border-white/20 bg-white/5 text-white text-[12px] sm:text-[14px] font-semibold hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 backdrop-blur-sm whitespace-nowrap">
          Explore Collection
        </button>
      </div>

      {/* Social Proof */}
      <div className="flex items-center gap-4 pt-2">
        <div className="flex -space-x-3 group/avatars">
          <img src="https://i.pravatar.cc/100?img=1" alt="Customer" className="relative w-10 h-10 rounded-full border-2 border-[#02040a] grayscale transition-all duration-300 group-hover/avatars:opacity-40 hover:!opacity-100 hover:!grayscale-0 hover:scale-110 hover:z-10" />
          <img src="https://i.pravatar.cc/100?img=2" alt="Customer" className="relative w-10 h-10 rounded-full border-2 border-[#02040a] grayscale transition-all duration-300 group-hover/avatars:opacity-40 hover:!opacity-100 hover:!grayscale-0 hover:scale-110 hover:z-10" />
          <img src="https://i.pravatar.cc/100?img=3" alt="Customer" className="relative w-10 h-10 rounded-full border-2 border-[#02040a] grayscale transition-all duration-300 group-hover/avatars:opacity-40 hover:!opacity-100 hover:!grayscale-0 hover:scale-110 hover:z-10" />
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="text-[12px] font-semibold text-white leading-tight">Loved by 25,000+ Customers</span>
          <span className="text-[11px] text-slate-400 leading-tight">Across Qatar</span>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
