// src/core/models/user-for-login.dto.ts
export interface UserForLoginDto {
  email: string;
  password: string;
  authenticatorCode?: string;
}
