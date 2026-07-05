import { motion } from 'framer-motion';

// ────────────────────────────────────────────────────────────
// ProgressBar — Animated horizontal progress indicator
// ────────────────────────────────────────────────────────────

export interface ProgressBarProps {
  value: number; // 0 – 100
  label?: string;
  showPercentage?: boolean;
  className?: string;
  color?: string;
  height?: number;
}

export function ProgressBar({
  value,
  label,
  showPercentage = true,
  className = '',
  color,
  height = 8,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={className}>
      {/* Label + percentage header */}
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              {clampedValue}%
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        className="w-full rounded-full overflow-hidden"
        style={{
          height: `${height}px`,
          backgroundColor: 'var(--bg-secondary)',
        }}
      >
        {/* Fill */}
        <motion.div
          className="h-full rounded-full"
          style={{
            background: color ?? 'linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
