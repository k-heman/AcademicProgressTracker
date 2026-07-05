import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

// ────────────────────────────────────────────────────────────
// ThemeToggle — Animated light / dark mode switch
// ────────────────────────────────────────────────────────────

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="
        relative p-2.5 rounded-xl cursor-pointer
        bg-[var(--bg-secondary)] hover:bg-[var(--border-color)]
        text-[var(--text-primary)]
        transition-colors duration-200
      "
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
