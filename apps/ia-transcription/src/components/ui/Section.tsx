import clsx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  eyebrow?: string;
}>;

export function Section({ id, title, subtitle, eyebrow, className, children }: Props) {
  return (
    <section id={id} className={clsx("py-16 md:py-20", className)}>
      <div className="container max-w-[1200px]">
        {(title || subtitle || eyebrow) && (
          <div className="mb-8 space-y-2">
            {eyebrow && <p className="text-xs uppercase tracking-[0.12em] text-primary">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-semibold leading-tight text-text-high md:text-[2.25rem]">{title}</h2>}
            {subtitle && <p className="max-w-3xl text-lg text-text-muted">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
