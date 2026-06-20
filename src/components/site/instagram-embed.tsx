"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

/**
 * InstagramEmbed
 * ─────────────────────────────────────────────────────────
 * Renders a real Instagram post using Meta's official public
 * embed widget (blockquote + embed.js) — no API key or app
 * review required, unlike the oEmbed REST endpoint.
 *
 * To add more posts to the strip, add permalinks to
 * `site.instagramPosts` in site.config.ts — no other changes needed.
 */
export function InstagramEmbed({ permalink }: { permalink: string }) {
  useEffect(() => {
    // If embed.js already loaded (e.g. multiple embeds on the page),
    // re-trigger processing so this instance renders too.
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          margin: 0,
          width: "100%",
        }}
      >
        <a href={permalink} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={() => window.instgrm?.Embeds.process()}
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </>
  );
}
