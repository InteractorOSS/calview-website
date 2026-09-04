"use client";

import { usePathname } from "next/navigation";
import { ManagedSoftwareStrip } from "@/components/managed-software-banner";

/** Show the announcement strip everywhere except on the Managed Software page itself. */
export function ManagedSoftwareStripGate() {
  const pathname = usePathname();
  if (pathname.startsWith("/managed-software")) return null;
  return <ManagedSoftwareStrip />;
}
