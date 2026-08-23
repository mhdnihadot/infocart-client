import React from 'react';
import { cn } from '@/lib/utils';

export function SectionTitle({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-[1.75rem] font-geist md:text-[2rem] font-bold text-black capitalize", className)}>
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-[1rem]  text-gray-500 font-medium", className)}>
      {children}
    </p>
  );
}
