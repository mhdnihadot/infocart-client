export default function HeroImage({ src, floatingBadge }: { src: string, floatingBadge?: string }) {
  return (
    <>
      <div className="relative md:pt-10 w-full h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center z-10 lg:pl-10">
        <div className="relative w-full h-full max-w-[95%] mx-auto flex flex-col items-center justify-center">

          {/* Intense Studio Backlight (Focus Area) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#3b82f6]/40 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>

          {/* Floating Badge (Top Right) */}
          {floatingBadge && (
            <div className="absolute top-[10%] right-0 lg:right-[-5%] z-30 w-24 h-24 rounded-full bg-[#0a1532] shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-[#1e3a8a] flex items-center justify-center animate-[float_4s_ease-in-out_infinite_reverse]">
              <span className="text-white text-center text-[15px] font-semibold leading-tight font-geist">
                {floatingBadge.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </span>
            </div>
          )}

          {/* Image & Pedestal Wrapper */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full mt-auto mb-auto">
            {/* Main Image */}
            <img
              key={src}
              src={src}
              alt="Featured Product"
              className="relative z-10 w-full h-auto max-h-[70vh] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.9)] animate-[float_6s_ease-in-out_infinite] rounded-xl transition-opacity duration-500"
            />

            {/* 3D Studio Pedestal (Tight below image) */}
            <div className="relative w-[95%] max-w-[500px] h-[60px] z-0 -mt-6 md:-mt-10">
              {/* Dark Ground Reflection / Base Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-[30px] bg-[#3b82f6]/10 blur-[20px] rounded-[100%]"></div>

              {/* Pedestal Side (Thickness) */}
              <div className="absolute top-3 inset-x-0 h-full bg-[#030611] rounded-[100%] border-b-2 border-b-[#1e293b]/50 shadow-[0_15px_40px_rgba(0,0,0,1)]"></div>

              {/* Pedestal Top Face */}
              <div className="absolute inset-0 bg-[#0f1629] rounded-[100%] border border-[#1e293b] overflow-hidden">
                {/* Top Surface Light Reflection */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5"></div>
              </div>

              {/* Glowing Edge (The Neon Ring) */}
              <div className="absolute inset-0 rounded-[100%] shadow-[inset_0_-2px_20px_rgba(59,130,246,0.6),0_8px_30px_rgba(59,130,246,0.5)] border-b-[3px] border-b-[#3b82f6]/80 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
