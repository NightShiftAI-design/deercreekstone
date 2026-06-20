import { cn } from "@/lib/utils";

/** The site's signature element: thin sediment-layer bands echoing
 * the cut face of stratified stone. Used between major sections
 * in place of generic gradient blurs or whitespace alone. */
export function StrataDivider({ className }: { className?: string }) {
  return (
    <div className={cn("strata-divider", className)} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
