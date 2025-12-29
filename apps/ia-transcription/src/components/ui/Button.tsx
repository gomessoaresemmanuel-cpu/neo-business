import clsx from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  asChild?: boolean;
};

export function Button({ variant = "primary", icon, className, asChild, children, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-text-dark hover:bg-primary-dark shadow-md focus-visible:ring-primary/50 disabled:bg-primary/40 disabled:cursor-not-allowed",
    secondary:
      "bg-surface-card text-text-high border border-border-base hover:border-primary hover:text-primary focus-visible:ring-primary/50 disabled:opacity-60",
    ghost:
      "text-text-high hover:text-primary hover:bg-surface-muted/60 border border-transparent focus-visible:ring-primary/50"
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement,
      {
        className: clsx(base, variants[variant], children.props.className, className)
      },
      <>
        {icon}
        {children.props.children}
      </>
    );
  }

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {icon}
      {children}
    </button>
  );
}
