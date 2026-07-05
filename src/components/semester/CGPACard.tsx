import { motion } from 'framer-motion';

interface CGPACardProps {
  cgpa: number;
  label?: string;
  className?: string;
}

export default function CGPACard({ cgpa, label = 'Cumulative GPA', className = '' }: CGPACardProps) {
  return (
    <motion.div
      className={`glass-card p-6 flex flex-col items-center justify-center text-center h-full ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* SVG with different secondary gradient mapping */}
      <div className="relative flex items-center justify-center mb-4" style={{ width: 110, height: 110 }}>
        <svg className="transform -rotate-90 origin-center" width={110} height={110} viewBox="0 0 110 110">
          <circle
            className="stroke-[var(--border-color)] fill-none"
            cx={55}
            cy={55}
            r={48}
            strokeWidth={9}
          />
          <motion.circle
            className="fill-none"
            cx={55}
            cy={55}
            r={48}
            strokeWidth={9}
            stroke="url(#cgpaGradient)"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 48}
            initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 48 - (cgpa / 10) * (2 * Math.PI * 48) }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-base font-extrabold text-[var(--text-primary)]">
          {cgpa.toFixed(2)}
        </span>
      </div>
      <h4 className="text-sm font-semibold text-[var(--text-muted)] tracking-wider uppercase">{label}</h4>
      <div className="text-3xl font-extrabold gradient-text-warm mt-1">{cgpa.toFixed(2)}</div>
    </motion.div>
  );
}
