import type { ChangeEventHandler } from 'react';
import { Search } from 'lucide-react';

// ────────────────────────────────────────────────────────────
// SearchBar — Glass-styled search input with icon
// ────────────────────────────────────────────────────────────

export interface SearchBarProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
}: SearchBarProps) {
  return (
    <div
      className={`
        glass-card flex items-center gap-3 px-4 py-2.5
        focus-within:ring-2 focus-within:ring-primary-500/50
        transition-shadow duration-200
        ${className}
      `}
    >
      <Search size={18} className="text-[var(--text-muted)] shrink-0" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          flex-1 bg-transparent border-none outline-none
          text-sm text-[var(--text-primary)]
          placeholder:text-[var(--text-muted)]
        "
      />
    </div>
  );
}
