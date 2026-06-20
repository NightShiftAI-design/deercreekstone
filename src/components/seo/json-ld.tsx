/**
 * JsonLd
 * ─────────────────────────────────────────────────────────
 * Renders a <script type="application/ld+json"> tag for any
 * schema.org structured data object. Server-renderable (no
 * "use client" needed) since it's pure data serialization.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
