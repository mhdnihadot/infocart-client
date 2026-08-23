import React from "react";

export default function AmbientFlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <style>
        {`
          .gemini-grad-left {
            background: linear-gradient(180deg, #4285f4 0%, #9b72cb 33%, #d96570 66%, #f9ab00 100%);
          }
          .gemini-grad-right {
            background: linear-gradient(0deg, #4285f4 0%, #9b72cb 33%, #d96570 66%, #f9ab00 100%);
          }
        `}
      </style>

      {/* Left Edge Ambient Support (Gemini Colors) */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 left-[-10px] w-[20px] h-[30vh] md:h-[40vh] gemini-grad-left opacity-60 rounded-full blur-[15px]"
      ></div>

      {/* Right Edge Ambient Support (Gemini Colors) */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 right-[-10px] w-[20px] h-[30vh] md:h-[40vh] gemini-grad-right opacity-60 rounded-full blur-[15px]"
      ></div>
    </div>
  );
}
