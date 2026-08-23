import { ReactNode } from 'react';

interface HeroFeatureProps {
  icon: ReactNode;
  title: string;
}

export default function HeroFeature({ icon, title }: HeroFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-[34px] h-[34px] rounded-lg bg-black text-white shadow-sm">
        {icon}
      </div>
      <span className="text-[15px] font-geist font-semibold text-slate-900">{title}</span>
    </div>
  );
}
