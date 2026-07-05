// ============================================================
// Mock Data — Academic Progress Tracker
// Structured to mirror future Supabase/API responses
// ============================================================

import type { AcademicYear, AcademicStats, SGPATrendData, GradeDistributionData } from '@/types';

// ── E1 Year ──────────────────────────────────────────────────
const e1Subjects = {
  sem1: [
    { id: 's1-1', code: 'MA101', name: 'Mathematics - I', type: 'Theory' as const, credits: 4, internalMarks: 28, externalMarks: 52, totalMarks: 80, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e1-s1' },
    { id: 's1-2', code: 'PH101', name: 'Engineering Physics', type: 'Theory' as const, credits: 4, internalMarks: 25, externalMarks: 48, totalMarks: 73, grade: 'B+' as const, gradePoints: 7, result: 'Pass' as const, semesterId: 'e1-s1' },
    { id: 's1-3', code: 'CH101', name: 'Engineering Chemistry', type: 'Theory' as const, credits: 4, internalMarks: 27, externalMarks: 55, totalMarks: 82, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e1-s1' },
    { id: 's1-4', code: 'CS101', name: 'Programming in C', type: 'Theory' as const, credits: 3, internalMarks: 29, externalMarks: 58, totalMarks: 87, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e1-s1' },
    { id: 's1-5', code: 'EN101', name: 'English Communication', type: 'Theory' as const, credits: 3, internalMarks: 24, externalMarks: 45, totalMarks: 69, grade: 'B+' as const, gradePoints: 7, result: 'Pass' as const, semesterId: 'e1-s1' },
    { id: 's1-6', code: 'PH111', name: 'Physics Lab', type: 'Lab' as const, credits: 2, internalMarks: 38, externalMarks: 48, totalMarks: 86, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e1-s1' },
    { id: 's1-7', code: 'CS111', name: 'C Programming Lab', type: 'Lab' as const, credits: 2, internalMarks: 40, externalMarks: 50, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e1-s1' },
  ],
  sem2: [
    { id: 's2-1', code: 'MA201', name: 'Mathematics - II', type: 'Theory' as const, credits: 4, internalMarks: 26, externalMarks: 50, totalMarks: 76, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e1-s2' },
    { id: 's2-2', code: 'PH201', name: 'Applied Physics', type: 'Theory' as const, credits: 4, internalMarks: 27, externalMarks: 53, totalMarks: 80, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e1-s2' },
    { id: 's2-3', code: 'EE201', name: 'Basic Electrical Engineering', type: 'Theory' as const, credits: 4, internalMarks: 22, externalMarks: 42, totalMarks: 64, grade: 'B+' as const, gradePoints: 7, result: 'Pass' as const, semesterId: 'e1-s2' },
    { id: 's2-4', code: 'ME201', name: 'Engineering Graphics', type: 'Theory' as const, credits: 3, internalMarks: 30, externalMarks: 56, totalMarks: 86, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e1-s2' },
    { id: 's2-5', code: 'CS201', name: 'Data Structures', type: 'Theory' as const, credits: 3, internalMarks: 28, externalMarks: 60, totalMarks: 88, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e1-s2' },
    { id: 's2-6', code: 'CH211', name: 'Chemistry Lab', type: 'Lab' as const, credits: 2, internalMarks: 36, externalMarks: 45, totalMarks: 81, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e1-s2' },
    { id: 's2-7', code: 'CS211', name: 'Data Structures Lab', type: 'Lab' as const, credits: 2, internalMarks: 42, externalMarks: 48, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e1-s2' },
  ],
};

// ── E2 Year ──────────────────────────────────────────────────
const e2Subjects = {
  sem1: [
    { id: 's3-1', code: 'MA301', name: 'Mathematics - III', type: 'Theory' as const, credits: 4, internalMarks: 25, externalMarks: 48, totalMarks: 73, grade: 'B+' as const, gradePoints: 7, result: 'Pass' as const, semesterId: 'e2-s1' },
    { id: 's3-2', code: 'CS301', name: 'Object Oriented Programming', type: 'Theory' as const, credits: 3, internalMarks: 30, externalMarks: 60, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e2-s1' },
    { id: 's3-3', code: 'CS302', name: 'Digital Logic Design', type: 'Theory' as const, credits: 4, internalMarks: 26, externalMarks: 52, totalMarks: 78, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e2-s1' },
    { id: 's3-4', code: 'CS303', name: 'Discrete Mathematics', type: 'Theory' as const, credits: 4, internalMarks: 28, externalMarks: 56, totalMarks: 84, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e2-s1' },
    { id: 's3-5', code: 'CS304', name: 'Computer Organization', type: 'Theory' as const, credits: 3, internalMarks: 24, externalMarks: 46, totalMarks: 70, grade: 'B+' as const, gradePoints: 7, result: 'Pass' as const, semesterId: 'e2-s1' },
    { id: 's3-6', code: 'CS311', name: 'OOP Lab', type: 'Lab' as const, credits: 2, internalMarks: 40, externalMarks: 48, totalMarks: 88, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e2-s1' },
    { id: 's3-7', code: 'CS312', name: 'Digital Logic Lab', type: 'Lab' as const, credits: 2, internalMarks: 38, externalMarks: 50, totalMarks: 88, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e2-s1' },
  ],
  sem2: [
    { id: 's4-1', code: 'MA401', name: 'Probability & Statistics', type: 'Theory' as const, credits: 4, internalMarks: 27, externalMarks: 54, totalMarks: 81, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e2-s2' },
    { id: 's4-2', code: 'CS401', name: 'Database Management Systems', type: 'Theory' as const, credits: 4, internalMarks: 29, externalMarks: 58, totalMarks: 87, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e2-s2' },
    { id: 's4-3', code: 'CS402', name: 'Operating Systems', type: 'Theory' as const, credits: 4, internalMarks: 26, externalMarks: 50, totalMarks: 76, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e2-s2' },
    { id: 's4-4', code: 'CS403', name: 'Design & Analysis of Algorithms', type: 'Theory' as const, credits: 3, internalMarks: 28, externalMarks: 56, totalMarks: 84, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e2-s2' },
    { id: 's4-5', code: 'CS404', name: 'Software Engineering', type: 'Theory' as const, credits: 3, internalMarks: 25, externalMarks: 50, totalMarks: 75, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e2-s2' },
    { id: 's4-6', code: 'CS411', name: 'DBMS Lab', type: 'Lab' as const, credits: 2, internalMarks: 42, externalMarks: 48, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e2-s2' },
    { id: 's4-7', code: 'CS412', name: 'OS Lab', type: 'Lab' as const, credits: 2, internalMarks: 38, externalMarks: 46, totalMarks: 84, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e2-s2' },
  ],
};

// ── E3 Year ──────────────────────────────────────────────────
const e3Subjects = {
  sem1: [
    { id: 's5-1', code: 'CS501', name: 'Computer Networks', type: 'Theory' as const, credits: 4, internalMarks: 28, externalMarks: 56, totalMarks: 84, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e3-s1' },
    { id: 's5-2', code: 'CS502', name: 'Compiler Design', type: 'Theory' as const, credits: 4, internalMarks: 24, externalMarks: 46, totalMarks: 70, grade: 'B+' as const, gradePoints: 7, result: 'Pass' as const, semesterId: 'e3-s1' },
    { id: 's5-3', code: 'CS503', name: 'Theory of Computation', type: 'Theory' as const, credits: 3, internalMarks: 26, externalMarks: 52, totalMarks: 78, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e3-s1' },
    { id: 's5-4', code: 'CS504', name: 'Web Technologies', type: 'Theory' as const, credits: 3, internalMarks: 30, externalMarks: 60, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e3-s1' },
    { id: 's5-5', code: 'CS505', name: 'Machine Learning', type: 'Elective' as const, credits: 3, internalMarks: 27, externalMarks: 55, totalMarks: 82, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e3-s1' },
    { id: 's5-6', code: 'CS511', name: 'Networks Lab', type: 'Lab' as const, credits: 2, internalMarks: 40, externalMarks: 48, totalMarks: 88, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e3-s1' },
    { id: 's5-7', code: 'CS512', name: 'Web Technologies Lab', type: 'Lab' as const, credits: 2, internalMarks: 42, externalMarks: 50, totalMarks: 92, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e3-s1' },
  ],
  sem2: [
    { id: 's6-1', code: 'CS601', name: 'Information Security', type: 'Theory' as const, credits: 4, internalMarks: 27, externalMarks: 54, totalMarks: 81, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e3-s2' },
    { id: 's6-2', code: 'CS602', name: 'Cloud Computing', type: 'Theory' as const, credits: 4, internalMarks: 29, externalMarks: 58, totalMarks: 87, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e3-s2' },
    { id: 's6-3', code: 'CS603', name: 'Artificial Intelligence', type: 'Theory' as const, credits: 3, internalMarks: 28, externalMarks: 56, totalMarks: 84, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e3-s2' },
    { id: 's6-4', code: 'CS604', name: 'Data Mining', type: 'Elective' as const, credits: 3, internalMarks: 25, externalMarks: 50, totalMarks: 75, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e3-s2' },
    { id: 's6-5', code: 'CS605', name: 'Mobile App Development', type: 'Elective' as const, credits: 3, internalMarks: 30, externalMarks: 58, totalMarks: 88, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e3-s2' },
    { id: 's6-6', code: 'CS611', name: 'AI Lab', type: 'Lab' as const, credits: 2, internalMarks: 40, externalMarks: 50, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e3-s2' },
    { id: 's6-7', code: 'CS612', name: 'Mini Project', type: 'Project' as const, credits: 2, internalMarks: 42, externalMarks: 48, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e3-s2' },
  ],
};

// ── E4 Year ──────────────────────────────────────────────────
const e4Subjects = {
  sem1: [
    { id: 's7-1', code: 'CS701', name: 'Deep Learning', type: 'Theory' as const, credits: 4, internalMarks: 29, externalMarks: 58, totalMarks: 87, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e4-s1' },
    { id: 's7-2', code: 'CS702', name: 'Big Data Analytics', type: 'Theory' as const, credits: 4, internalMarks: 27, externalMarks: 55, totalMarks: 82, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e4-s1' },
    { id: 's7-3', code: 'CS703', name: 'Natural Language Processing', type: 'Elective' as const, credits: 3, internalMarks: 28, externalMarks: 56, totalMarks: 84, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e4-s1' },
    { id: 's7-4', code: 'CS704', name: 'Blockchain Technology', type: 'Elective' as const, credits: 3, internalMarks: 26, externalMarks: 52, totalMarks: 78, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e4-s1' },
    { id: 's7-5', code: 'CS711', name: 'Deep Learning Lab', type: 'Lab' as const, credits: 2, internalMarks: 40, externalMarks: 50, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e4-s1' },
    { id: 's7-6', code: 'CS712', name: 'Major Project Phase - I', type: 'Project' as const, credits: 4, internalMarks: 42, externalMarks: 50, totalMarks: 92, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e4-s1' },
  ],
  sem2: [
    { id: 's8-1', code: 'CS801', name: 'DevOps & CI/CD', type: 'Elective' as const, credits: 3, internalMarks: 28, externalMarks: 56, totalMarks: 84, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e4-s2' },
    { id: 's8-2', code: 'CS802', name: 'Internet of Things', type: 'Elective' as const, credits: 3, internalMarks: 25, externalMarks: 50, totalMarks: 75, grade: 'A' as const, gradePoints: 8, result: 'Pass' as const, semesterId: 'e4-s2' },
    { id: 's8-3', code: 'CS803', name: 'Ethics in Computing', type: 'Theory' as const, credits: 2, internalMarks: 30, externalMarks: 55, totalMarks: 85, grade: 'A+' as const, gradePoints: 9, result: 'Pass' as const, semesterId: 'e4-s2' },
    { id: 's8-4', code: 'CS811', name: 'Major Project Phase - II', type: 'Project' as const, credits: 8, internalMarks: 45, externalMarks: 48, totalMarks: 93, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e4-s2' },
    { id: 's8-5', code: 'CS812', name: 'Internship / Industrial Training', type: 'Project' as const, credits: 4, internalMarks: 40, externalMarks: 50, totalMarks: 90, grade: 'O' as const, gradePoints: 10, result: 'Pass' as const, semesterId: 'e4-s2' },
  ],
};

// ── Academic Years ───────────────────────────────────────────
export const academicYears: AcademicYear[] = [
  {
    id: 'e1',
    name: 'First Year',
    shortName: 'E1',
    slug: 'e1',
    yearNumber: 1,
    icon: '🎓',
    status: 'Completed',
    semesters: [
      {
        id: 'e1-s1',
        name: 'E1 - Semester 1',
        shortName: 'Sem 1',
        yearId: 'e1',
        semesterNumber: 1,
        sgpa: 8.14,
        cgpa: 8.14,
        totalCredits: 22,
        earnedCredits: 22,
        subjects: e1Subjects.sem1,
        status: 'Completed',
        startDate: '2022-08-01',
        endDate: '2022-12-15',
      },
      {
        id: 'e1-s2',
        name: 'E1 - Semester 2',
        shortName: 'Sem 2',
        yearId: 'e1',
        semesterNumber: 2,
        sgpa: 8.36,
        cgpa: 8.25,
        totalCredits: 22,
        earnedCredits: 22,
        subjects: e1Subjects.sem2,
        status: 'Completed',
        startDate: '2023-01-15',
        endDate: '2023-05-30',
      },
    ],
  },
  {
    id: 'e2',
    name: 'Second Year',
    shortName: 'E2',
    slug: 'e2',
    yearNumber: 2,
    icon: '📚',
    status: 'Completed',
    semesters: [
      {
        id: 'e2-s1',
        name: 'E2 - Semester 1',
        shortName: 'Sem 1',
        yearId: 'e2',
        semesterNumber: 1,
        sgpa: 8.27,
        cgpa: 8.26,
        totalCredits: 22,
        earnedCredits: 22,
        subjects: e2Subjects.sem1,
        status: 'Completed',
        startDate: '2023-08-01',
        endDate: '2023-12-15',
      },
      {
        id: 'e2-s2',
        name: 'E2 - Semester 2',
        shortName: 'Sem 2',
        yearId: 'e2',
        semesterNumber: 2,
        sgpa: 8.64,
        cgpa: 8.35,
        totalCredits: 22,
        earnedCredits: 22,
        subjects: e2Subjects.sem2,
        status: 'Completed',
        startDate: '2024-01-15',
        endDate: '2024-05-30',
      },
    ],
  },
  {
    id: 'e3',
    name: 'Third Year',
    shortName: 'E3',
    slug: 'e3',
    yearNumber: 3,
    icon: '💻',
    status: 'Completed',
    semesters: [
      {
        id: 'e3-s1',
        name: 'E3 - Semester 1',
        shortName: 'Sem 1',
        yearId: 'e3',
        semesterNumber: 1,
        sgpa: 8.71,
        cgpa: 8.42,
        totalCredits: 21,
        earnedCredits: 21,
        subjects: e3Subjects.sem1,
        status: 'Completed',
        startDate: '2024-08-01',
        endDate: '2024-12-15',
      },
      {
        id: 'e3-s2',
        name: 'E3 - Semester 2',
        shortName: 'Sem 2',
        yearId: 'e3',
        semesterNumber: 2,
        sgpa: 9.00,
        cgpa: 8.52,
        totalCredits: 21,
        earnedCredits: 21,
        subjects: e3Subjects.sem2,
        status: 'Completed',
        startDate: '2025-01-15',
        endDate: '2025-05-30',
      },
    ],
  },
  {
    id: 'e4',
    name: 'Fourth Year',
    shortName: 'E4',
    slug: 'e4',
    yearNumber: 4,
    icon: '🚀',
    status: 'Completed',
    semesters: [
      {
        id: 'e4-s1',
        name: 'E4 - Semester 1',
        shortName: 'Sem 1',
        yearId: 'e4',
        semesterNumber: 1,
        sgpa: 9.10,
        cgpa: 8.60,
        totalCredits: 20,
        earnedCredits: 20,
        subjects: e4Subjects.sem1,
        status: 'Completed',
        startDate: '2025-08-01',
        endDate: '2025-12-15',
      },
      {
        id: 'e4-s2',
        name: 'E4 - Semester 2',
        shortName: 'Sem 2',
        yearId: 'e4',
        semesterNumber: 2,
        sgpa: 9.40,
        cgpa: 8.70,
        totalCredits: 20,
        earnedCredits: 20,
        subjects: e4Subjects.sem2,
        status: 'Completed',
        startDate: '2026-01-15',
        endDate: '2026-05-30',
      },
    ],
  },
];

// ── Derived Stats ────────────────────────────────────────────
export const academicStats: AcademicStats = {
  overallCGPA: 8.70,
  completedSemesters: 8,
  totalSemesters: 8,
  subjectsCompleted: 52,
  totalCredits: 170,
  earnedCredits: 170,
  highestSGPA: 9.40,
  lowestSGPA: 8.14,
  theoryCount: 30,
  labCount: 14,
};

// ── Chart Data ───────────────────────────────────────────────
export const sgpaTrendData: SGPATrendData[] = [
  { semester: 'E1-S1', sgpa: 8.14, cgpa: 8.14 },
  { semester: 'E1-S2', sgpa: 8.36, cgpa: 8.25 },
  { semester: 'E2-S1', sgpa: 8.27, cgpa: 8.26 },
  { semester: 'E2-S2', sgpa: 8.64, cgpa: 8.35 },
  { semester: 'E3-S1', sgpa: 8.71, cgpa: 8.42 },
  { semester: 'E3-S2', sgpa: 9.00, cgpa: 8.52 },
  { semester: 'E4-S1', sgpa: 9.10, cgpa: 8.60 },
  { semester: 'E4-S2', sgpa: 9.40, cgpa: 8.70 },
];

export const gradeDistributionData: GradeDistributionData[] = [
  { grade: 'O', count: 11, color: '#10b981' },
  { grade: 'A+', count: 16, color: '#22c55e' },
  { grade: 'A', count: 15, color: '#3b82f6' },
  { grade: 'B+', count: 6, color: '#6366f1' },
  { grade: 'B', count: 3, color: '#8b5cf6' },
  { grade: 'C', count: 1, color: '#f59e0b' },
];

// ── Helper functions (simulate API calls) ────────────────────
export function getAcademicYearBySlug(slug: string): AcademicYear | undefined {
  return academicYears.find((y) => y.slug === slug);
}

export function getSemesterById(semesterId: string): { semester: import('@/types').Semester; year: AcademicYear } | undefined {
  for (const year of academicYears) {
    const semester = year.semesters.find((s) => s.id === semesterId);
    if (semester) return { semester, year };
  }
  return undefined;
}

export function getSubjectById(subjectId: string): { subject: import('@/types').Subject; semester: import('@/types').Semester; year: AcademicYear } | undefined {
  for (const year of academicYears) {
    for (const semester of year.semesters) {
      const subject = semester.subjects.find((s) => s.id === subjectId);
      if (subject) return { subject, semester, year };
    }
  }
  return undefined;
}

export function getAllSubjects(): import('@/types').Subject[] {
  return academicYears.flatMap((y) => y.semesters.flatMap((s) => s.subjects));
}
