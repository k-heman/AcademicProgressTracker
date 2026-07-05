import { useParams, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { getSemesterById } from '@/services/mockData';
import PageTransition from '@/components/layout/PageTransition';
import { Breadcrumb, EmptyState, Badge } from '@/components/common';
import SGPACard from '@/components/semester/SGPACard';
import CGPACard from '@/components/semester/CGPACard';
import SemesterSummary from '@/components/semester/SemesterSummary';
import SubjectTable from '@/components/semester/SubjectTable';

export default function SemesterDetails() {
  const { semesterId } = useParams<{ semesterId: string }>();
  const navigate = useNavigate();

  const data = semesterId ? getSemesterById(semesterId) : undefined;

  if (!data) {
    return (
      <PageTransition>
        <div className="py-12 max-w-7xl mx-auto px-6">
          <EmptyState
            icon={AlertCircle}
            title="Semester Not Found"
            description="The requested semester could not be found."
            action={{
              label: 'Go Home',
              onClick: () => navigate('/'),
            }}
          />
        </div>
      </PageTransition>
    );
  }

  const { semester, year } = data;

  const getStatusVariant = (status: string) => {
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
    <PageTransition>
      <div className="py-12 max-w-7xl mx-auto px-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: year.name, href: `/${year.slug}` },
            { label: semester.name },
          ]}
        />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mt-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold gradient-text flex items-center gap-3">
              {semester.name}
            </h1>
            <p className="text-[var(--text-secondary)] mt-1">
              Detailed review of subject marks, credits, and GPA.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant={getStatusVariant(semester.status)} size="md">
              {semester.status}
            </Badge>
          </div>
        </div>

        {/* GPA Cards row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <SGPACard sgpa={semester.sgpa} />
          <CGPACard cgpa={semester.cgpa} />
        </div>

        {/* Summary grid */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Semester Statistics</h2>
          <SemesterSummary semester={semester} />
        </div>

        {/* Subjects list */}
        <div>
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Subject Wise Results</h2>
          <SubjectTable subjects={semester.subjects} />
        </div>
      </div>
    </PageTransition>
  );
}
