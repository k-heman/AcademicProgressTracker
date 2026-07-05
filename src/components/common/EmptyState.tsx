import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

// ────────────────────────────────────────────────────────────
// EmptyState — Illustrated placeholder for empty views
// ────────────────────────────────────────────────────────────

export interface EmptyStateProps {
  icon: ElementType;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <div className="mb-5 p-4 rounded-2xl bg-[var(--bg-secondary)]">
        <Icon size={48} className="text-[var(--text-muted)]" />
      </div>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
        {title}
      </h3>

      <p className="text-sm text-[var(--text-secondary)] max-w-sm mb-6">
        {description}
      </p>

      {action && (
        <Button variant="primary" size="md" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </motion.div>
  );
}
