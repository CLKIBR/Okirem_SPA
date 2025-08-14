export interface ParentStudentLink {
  id?: string;
  parentProfileId: string;
  studentProfileId: string;
  relationship: number;
  isPrimary: boolean;
  tenantId?: string;
}
