import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';

// ────────────────────────────────────────────────────────────
// Breadcrumb — Navigation trail with gradient active item
// ────────────────────────────────────────────────────────────

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight
                size={14}
                className="text-[var(--text-muted)] shrink-0"
              />
            )}

            {isLast || !item.href ? (
              <span
                className={
                  isLast
                    ? 'gradient-text font-semibold'
                    : 'text-[var(--text-muted)]'
                }
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
