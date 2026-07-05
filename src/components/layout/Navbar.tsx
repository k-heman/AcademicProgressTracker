import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Menu } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { useScrollPosition } from '@/hooks';
import { ThemeToggle } from '@/components/common';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isScrolled = scrollY > 20;

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-[var(--border-color)] bg-[var(--bg-primary)]/90 shadow-lg shadow-[var(--shadow-color)] backdrop-blur-xl'
            : 'border-b border-transparent bg-[var(--bg-primary)]/80 backdrop-blur-xl'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <GraduationCap className="h-7 w-7 text-primary-500" />
            <span className="gradient-text hidden text-lg font-bold sm:inline-block">
              Academic Progress Tracker
            </span>
          </Link>

          {/* Center: Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'text-primary-500'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="gradient-bg absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-color)] hover:text-[var(--text-primary)] md:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
