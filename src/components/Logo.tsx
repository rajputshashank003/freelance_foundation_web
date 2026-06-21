import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/PPF Logo.jpg"
        alt="Progress Path Foundation Logo"
        width={size}
        height={size}
        className="shrink-0 rounded-lg object-contain"
      />
      <div className="flex flex-col">
        <span className="font-sans font-extrabold tracking-[0.16em] text-[#4a5568] leading-none text-[15px] sm:text-[17px]">
          PROGRESS PATH
        </span>
        <span className="font-sans font-bold tracking-[0.38em] text-[#5fa9c7] leading-none text-[10px] sm:text-[11px] mt-1">
          FOUNDATION
        </span>
      </div>
    </div>
  );
};
