import React from "react";

interface TagProps {
  label: string;
  variant?: "default" | "secondary";
  className?: string;
}

export default function Tag({
  label,
  variant = "default",
  className = "",
}: TagProps) {
  const baseStyles = "inline-block rounded-full px-3 py-1 text-sm font-medium";
  const variantStyles = {
    default: "border border-zinc-300 text-zinc-700 bg-white",
    secondary: "bg-zinc-100 text-zinc-800",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {label}
    </span>
  );
}
