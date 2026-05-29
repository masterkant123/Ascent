import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <SectionLabel>404</SectionLabel>
      <h1 className="text-4xl font-semibold tracking-tight text-charcoal">Page not found</h1>
      <p className="mt-4 text-base text-stone max-w-sm">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-cream transition-all hover:bg-charcoal/90"
      >
        Back to home
      </Link>
    </div>
  );
}
