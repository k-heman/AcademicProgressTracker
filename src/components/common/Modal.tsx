import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useLockBodyScroll } from '@/hooks';

// ────────────────────────────────────────────────────────────
// Modal — Animated overlay modal with glass styling
// ────────────────────────────────────────────────────────────

type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: ModalSize;
}

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 10 },
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  useLockBodyScroll(isOpen);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            className={`
              relative w-full ${sizeClasses[size]}
              glass-card p-0 overflow-hidden
            `}
            variants={modalVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
