import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />

      {/* Subtle fixed background gradient */}
      <div className="gradient-bg-subtle pointer-events-none fixed inset-0 -z-10" />

      <main className="flex-1 pt-16">{children}</main>

      <Footer />
    </div>
  );
}
