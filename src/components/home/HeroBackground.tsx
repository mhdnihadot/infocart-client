export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Pure dark base */}
      <div className="absolute inset-0 bg-[#02040a]" />
      
      {/* Subtle top edge light */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </div>
  );
}
