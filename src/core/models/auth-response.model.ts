// src/core/models/auth-response.model.ts
export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
  user?: Record<string, unknown>;
}
