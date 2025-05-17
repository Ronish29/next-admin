import themeConfig from "@/config/themeConfig";
import React from "react";

const theme = themeConfig();

const Button = ({
  children,
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  disabled = false,
}) => {
  // Variant Classes as an object
  const variantClasses = {
    primary: {
      backgroundColor: theme.primary,
      color: theme.secondary,
    },
    secondary: {
      backgroundColor: theme.secondary,
      color: theme.primary,
    },
  };

  return (
    <button
      style={variantClasses[variant]}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center ml-2">{endIcon}</span>}
    </button>
  );
};

export default Button;
