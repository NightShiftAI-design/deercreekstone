import { cn } from "@/lib/utils";
import { Mountain } from "lucide-react";

/**
 * PlaceholderImage
 * ─────────────────────────────────────────────────────────
 * Drop-in stand-in for real photography. Renders a styled
 * textured block with a label so the client can see exactly
 * which image slot needs a real photo before launch.
 *
 * TO REPLACE: once real photos are available, swap usages of
 * <PlaceholderImage label="..." /> for <Image src="..." ... />
 * from "next/image". Keep the same aspect-ratio wrapper.
 */
export function PlaceholderImage({
  label,
  className,
  variant = "stone",
}: {
  label: string;
  className?: string;
  variant?: "stone" | "dark" | "warm";
}) {
  const variants = {
    stone:
      "bg-[linear-gradient(135deg,#d9c7a8_0%,#c2ac86_45%,#a9926d_100%)]",
    dark: "bg-[linear-gradient(135deg,#3a342c_0%,#2b2620_50%,#1c1814_100%)]",
    warm: "bg-[linear-gradient(135deg,#c2693c_0%,#a3502b_60%,#7a3a1f_100%)]",
  };

  const isDark = variant !== "stone";

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        variants[variant],
        className
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 2px, transparent 2px, transparent 14px)",
        }}
      />
      <div
        className={cn(
          "relative flex flex-col items-center gap-2 px-6 text-center",
          isDark ? "text-cream/70" : "text-ink/60"
        )}
      >
        <Mountain className="size-6" strokeWidth={1.5} />
        <span className="eyebrow text-[10px]">{label}</span>
      </div>
    </div>
  );
}
