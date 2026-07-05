import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { APP_NAME } from '@/constants';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const academicYears = [
  { label: 'E1 — First Year', href: '/e1' },
  { label: 'E2 — Second Year', href: '/e2' },
  { label: 'E3 — Third Year', href: '/e3' },
  { label: 'E4 — Fourth Year', href: '/e4' },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Top gradient line */}
      <div className="gradient-bg h-px w-full" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-primary-500" />
              <span className="text-lg font-bold text-[var(--text-primary)]">
                {APP_NAME}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              Track your engineering academic journey semester by semester. View
              SGPA, CGPA, grades, and progress across all semesters.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Years */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Academic Years
            </h3>
            <ul className="space-y-3">
              {academicYears.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--border-color)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Made with <span className="text-red-400">❤️</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
