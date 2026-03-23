import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'font-roboto font-medium rounded-lg transition-all duration-200 cursor-pointer uppercase tracking-wide';

  const variantStyles = {
    primary: 'bg-remigo-red text-white hover:bg-[#c63333] active:scale-[0.98]',
    secondary: 'bg-transparent border-2 border-remigo-red text-remigo-red hover:bg-remigo-red hover:text-white',
    tertiary: 'bg-transparent text-remigo-red hover:underline',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};
