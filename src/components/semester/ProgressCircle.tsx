import { motion } from 'framer-motion';

interface ProgressCircleProps {
  value: number;
  maxValue?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export default function ProgressCircle({
  value,
  maxValue = 10,
  size = 80,
  strokeWidth = 6,
  className = '',
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / maxValue) * circumference;

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg className="transform -rotate-90 origin-center" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          className="stroke-[var(--border-color)] fill-none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          className="fill-none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="url(#progressGradient)"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center text */}
      <span className="absolute text-sm font-bold text-[var(--text-primary)]">
        {value.toFixed(2)}
      </span>
    </div>
  );
}
