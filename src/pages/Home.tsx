import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, BookOpen, Award, Star, Sparkles, BarChart3, ChevronRight } from 'lucide-react';
import { academicYears, academicStats, sgpaTrendData, gradeDistributionData } from '@/services/mockData';
import { APP_DESCRIPTION, ANIMATION_VARIANTS } from '@/constants';
import { StatCard, Button, Badge } from '@/components/common';
import SGPATrendChart from '@/components/charts/SGPATrendChart';
import GradeDistribution from '@/components/charts/GradeDistribution';

export default function Home() {
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
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={ANIMATION_VARIANTS.fadeIn}
      className="relative w-full"
    >
      {/* ── Hero Section ── */}
      <section className="min-h-[85vh] relative overflow-hidden flex items-center justify-center py-20">
        {/* Floating gradient blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400 blob blob-1" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-400 blob blob-2" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-400 blob blob-3" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
              Interactive Academic Dashboard
            </span>
          </motion.div>

          <motion.h1
            variants={ANIMATION_VARIANTS.slideUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="gradient-text text-5xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-none text-balance"
          >
            Academic Progress Tracker
          </motion.h1>

          <motion.p
            variants={ANIMATION_VARIANTS.slideUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] mt-6 max-w-2xl text-balance"
          >
            {APP_DESCRIPTION}
          </motion.p>

          <motion.div
            variants={ANIMATION_VARIANTS.slideUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ChevronRight}
              onClick={() => {
                const element = document.getElementById('journey');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Journey
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={BarChart3}
              onClick={() => {
                const element = document.getElementById('stats');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Statistics
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Statistics Section ── */}
      <section id="stats" className="py-20 px-6 max-w-7xl mx-auto border-t border-[var(--border-color)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text text-3xl md:text-5xl font-bold">
            Your Academic Snapshot
          </h2>
          <p className="text-[var(--text-secondary)] mt-3">
            Real-time analytics and GPA progression stats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={TrendingUp}
            label="Overall CGPA"
            value={academicStats.overallCGPA.toFixed(2)}
            trend="up"
            trendValue="+0.10"
            delay={0}
          />
          <StatCard
            icon={BookOpen}
            label="Completed Semesters"
            value={`${academicStats.completedSemesters}/${academicStats.totalSemesters}`}
            delay={0.1}
          />
          <StatCard
            icon={Award}
            label="Subjects Completed"
            value={academicStats.subjectsCompleted}
            delay={0.2}
          />
          <StatCard
            icon={Star}
            label="Total Credits"
            value={academicStats.totalCredits}
            delay={0.3}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SGPATrendChart data={sgpaTrendData} />
          <GradeDistribution data={gradeDistributionData} />
        </div>
      </section>

      {/* ── Academic Journey Section ── */}
      <section id="journey" className="py-20 px-6 max-w-7xl mx-auto border-t border-[var(--border-color)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="gradient-text text-3xl md:text-5xl font-bold">
            Your Academic Journey
          </h2>
          <p className="text-[var(--text-secondary)] mt-3">
            Explore your progression semester by semester from E1 to E4.
          </p>
        </motion.div>

        <div className="relative border-l border-dashed border-primary-300 dark:border-primary-800 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {academicYears.map((year, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={year.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row w-full ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node */}
                <div className="absolute top-6 left-[-16px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-[var(--bg-primary)] gradient-bg z-10 shadow flex items-center justify-center text-xs">
                  {year.yearNumber}
                </div>

                {/* Content Panel */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Link to={`/${year.slug}`} className="block">
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="glass-card p-6 cursor-pointer"
                    >
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{year.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">
                              {year.name}
                            </h3>
                            <span className="text-xs font-semibold text-primary-500">
                              {year.shortName}
                            </span>
                          </div>
                        </div>
                        <Badge variant={getStatusVariant(year.status)}>
                          {year.status}
                        </Badge>
                      </div>

                      {/* Semesters list */}
                      <div className="space-y-3 mt-4 border-t border-[var(--border-color)] pt-4">
                        {year.semesters.map((sem) => (
                          <div
                            key={sem.id}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="text-[var(--text-secondary)] font-medium">
                              {sem.shortName}
                            </span>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-[var(--text-muted)]">
                                SGPA: <strong>{sem.sgpa.toFixed(2)}</strong>
                              </span>
                              <span className="text-xs text-[var(--text-muted)]">
                                CGPA: <strong>{sem.cgpa.toFixed(2)}</strong>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center text-xs font-bold text-primary-500 hover:text-primary-600 gap-1">
                        View Semesters
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
