import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Subject } from '@/types';
import { Badge } from '@/components/common';
import { GRADE_COLORS } from '@/constants';

interface SubjectCardProps {
  subject: Subject;
  delay?: number;
}

export default function SubjectCard({ subject, delay = 0 }: SubjectCardProps) {
  const getTypeVariant = (type: Subject['type']) => {
    switch (type) {
      case 'Theory':
        return 'info';
      case 'Lab':
        return 'success';
      case 'Project':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getGradeColor = (grade: string) => {
    return GRADE_COLORS[grade] || 'var(--text-primary)';
  };

  return (
    <Link to={`/subject/${subject.id}`} className="block">
      <motion.div
        className="glass-card p-6 flex flex-col justify-between h-full cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        <div>
          <div className="flex justify-between items-start gap-2 mb-2">
            <h4 className="font-bold text-lg text-[var(--text-primary)] truncate" title={subject.name}>
              {subject.name}
            </h4>
            <Badge variant={getTypeVariant(subject.type)}>{subject.type}</Badge>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded">
            {subject.code}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 my-6 text-sm">
          <div>
            <span className="text-xs text-[var(--text-muted)] block">Credits</span>
            <span className="font-semibold text-[var(--text-secondary)]">{subject.credits} Credits</span>
          </div>
          <div>
            <span className="text-xs text-[var(--text-muted)] block">Marks</span>
            <span className="font-semibold text-[var(--text-secondary)]">
              {subject.totalMarks} / 100
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[var(--border-color)] pt-4 mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-[var(--text-muted)]">Result</span>
            <Badge variant={subject.result === 'Pass' ? 'success' : 'danger'}>{subject.result}</Badge>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-[var(--text-muted)]">Grade</span>
            <span
              className="text-2xl font-extrabold"
              style={{ color: getGradeColor(subject.grade) }}
            >
              {subject.grade}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
