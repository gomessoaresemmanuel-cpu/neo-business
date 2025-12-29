'use client';

import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = PropsWithChildren<LinkProps & { className?: string }>;

export function AffiliateLink({ children, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        trackEvent("affiliate_click", { slug: props.href.toString() });
      }}
    >
      {children}
    </Link>
  );
}
