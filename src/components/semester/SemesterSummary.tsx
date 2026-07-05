import { BookOpen, FileText, FlaskConical, Award, TrendingUp, BarChart3 } from 'lucide-react';
import type { Semester } from '@/types';
import { StatCard } from '@/components/common';

interface SemesterSummaryProps {
  semester: Semester;
}

export default function SemesterSummary({ semester }: SemesterSummaryProps) {
  const theoryCount = semester.subjects.filter((s) => s.type === 'Theory').length;
  const labCount = semester.subjects.filter((s) => s.type === 'Lab').length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <StatCard
        icon={BookOpen}
        label="Total Subjects"
        value={semester.subjects.length}
        delay={0}
      />
      <StatCard
        icon={FileText}
        label="Theory"
        value={theoryCount}
        delay={0.05}
      />
      <StatCard
        icon={FlaskConical}
        label="Labs"
        value={labCount}
        delay={0.1}
      />
      <StatCard
        icon={Award}
        label="Credits Earned"
        value={semester.earnedCredits}
        delay={0.15}
      />
      <StatCard
        icon={TrendingUp}
        label="Semester GPA"
        value={semester.sgpa.toFixed(2)}
        delay={0.2}
      />
      <StatCard
        icon={BarChart3}
        label="Cumulative GPA"
        value={semester.cgpa.toFixed(2)}
        delay={0.25}
      />
    </div>
  );
}
