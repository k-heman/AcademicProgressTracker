import type { ReactNode } from 'react';

// ────────────────────────────────────────────────────────────
// Badge — Color-coded pill for status / tag display
// ────────────────────────────────────────────────────────────

type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'default';
type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  success: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  warning: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  danger: 'bg-red-500/15 text-red-600 dark:text-red-400',
  info: 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
  default: 'bg-gray-500/15 text-gray-600 dark:text-gray-400',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium leading-none
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
