export interface TeacherParentLink {
  id?: string;
  teacherProfileId: string;
  parentProfileId: string;
  linkRole: number;
  effectiveFrom?: string;
  effectiveTo?: string;
  isPrimary: boolean;
  notes?: string;
  tenantId?: string;
}
