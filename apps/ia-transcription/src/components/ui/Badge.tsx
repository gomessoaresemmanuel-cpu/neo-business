import clsx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ variant?: "default" | "success" | "warning" | "outline"; className?: string }>;

export function Badge({ variant = "default", className, children }: Props) {
  const variants = {
    default: "bg-primary/20 text-primary border border-primary/40",
    success: "bg-success/15 text-success border border-success/40",
    warning: "bg-warning/15 text-warning border border-warning/40",
    outline: "border border-border-subtle text-text-high"
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
