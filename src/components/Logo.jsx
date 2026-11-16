export default function Logo({ className = "logo" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b3df5" />
          <stop offset="1" stopColor="#ff3d86" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#lg)" />
      <path d="M11 30 20 10l9 20" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M17.5 27v-6l5.2 3z" fill="#fff" />
    </svg>
  );
}
