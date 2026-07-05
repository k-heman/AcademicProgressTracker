import { useParams, useNavigate } from 'react-router-dom';
import { AlertCircle, Hash, FileText, FileCheck, Calculator, Award, CheckCircle } from 'lucide-react';
import { getSubjectById } from '@/services/mockData';
import { GRADE_COLORS } from '@/constants';
import PageTransition from '@/components/layout/PageTransition';
import { Breadcrumb, EmptyState, Badge, StatCard, ProgressBar } from '@/components/common';

export default function SubjectDetails() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();

  const data = subjectId ? getSubjectById(subjectId) : undefined;

  if (!data) {
    return (
      <PageTransition>
        <div className="py-12 max-w-7xl mx-auto px-6">
          <EmptyState
            icon={AlertCircle}
            title="Subject Not Found"
            description="The requested subject details could not be found."
            action={{
              label: 'Go Home',
              onClick: () => navigate('/'),
            }}
          />
        </div>
      </PageTransition>
    );
  }

  const { subject, semester, year } = data;

  const getTypeVariant = (type: typeof subject.type) => {
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
    <PageTransition>
      <div className="py-12 max-w-5xl mx-auto px-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: year.name, href: `/${year.slug}` },
            { label: semester.name, href: `/semester/${semester.id}` },
            { label: subject.name },
          ]}
        />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold gradient-text flex items-center gap-3">
              {subject.name}
            </h1>
            <p className="text-[var(--text-secondary)] mt-1 font-mono text-sm bg-[var(--bg-secondary)] inline-block px-3 py-1 rounded border border-[var(--border-color)]">
              Subject Code: {subject.code}
            </p>
          </div>
          <Badge variant={getTypeVariant(subject.type)} size="md">
            {subject.type}
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={Hash}
            label="Credits"
            value={subject.credits}
            delay={0}
          />
          <StatCard
            icon={FileText}
            label="Internal Marks"
            value={`${subject.internalMarks} / 40`}
            delay={0.05}
          />
          <StatCard
            icon={FileCheck}
            label="External Marks"
            value={`${subject.externalMarks} / 60`}
            delay={0.1}
          />
          <StatCard
            icon={Calculator}
            label="Total Marks"
            value={`${subject.totalMarks} / 100`}
            delay={0.15}
          />
          <StatCard
            icon={Award}
            label="Grade Obtained"
            value={subject.grade}
            delay={0.2}
            className="border-2 border-primary-500/20"
          />
          <StatCard
            icon={CheckCircle}
            label="Result"
            value={subject.result}
            delay={0.25}
          />
        </div>

        {/* Performance Visualization Card */}
        <div className="glass-card p-8 mb-12 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="w-full md:w-2/3">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Performance Indicator</h3>
            <ProgressBar
              value={subject.totalMarks}
              label="Cumulative Score (Internal + External)"
              showPercentage={true}
              height={12}
            />
            <p className="text-xs text-[var(--text-muted)] mt-4">
              Passing criteria requires a minimum of 40% aggregate in the subject. Internal marks carry 40% weightage, and External semester examinations carry 60%.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 border-l border-[var(--border-color)] pl-12">
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Final Grade</span>
            <div
              className="text-7xl md:text-8xl font-black mt-2 leading-none"
              style={{ color: getGradeColor(subject.grade) }}
            >
              {subject.grade}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
