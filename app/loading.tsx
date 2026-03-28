export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--wm-surface)]">
      <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[rgba(30,55,73,0.1)]" />
      <div className="wm-scooter absolute top-1/2 -translate-y-1/2 text-[var(--wm-green)]">
        <svg aria-hidden="true" viewBox="0 0 120 64" className="h-14 w-28">
          <circle cx="26" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="84" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
          <path
            d="M26 50h28l10-18h16l4 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 24h11l4-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="mt-28 text-sm font-semibold tracking-wide text-[var(--wm-dark)]">
        Loading Wemoovemed...
      </p>
    </div>
  );
}
