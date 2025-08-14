// src/core/models/user-for-register.dto.ts
export interface UserForRegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // Diğer register alanları API_DOC.md'ye göre eklenebilir
}
