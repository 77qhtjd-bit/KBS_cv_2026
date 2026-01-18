import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hoverable = false,
  onClick,
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-zinc-200 p-4 ${
        hoverable ? "cursor-pointer transition-colors hover:bg-zinc-50" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
