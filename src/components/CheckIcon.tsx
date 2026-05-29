export default function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 flex-shrink-0 text-bark ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}
