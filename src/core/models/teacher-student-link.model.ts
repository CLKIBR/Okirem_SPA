export interface TeacherStudentLink {
  id?: string;
  teacherProfileId: string;
  studentProfileId: string;
  classroomId?: string;
  academicYear?: string;
  linkRole: number;
  effectiveFrom?: string;
  effectiveTo?: string;
  isPrimary: boolean;
  notes?: string;
  tenantId?: string;
}
