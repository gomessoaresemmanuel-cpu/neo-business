import clsx from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={clsx(
        "w-full rounded-md border border-border-base bg-surface-muted px-4 py-3 text-sm text-text-high placeholder:text-text-muted/70 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        className
      )}
      {...props}
    />
  );
}
