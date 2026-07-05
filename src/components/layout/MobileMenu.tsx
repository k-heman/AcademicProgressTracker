import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { useLockBodyScroll } from '@/hooks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
} as const;

const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
} as const;

const linkItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20 } },
} as const;

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  useLockBodyScroll(isOpen);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-[var(--bg-primary)] shadow-2xl"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <div className="flex items-center justify-end p-5">
              <button
                onClick={onClose}
                className="rounded-xl p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-color)] hover:text-[var(--text-primary)]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <motion.nav
              className="flex flex-1 flex-col gap-1 px-4"
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.href} variants={linkItemVariants}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-all ${
                      isActive(item.href)
                        ? 'gradient-text bg-primary-500/10'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--border-color)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Bottom brand */}
            <div className="border-t border-[var(--border-color)] p-5">
              <p className="text-center text-xs text-[var(--text-muted)]">
                Academic Progress Tracker
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
