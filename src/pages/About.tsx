import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Layout, PieChart, Smartphone, Target, Info } from 'lucide-react';
import { FEATURES, APP_NAME, APP_DESCRIPTION } from '@/constants';
import PageTransition from '@/components/layout/PageTransition';
import { Breadcrumb, Badge } from '@/components/common';

export default function About() {
  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    TrendingUp,
    Layout,
    PieChart,
    Smartphone,
    Target,
  };

  const techStack = [
    'React 19',
    'TypeScript',
    'Vite',
    'TailwindCSS v4',
    'Framer Motion',
    'Recharts',
    'React Router v7',
    'Context API',
    'Lucide Icons',
  ];

  return (
    <PageTransition>
      <div className="py-12 max-w-6xl mx-auto px-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]}
        />

        <div className="mt-6 mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold gradient-text flex items-center gap-3">
            About {APP_NAME}
          </h1>
          <p className="text-[var(--text-secondary)] mt-2 text-lg">
            An engineering academic monitoring and forecasting system.
          </p>
        </div>

        {/* Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 mb-12"
        >
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-primary-500" />
            Purpose & Vision
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            The <strong>Academic Progress Tracker</strong> is a state-of-the-art web application designed for engineering students to systematically track, visualize, and analyze their performance throughout their academic journey. Built to represent a semester-by-semester portfolio, it maps results from First Year (E1) through Fourth Year (E4).
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            By utilizing clean data architectures, standard React frameworks, and modular API-ready adapters, it is prepared for seamless enterprise integrations with cloud backends (like Supabase, Firebase, or SQL) in future releases without modifying the presentation components.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Key Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || Info;
              return (
                <motion.div
                  key={feature.title}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 shadow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Built With Premium Tech</h2>
          <div className="glass-card p-8">
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <Badge key={tech} variant="info" size="md" className="py-2 px-4 text-sm font-semibold">
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-6 leading-relaxed">
              Designed according to architectural standards for high-performance frontend codebases: optimized render patterns via Framer Motion, strict type safety with TypeScript compiler options, and responsive styles configured using the next-generation TailwindCSS v4 theme system.
            </p>
          </div>
        </div>

        {/* Developer Info */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Developer Information</h2>
          <motion.div
            className="glass-card p-8 flex flex-col md:flex-row gap-6 items-center"
            whileHover={{ scale: 1.01 }}
          >
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-3xl text-white font-extrabold shadow shadow-indigo-500/30">
              APT
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Student Portfolio</h3>
              <p className="text-sm text-primary-500 font-semibold mb-2">Full Stack Developer in Training</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Developing robust academic dashboards and portfolio projects using state of the art tools, modern component guidelines, and scalable design structures.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
