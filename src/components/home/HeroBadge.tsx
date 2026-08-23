export default function HeroBadge({ text }: { text: string }) {
  return (
    <div className="mb-6 font-geist">
      <span className="text-[12px] md:text-[14px] font-bold text-[#3b82f6] tracking-[0.1em] uppercase">
        {text}
      </span>
    </div>
  );
}
