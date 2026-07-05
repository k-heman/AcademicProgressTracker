import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Semester } from '@/types';
import ProgressCircle from './ProgressCircle';
import { Badge } from '@/components/common';

interface SemesterCardProps {
  semester: Semester;
  delay?: number;
}

export default function SemesterCard({ semester, delay = 0 }: SemesterCardProps) {
  const getStatusVariant = (status: Semester['status']) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Link to={`/semester/${semester.id}`} className="block">
      <motion.div
        className="glass-card p-6 flex flex-col justify-between h-full cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-bold text-[var(--text-primary)]">{semester.name}</h3>
          <Badge variant={getStatusVariant(semester.status)}>{semester.status}</Badge>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8 justify-around mb-6">
          <div className="flex flex-col items-center">
            <ProgressCircle value={semester.sgpa} maxValue={10} size={100} strokeWidth={8} />
            <span className="text-xs font-semibold text-[var(--text-muted)] mt-2">Semester GPA (SGPA)</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl font-extrabold gradient-text leading-none">{semester.cgpa.toFixed(2)}</div>
            <span className="text-xs font-semibold text-[var(--text-muted)] mt-2">Cumulative GPA (CGPA)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-[var(--border-color)] pt-4 text-sm">
          <div className="flex flex-col">
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Credits</span>
            <span className="font-semibold text-[var(--text-secondary)]">{semester.earnedCredits} / {semester.totalCredits}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Subjects</span>
            <span className="font-semibold text-[var(--text-secondary)]">{semester.subjects.length} Subjects</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
