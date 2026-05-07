import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background shadow-sm hover:bg-accent-strong hover:text-background",
  secondary:
    "border border-[color:var(--border)] bg-surface text-foreground hover:border-[color:var(--accent)] hover:text-accent-strong",
  ghost: "text-foreground hover:bg-surface hover:text-accent-strong",
};

type ActionLinkProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export function ActionLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ActionLinkProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

type ActionButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function ActionButton({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...rest
}: ActionButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}