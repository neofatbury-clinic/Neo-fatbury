
export default function CustomSchema({ schema }: { schema: string | null | undefined }) {
  if (!schema) return null;

  // Clean the schema string (ensure it doesn't contain <script> tags if user accidentally pastes them)
  const cleanSchema = schema.replace(/<\/?script[^>]*>/gi, '').trim();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: cleanSchema }}
    />
  );
}
