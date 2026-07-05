// ============================================================
// Academic Progress Tracker — Type Definitions
// ============================================================

export type SubjectType = 'Theory' | 'Lab' | 'Project' | 'Elective';
export type SubjectStatus = 'Completed' | 'In Progress' | 'Upcoming';
export type SemesterStatus = 'Completed' | 'In Progress' | 'Upcoming';
export type Grade = 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'P' | 'F' | 'AB' | '-';
export type Result = 'Pass' | 'Fail' | 'Pending';

export interface Subject {
  id: string;
  code: string;
  name: string;
  type: SubjectType;
  credits: number;
  internalMarks: number;
  externalMarks: number;
  totalMarks: number;
  grade: Grade;
  gradePoints: number;
  result: Result;
  semesterId: string;
}

export interface Semester {
  id: string;
  name: string;
  shortName: string;
  yearId: string;
  semesterNumber: number;
  sgpa: number;
  cgpa: number;
  totalCredits: number;
  earnedCredits: number;
  subjects: Subject[];
  status: SemesterStatus;
  startDate: string;
  endDate: string;
}

export interface AcademicYear {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  yearNumber: number;
  semesters: Semester[];
  status: SemesterStatus;
  icon: string;
}

export interface AcademicStats {
  overallCGPA: number;
  completedSemesters: number;
  totalSemesters: number;
  subjectsCompleted: number;
  totalCredits: number;
  earnedCredits: number;
  highestSGPA: number;
  lowestSGPA: number;
  theoryCount: number;
  labCount: number;
}

export interface SGPATrendData {
  semester: string;
  sgpa: number;
  cgpa: number;
}

export interface GradeDistributionData {
  grade: string;
  count: number;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
