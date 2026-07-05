import { motion } from 'framer-motion';
import { Mail, Globe, Github, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';
import PageTransition from '@/components/layout/PageTransition';
import { Breadcrumb } from '@/components/common';

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email Address',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      linkText: CONTACT_INFO.email,
    },
    {
      icon: Globe,
      label: 'LinkedIn Profile',
      value: 'LinkedIn',
      href: CONTACT_INFO.linkedin,
      linkText: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      label: 'GitHub Repository',
      value: 'GitHub',
      href: CONTACT_INFO.github,
      linkText: 'Follow on GitHub',
    },
  ];

  return (
    <PageTransition>
      <div className="py-12 max-w-4xl mx-auto px-6 relative min-h-[75vh] flex flex-col">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contact' },
          ]}
        />

        {/* Floating gradient blobs for aesthetics */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-400 blob blob-1 opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-400 blob blob-2 opacity-20" />
        </div>

        <div className="relative z-10 my-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold gradient-text">
              Get in Touch
            </h1>
            <p className="text-[var(--text-secondary)] mt-3 max-w-md mx-auto text-balance">
              Connect with the developer regarding integrations, deployments, or feedback.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card max-w-lg mx-auto p-8 shadow-xl"
          >
            <div className="space-y-6">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-4 rounded-xl hover:bg-primary-50/50 dark:hover:bg-primary-950/20 group transition-all duration-300 border border-transparent hover:border-[var(--border-color)]"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shadow-md shadow-indigo-500/10 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider block">
                        {link.label}
                      </span>
                      <span className="text-[var(--text-primary)] font-medium group-hover:text-primary-500 transition-colors truncate block">
                        {link.linkText}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
