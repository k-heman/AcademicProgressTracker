import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Subject } from '@/types';
import { Badge } from '@/components/common';
import SubjectCard from './SubjectCard';
import { GRADE_COLORS } from '@/constants';

interface SubjectTableProps {
  subjects: Subject[];
}

export default function SubjectTable({ subjects }: SubjectTableProps) {
  const navigate = useNavigate();

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
    <div>
      {/* Desktop view (table) */}
      <div className="hidden md:block overflow-x-auto glass-card rounded-xl border border-[var(--border-color)]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
              <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Subject</th>
              <th className="p-4 text-sm font-semibold text-[var(--text-muted)]">Type</th>
              <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-center">Credits</th>
              <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-center">Internal</th>
              <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-center">External</th>
              <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-center">Total</th>
              <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-center">Grade</th>
              <th className="p-4 text-sm font-semibold text-[var(--text-muted)] text-center">Result</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, idx) => (
              <motion.tr
                key={subject.id}
                onClick={() => navigate(`/subject/${subject.id}`)}
                className="border-b border-[var(--border-color)] last:border-b-0 hover:bg-primary-50/50 dark:hover:bg-primary-950/20 cursor-pointer transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-[var(--text-primary)]">{subject.name}</span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">{subject.code}</span>
                  </div>
                </td>
                <td className="p-4">
                  <Badge variant={getTypeVariant(subject.type)}>{subject.type}</Badge>
                </td>
                <td className="p-4 text-center font-medium text-[var(--text-secondary)]">{subject.credits}</td>
                <td className="p-4 text-center font-mono text-[var(--text-secondary)]">{subject.internalMarks}</td>
                <td className="p-4 text-center font-mono text-[var(--text-secondary)]">{subject.externalMarks}</td>
                <td className="p-4 text-center font-bold font-mono text-[var(--text-secondary)]">{subject.totalMarks}</td>
                <td className="p-4 text-center">
                  <span className="font-extrabold text-lg" style={{ color: getGradeColor(subject.grade) }}>
                    {subject.grade}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <Badge variant={subject.result === 'Pass' ? 'success' : 'danger'}>{subject.result}</Badge>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view (grid of cards) */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {subjects.map((subject, idx) => (
          <SubjectCard key={subject.id} subject={subject} delay={idx * 0.05} />
        ))}
      </div>
    </div>
  );
}
