import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
