export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-[0.15em] uppercase text-bark mb-4">
      {children}
    </p>
  );
}
