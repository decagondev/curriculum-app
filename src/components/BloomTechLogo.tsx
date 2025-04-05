import React from 'react';

interface BloomTechLogoProps {
  className?: string;
}

const BloomTechLogo: React.FC<BloomTechLogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 160 160" 
        fill="none" 
        className="h-full"
      >
        <path 
          d="M80 0L0 45v70l80 45 80-45V45L80 0z" 
          fill="#FF4500"
        />
        <path 
          d="M80 32L26 63v64l54 31 54-31V63L80 32z" 
          fill="#161B25"
        />
      </svg>
      <span className="ml-3 text-2xl font-bold text-text-primary">BloomTech</span>
    </div>
  );
};

export default BloomTechLogo; 