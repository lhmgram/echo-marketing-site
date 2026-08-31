import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-green text-white hover:bg-brand-green-hover",
  secondary:
    "border border-brand-dark text-brand-dark hover:bg-brand-green-tint",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none";

export function Button({
  href,
  variant = "primary",
  children,
  ...props
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
