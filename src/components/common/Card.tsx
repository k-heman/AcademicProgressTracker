import type { ReactNode, MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

// ────────────────────────────────────────────────────────────
// Card — Glass-morphism card with optional hover lift
// ────────────────────────────────────────────────────────────

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  padding?: string;
}

export function Card({
  children,
  className = '',
  hover = true,
  onClick,
  padding = 'p-6',
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: hover ? -4 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-card ${padding} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
