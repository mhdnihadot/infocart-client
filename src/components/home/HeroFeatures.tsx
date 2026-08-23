import Container from "@/components/layout/Container";

export default function HeroFeatures() {
  return (
    <div className="hidden lg:block border-t border-white/5 relative z-10 mt-auto bg-black/20 backdrop-blur-sm">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-start lg:items-center py-4 lg:py-6 gap-4 lg:gap-4 text-slate-300">
          {/* Feature 1: Free Shipping */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 w-full group cursor-default text-center lg:text-left">
            <div className="w-8 h-8 lg:w-10 lg:h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-slate-400 transition-colors">
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] sm:text-[11px] lg:text-[13px] font-semibold text-white leading-tight">Free Shipping</span>
              <span className="text-[10px] lg:text-[12px] text-slate-400 leading-tight mt-0.5">Free for all orders</span>
            </div>
          </div>

          {/* Feature 2: Money Guarantee */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 w-full group cursor-default text-center lg:text-left">
            <div className="w-8 h-8 lg:w-10 lg:h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-slate-400 transition-colors">
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] sm:text-[11px] lg:text-[13px] font-semibold text-white leading-tight">Money Guarantee</span>
              <span className="text-[10px] lg:text-[12px] text-slate-400 leading-tight mt-0.5">Within 7 days</span>
            </div>
          </div>

          {/* Feature 3: Online Support */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 w-full group cursor-default text-center lg:text-left">
            <div className="w-8 h-8 lg:w-10 lg:h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-slate-400 transition-colors">
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] sm:text-[11px] lg:text-[13px] font-semibold text-white leading-tight">Online Support</span>
              <span className="text-[10px] lg:text-[12px] text-slate-400 leading-tight mt-0.5">Best in class support</span>
            </div>
          </div>

          {/* Feature 4: Flexible Payment */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 w-full group cursor-default text-center lg:text-left">
            <div className="w-8 h-8 lg:w-10 lg:h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-slate-400 transition-colors">
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] sm:text-[11px] lg:text-[13px] font-semibold text-white leading-tight">Flexible Payment</span>
              <span className="text-[10px] lg:text-[12px] text-slate-400 leading-tight mt-0.5">Cash or Cards</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

