"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { products } from "@/lib/site.config";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // TODO: wire this up to a real submission endpoint — e.g. a Next.js
    // Route Handler that emails the team, or a service like Formspree /
    // Resend / Web3Forms. For now this simulates a network request so
    // the UX (loading → success state) is fully built and ready to wire.
    const formData = new FormData(e.currentTarget);
    void formData;

    await new Promise((res) => setTimeout(res, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center border border-olive/30 bg-olive/5 px-8 py-16 text-center"
      >
        <CheckCircle2 className="size-12 text-olive" strokeWidth={1.5} />
        <h3 className="mt-5 font-display text-2xl font-medium text-charcoal">
          Quote request received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">
          We'll review your project details and get back to you within one
          business day. For anything urgent, call us directly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required placeholder="Jane Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(423) 555-0100"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@email.com"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="product">Interested In</Label>
          <select
            id="product"
            name="product"
            className="flex h-12 w-full border border-ink/20 bg-cream px-4 text-sm text-ink transition-colors focus-visible:border-terracotta"
            defaultValue=""
          >
            <option value="" disabled>
              Select a product
            </option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Project Location</Label>
          <Input
            id="location"
            name="location"
            placeholder="City, TN"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project — approximate square footage, timeline, and anything else that helps us quote accurately."
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="samples"
          name="samples"
          className="size-4 accent-terracotta"
        />
        <Label htmlFor="samples" className="font-normal normal-case tracking-normal">
          Also send me material samples
        </Label>
      </div>

      <Button
        type="submit"
        size="lg"
        variant="dark"
        className="w-full"
        disabled={status === "submitting"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </motion.span>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Request a Quote
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      <p className="text-center text-xs text-ink-soft">
        We typically respond within one business day.
      </p>
    </form>
  );
}
