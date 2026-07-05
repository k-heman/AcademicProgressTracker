import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

// ────────────────────────────────────────────────────────────
// StatCard — Key metric card with trend indicator
// ────────────────────────────────────────────────────────────

export interface StatCardProps {
  icon: ElementType;
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
  delay?: number;
}

const trendConfig = {
  up: {
    icon: ArrowUpRight,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  down: {
    icon: ArrowDownRight,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  neutral: {
    icon: Minus,
    color: 'text-[var(--text-muted)]',
    bg: 'bg-[var(--bg-secondary)]',
  },
};

export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  trendValue,
  className = '',
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className={`glass-card p-5 ${className}`}
    >
      <div className="flex items-start justify-between mb-3">
        {/* Gradient icon container */}
        <div className="gradient-bg p-2.5 rounded-xl shadow-lg shadow-primary-500/20">
          <Icon size={20} className="text-white" />
        </div>

        {/* Trend badge */}
        {trend && trendValue && (
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${trendConfig[trend].bg} ${trendConfig[trend].color}`}
          >
            {(() => {
              const TrendIcon = trendConfig[trend].icon;
              return <TrendIcon size={14} />;
            })()}
            {trendValue}
          </div>
        )}
      </div>

      <p className="text-sm text-[var(--text-muted)] mb-1">{label}</p>
      <p className="text-2xl font-bold text-[var(--text-primary)]">{value}</p>
    </motion.div>
  );
}
