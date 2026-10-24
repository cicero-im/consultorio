import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-300 font-sans tracking-wide text-sm font-bold uppercase disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-brand-primary border border-transparent",
    outline: "bg-transparent text-brand-dark border border-brand-dark hover:bg-brand-dark hover:text-white",
    gold: "bg-brand-accent text-brand-dark hover:bg-white hover:border-brand-accent border border-transparent hover:text-brand-accent",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};