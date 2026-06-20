import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="eyebrow text-terracotta">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-charcoal md:text-5xl">
        This stone hasn&apos;t been cut yet.
      </h1>
      <p className="mt-4 max-w-sm text-ink-soft">
        The page you're looking for doesn't exist. Let's get you back on
        solid ground.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </section>
  );
}
