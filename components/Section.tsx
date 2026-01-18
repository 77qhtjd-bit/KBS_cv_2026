import React from "react";

interface SectionProps {
  title: string;
  emoji?: string;
  children: React.ReactNode;
}

export default function Section({ title, emoji, children }: SectionProps) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold tracking-tight">
        {emoji && <span className="mr-2">{emoji}</span>}
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
