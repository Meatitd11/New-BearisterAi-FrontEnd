import React from "react";

function Badge({ children, variant = "default", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0";

  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
    destructive: "bg-red-600 text-white",
    outline: "border border-gray-300 text-gray-700",
  };

  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}

export { Badge };
