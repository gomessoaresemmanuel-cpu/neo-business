import clsx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  eyebrow?: string;
  title?: string;
  actions?: React.ReactNode;
}>;

export function Card({ className, children, eyebrow, title, actions }: Props) {
  return (
    <div className={clsx("rounded-lg border border-border-subtle bg-surface-card/80 p-6 shadow-sm", className)}>
      {(eyebrow || title || actions) && (
        <header className="mb-4 flex items-start justify-between gap-3">
          <div>
            {eyebrow && <div className="text-xs uppercase tracking-wide text-text-muted">{eyebrow}</div>}
            {title && <h3 className="text-lg font-semibold text-text-high">{title}</h3>}
          </div>
          {actions}
        </header>
      )}
      <div className="text-sm text-text-muted">{children}</div>
    </div>
  );
}
