import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-6">
      {/* Aesthetic blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-400 blob blob-1 opacity-25" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400 blob blob-2 opacity-25" />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[120px] md:text-[160px] font-black leading-none gradient-text tracking-tighter">
          404
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] mt-4">
          Page Not Found
        </h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-relaxed">
          The page you are looking for doesn't exist, was renamed, or has been moved to another semester.
        </p>

        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button variant="primary" icon={ArrowLeft}>
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
