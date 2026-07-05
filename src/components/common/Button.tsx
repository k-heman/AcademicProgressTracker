import { type ButtonHTMLAttributes, type ElementType } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// ────────────────────────────────────────────────────────────
// Button — Animated, variant-driven button component
// ────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: ElementType;
  loading?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5 rounded-lg',
  md: 'px-5 py-2.5 text-sm gap-2 rounded-xl',
  lg: 'px-7 py-3.5 text-base gap-2.5 rounded-xl',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'gradient-bg text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
  secondary:
    'border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10',
  ghost:
    'bg-transparent hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
  onClick,
  icon: Icon,
  loading = false,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      whileHover={isDisabled ? undefined : { scale: 1.02 }}
      whileTap={isDisabled ? undefined : { scale: 0.98 }}
      className={`
        inline-flex items-center justify-center font-semibold
        transition-all duration-200 cursor-pointer
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={isDisabled}
      onClick={onClick}
      {...(rest as any)}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={size === 'sm' ? 14 : size === 'md' ? 16 : 20} />
      ) : Icon ? (
        <Icon size={size === 'sm' ? 14 : size === 'md' ? 16 : 20} />
      ) : null}
      {children}
    </motion.button>
  );
}
