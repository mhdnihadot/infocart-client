import HeroContent from "./HeroContent";
import Container from "@/components/layout/Container";
import HeroImage from "./HeroImage";
// import HeroBackground from "./HeroBackground";
import HeroFeatures from "./HeroFeatures";

// Import images statically
import slide1Img from "@/assets/images/banners/hero-image.webp";

export default function Hero() {
  return (
    <section className="flex-1 pt-20 lg:pt-0 relative w-full overflow-hidden bg-[#02040a] min-h-screen flex flex-col justify-center">
      {/* Modern Linear & Radial Color Mix Blending Background */}
      {/* <HeroBackground /> */}

      <Container className="pt-10 pb-6 md:pb-32 flex-1 flex flex-col justify-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center h-full">

          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 pt-0 lg:pt-16">
            <HeroContent
              badge="Qatar's #1 POS Solution"
              titleLine1="Faster Checkout."
              titleLine2="Smarter Business."
              description="High-quality point of sale products designed for everyday business."
            />
          </div>

          {/* Right Side Image */}
          <HeroImage
            src={slide1Img.src}
          />

        </div>
      </Container>

      {/* Perspective Grid Floor Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[280px] pointer-events-none z-0 overflow-hidden">
        {/* Fade mask from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-transparent to-transparent z-10" />
        {/* Left fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-transparent to-[#02040a] z-10" />
        <svg
          viewBox="0 0 1200 280"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: "gridMove 6s linear infinite" }}
        >
          <defs>
            <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Horizontal lines — converging toward vanishing point at top-center */}
          {[0.15, 0.28, 0.42, 0.55, 0.68, 0.80, 0.90, 1.0].map((t, i) => {
            const y = t * 280;
            const spread = t * 600;
            return (
              <line
                key={`h-${i}`}
                x1={600 - spread}
                y1={y}
                x2={600 + spread}
                y2={y}
                stroke="#3b82f6"
                strokeOpacity={0.05 + t * 0.18}
                strokeWidth={0.5 + t * 0.5}
              />
            );
          })}

          {/* Vertical lines — radiating out from vanishing point */}
          {[-7, -5, -3.5, -2.2, -1.2, -0.4, 0, 0.4, 1.2, 2.2, 3.5, 5, 7].map((angle, i) => {
            const endX = 600 + angle * 100;
            const spreadFactor = Math.abs(angle);
            return (
              <line
                key={`v-${i}`}
                x1={600}
                y1={0}
                x2={endX}
                y2={280}
                stroke="#3b82f6"
                strokeOpacity={angle === 0 ? 0.25 : 0.06 + (1 / (spreadFactor + 1)) * 0.14}
                strokeWidth={angle === 0 ? 0.8 : 0.5}
              />
            );
          })}

          {/* Glow base */}
          <rect x="0" y="0" width="1200" height="280" fill="url(#gridFade)" />
        </svg>
      </div>

      {/* Bottom Features Bar */}
      <HeroFeatures />
    </section>
  );
}
