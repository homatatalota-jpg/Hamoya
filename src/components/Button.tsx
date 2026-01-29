import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-black hover:brightness-110 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]",
  secondary:
    "border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_45%)] text-[var(--text)] hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)]",
  ghost: "text-[var(--text)] hover:bg-[var(--surface)]",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
