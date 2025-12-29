'use client';

import { useEffect } from "react";
import { loadGaScript } from "@/lib/analytics";

export function AnalyticsLoader() {
  useEffect(() => {
    loadGaScript(process.env.NEXT_PUBLIC_GA_ID);
  }, []);

  return null;
}
