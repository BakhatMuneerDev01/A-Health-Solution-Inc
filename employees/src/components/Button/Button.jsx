import React from "react";

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false, 
  type = 'button',
  className = '',
  ...props 
}) => {
  // Base classes for all buttons
  const baseClasses = "border-none cursor-pointer font-medium transition-all duration-300 ease-in-out inline-flex items-center justify-center no-underline";
  
  // Variant classes
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400 disabled:hover:bg-gray-300"
  };
  
  // Size classes
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-5 py-2.5 text-sm",
    large: "px-7 py-3.5 text-base"
  };
  
  // Disabled state
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "";
  
  // Combine all classes
  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;