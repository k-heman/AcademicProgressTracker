import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { getAcademicYearBySlug, sgpaTrendData } from '@/services/mockData';
import PageTransition from '@/components/layout/PageTransition';
import { Breadcrumb, EmptyState, Badge } from '@/components/common';
import SemesterCard from '@/components/semester/SemesterCard';
import SGPATrendChart from '@/components/charts/SGPATrendChart';

interface SemesterOverviewProps {
  yearSlug: string;
}

export default function SemesterOverview({ yearSlug }: SemesterOverviewProps) {
  const yearData = getAcademicYearBySlug(yearSlug);

  if (!yearData) {
    return (
      <PageTransition>
        <div className="py-12 max-w-7xl mx-auto px-6">
          <EmptyState
            icon={AlertTriangle}
            title="Year Not Found"
            description={`Academic Year "${yearSlug}" could not be retrieved from our data.`}
          />
        </div>
      </PageTransition>
    );
  }

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

  // Filter SGPA trend data specifically for this year's semesters
  // Semester name in yearData.semesters would look like "E1 - Semester 1"
  // SgpaTrendData has "E1-S1", "E1-S2", etc.
  const filteredTrendData = sgpaTrendData.filter((item) =>
    item.semester.toLowerCase().startsWith(yearData.shortName.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="py-12 max-w-7xl mx-auto px-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: yearData.name },
          ]}
        />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{yearData.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold gradient-text flex items-center gap-2">
                {yearData.name} Overview
              </h1>
              <p className="text-[var(--text-secondary)] mt-1">
                View results and breakdown of semesters.
              </p>
            </div>
          </div>
          <Badge variant={getStatusVariant(yearData.status)} size="md">
            {yearData.status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {yearData.semesters.map((sem, idx) => (
            <SemesterCard key={sem.id} semester={sem} delay={idx * 0.1} />
          ))}
        </div>

        {filteredTrendData.length > 0 && (
          <div className="mt-12">
            <SGPATrendChart data={filteredTrendData} height={250} />
          </div>
        )}
      </div>
    </PageTransition>
  );
}
