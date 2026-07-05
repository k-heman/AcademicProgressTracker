import { motion } from 'framer-motion';
import ProgressCircle from './ProgressCircle';

interface SGPACardProps {
  sgpa: number;
  label?: string;
}

export default function SGPACard({ sgpa, label = 'Semester GPA' }: SGPACardProps) {
  return (
    <motion.div
      className="glass-card p-6 flex flex-col items-center justify-center text-center h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProgressCircle value={sgpa} maxValue={10} size={110} strokeWidth={9} className="mb-4" />
      <h4 className="text-sm font-semibold text-[var(--text-muted)] tracking-wider uppercase">{label}</h4>
      <div className="text-3xl font-extrabold gradient-text mt-1">{sgpa.toFixed(2)}</div>
    </motion.div>
  );
}
