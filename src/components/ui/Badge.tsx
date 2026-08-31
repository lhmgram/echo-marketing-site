import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-brand-green-tint px-3 py-1 text-xs font-medium text-brand-green">
      {children}
    </span>
  );
}
