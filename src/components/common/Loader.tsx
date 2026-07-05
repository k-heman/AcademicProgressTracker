// ────────────────────────────────────────────────────────────
// Loader — Gradient-stroke spinning SVG indicator
// ────────────────────────────────────────────────────────────

type LoaderSize = 'sm' | 'md' | 'lg';

export interface LoaderProps {
  size?: LoaderSize;
  className?: string;
}

const sizePx: Record<LoaderSize, number> = {
  sm: 24,
  md: 40,
  lg: 64,
};

export function Loader({ size = 'md', className = '' }: LoaderProps) {
  const px = sizePx[size];
  const strokeWidth = size === 'sm' ? 3 : size === 'md' ? 3.5 : 4;
  const radius = (px - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gradientId = `loader-gradient-${size}`;

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={px}
        height={px}
        viewBox={`0 0 ${px} ${px}`}
        className="animate-spin"
        style={{ animationDuration: '1s' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={px / 2}
          cy={px / 2}
          r={radius}
          fill="none"
          stroke="var(--border-color)"
          strokeWidth={strokeWidth}
        />

        {/* Animated arc */}
        <circle
          cx={px / 2}
          cy={px / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.7}
        />
      </svg>
    </div>
  );
}
