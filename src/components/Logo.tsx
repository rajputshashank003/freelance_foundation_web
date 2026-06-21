import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Double Circular Border */}
        <circle cx="50" cy="50" r="47" stroke="#4a5568" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="44" stroke="#4a5568" strokeWidth="1" />

        {/* The climbing path / trails */}
        <path
          d="M 28 60 C 35 60, 48 58, 59 47 C 60 46, 61 45, 62 44"
          stroke="#4a5568"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 33 63 C 40 63, 50 60, 58 50 C 60 48, 62 46, 64 42"
          stroke="#4a5568"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Human Climber silhouette */}
        <circle cx="59.5" cy="33.5" r="2.5" fill="#4a5568" />
        <path
          d="M 59.5 36.5 C 58.5 38.5, 59 42, 60.5 45.5 M 58.5 38.5 C 57.5 40, 57 41.5, 57 43.5 M 61.5 36.5 L 63 41.5"
          stroke="#4a5568"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        <line x1="62" y1="26" x2="62" y2="44" stroke="#4a5568" strokeWidth="1.5" />
        <path
          d="M 62 27 C 65 25, 69 29, 72 27 C 74 25.5, 75 27, 75 27 L 75 32 C 75 32, 73 31.5, 71 33 C 68 35, 64 30.5, 62 32 Z"
          fill="#5fa9c7"
        />

        {/* Stylized 'ppf' letters */}
        {/* Left 'p' */}
        <path
          d="M 25 39 L 25 61.5"
          stroke="#4a5568"
          strokeWidth="7"
          strokeLinecap="square"
        />
        <path
          d="M 25 39 C 31 39, 36 43, 36 49 C 36 55, 31 58.5, 25 58.5"
          stroke="#4a5568"
          strokeWidth="6"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Middle 'p' */}
        <path
          d="M 44.5 39 L 44.5 61.5"
          stroke="#4a5568"
          strokeWidth="7"
          strokeLinecap="square"
        />
        <path
          d="M 44.5 39 C 50.5 39, 55.5 43, 55.5 49 C 55.5 55, 50.5 58.5, 44.5 58.5"
          stroke="#4a5568"
          strokeWidth="6"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Right 'F' */}
        <path
          d="M 64.5 39 L 64.5 61.5"
          stroke="#4a5568"
          strokeWidth="7"
          strokeLinecap="square"
        />
        <path
          d="M 64.5 39 L 77.5 39"
          stroke="#4a5568"
          strokeWidth="6.5"
          strokeLinecap="square"
        />
        <path
          d="M 64.5 49.5 L 75 49.5"
          stroke="#4a5568"
          strokeWidth="6.5"
          strokeLinecap="square"
        />
      </svg>
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
