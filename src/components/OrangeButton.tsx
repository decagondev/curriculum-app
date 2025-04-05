import React from 'react';

interface OrangeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ 
  children, 
  className = '',
  ...rest // Spread the rest of the props (like type, disabled, etc.)
}) => {
  return (
    <button
      {...rest} // Apply the rest of the props here
      className={`bg-accent hover:bg-bloomOrange-600 active:bg-bloomOrange-700 text-white font-medium py-2 px-4 rounded transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default OrangeButton; 