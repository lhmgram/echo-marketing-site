import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-md">
      {children}
    </div>
  );
}
