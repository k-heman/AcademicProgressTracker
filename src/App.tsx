import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Layout } from '@/components/layout';
import {
  Home,
  SemesterOverview,
  SemesterDetails,
  SubjectDetails,
  About,
  Contact,
  NotFound,
} from '@/pages';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/e1" element={<SemesterOverview yearSlug="e1" />} />
        <Route path="/e2" element={<SemesterOverview yearSlug="e2" />} />
        <Route path="/e3" element={<SemesterOverview yearSlug="e3" />} />
        <Route path="/e4" element={<SemesterOverview yearSlug="e4" />} />
        <Route path="/semester/:semesterId" element={<SemesterDetails />} />
        <Route path="/subject/:subjectId" element={<SubjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
