const SpiderIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      {/* Spider body */}
      <ellipse cx="50" cy="55" rx="15" ry="20" />
      <circle cx="50" cy="30" r="12" />
      
      {/* Legs - left side */}
      <path d="M38 35 Q20 25 5 15" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M35 45 Q15 40 0 35" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M35 55 Q15 60 0 65" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M38 65 Q20 75 5 90" stroke="currentColor" strokeWidth="3" fill="none" />
      
      {/* Legs - right side */}
      <path d="M62 35 Q80 25 95 15" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M65 45 Q85 40 100 35" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M65 55 Q85 60 100 65" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M62 65 Q80 75 95 90" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  );
};

export default SpiderIcon;
