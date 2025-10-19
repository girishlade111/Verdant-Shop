export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose dark:prose-invert">
            {children}
        </div>
    </div>
  );
}
