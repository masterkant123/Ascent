export function AscentMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 14 100 84"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M18 88 L50 22 L82 88"
        stroke="currentColor"
        strokeWidth="10"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function AscentInline({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`} role="img" aria-label="Ascent">
      <AscentMark className="h-5 w-5 shrink-0" />
      <span className="-ml-0.5 text-xl font-semibold leading-none translate-y-[-0.5px]">
        scent
      </span>
    </div>
  );
}

export function AscentLockup({
  markSize = 96,
  onDark = false,
}: {
  markSize?: number;
  onDark?: boolean;
}) {
  return (
    <div
      className={`inline-flex flex-col items-center ${onDark ? "text-cream" : "text-charcoal"}`}
      role="img"
      aria-label="Ascent. Build. Launch. Grow."
    >
      <AscentMark
        className="block"
        {...{ style: { width: markSize, height: markSize, marginBottom: markSize * 0.22 } }}
      />
      <span
        className="font-semibold leading-none"
        style={{
          fontSize: markSize * 0.51,
          marginBottom: markSize * 0.04,
        }}
      >
        Ascent
      </span>
      <span
        className={`font-mono uppercase ${onDark ? "text-warm" : "text-bark"}`}
        style={{
          fontSize: markSize * 0.09,
          opacity: 0.72,
        }}
      >
        Build · Launch · Grow
      </span>
    </div>
  );
}
