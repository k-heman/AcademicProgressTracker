// ============================================================
// Constants
// ============================================================

import type { NavItem, ContactInfo, Feature } from '@/types';

export const APP_NAME = 'Academic Progress Tracker';
export const APP_DESCRIPTION = 'Track your engineering academic journey semester by semester.';

export const GRADE_POINTS: Record<string, number> = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'P': 4,
  'F': 0,
  'AB': 0,
  '-': 0,
};

export const GRADE_COLORS: Record<string, string> = {
  'O': '#10b981',
  'A+': '#22c55e',
  'A': '#3b82f6',
  'B+': '#6366f1',
  'B': '#8b5cf6',
  'C': '#f59e0b',
  'P': '#f97316',
  'F': '#ef4444',
  'AB': '#6b7280',
  '-': '#9ca3af',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'E1', href: '/e1' },
  { label: 'E2', href: '/e2' },
  { label: 'E3', href: '/e3' },
  { label: 'E4', href: '/e4' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'student@university.edu',
  linkedin: 'https://linkedin.com/in/student',
  github: 'https://github.com/student',
  portfolio: 'https://student.dev',
};

export const FEATURES: Feature[] = [
  {
    title: 'Semester Tracking',
    description: 'Track your progress across all 8 semesters of your engineering journey.',
    icon: 'BookOpen',
  },
  {
    title: 'SGPA & CGPA Analytics',
    description: 'Visualize your academic performance with interactive charts and trends.',
    icon: 'TrendingUp',
  },
  {
    title: 'Subject Management',
    description: 'View detailed information about every subject including marks and grades.',
    icon: 'Layout',
  },
  {
    title: 'Grade Distribution',
    description: 'Understand your grade distribution with beautiful visualizations.',
    icon: 'PieChart',
  },
  {
    title: 'Responsive Design',
    description: 'Access your academic data seamlessly on any device.',
    icon: 'Smartphone',
  },
  {
    title: 'Performance Insights',
    description: 'Get deep insights into your academic strengths and areas for improvement.',
    icon: 'Target',
  },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};
