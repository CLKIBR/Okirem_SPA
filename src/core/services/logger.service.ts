// ...existing code...
// src/core/services/logger.service.ts

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class LoggerService {
  /**
   * Secret erişimi loglamak için kullanılır.
   * @param user Erişen kullanıcı veya sistem
   * @param secretName Erişilen secret'ın adı
   * @param purpose Erişim amacı
   */
  logSecretAccess(user: string, secretName: string, purpose: string) {
    const payload = {
      level: "SecretAccess",
      message: `Secret erişimi: ${secretName}`,
      user,
      secretName,
      purpose,
      source: "frontend",
      timestamp: new Date().toISOString(),
    };
    console.info("[SECRET ACCESS]", payload);
    this.sendLog(payload);
  }
  private logApiUrl = "http://localhost:60805/api/Log"; // TODO: environment'dan alınmalı

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  log(message: string, source: string = "frontend", stackTrace: string = "") {
    const payload = {
      level: "Info",
      message,
      stackTrace,
      source,
      timestamp: new Date().toISOString(),
    };
    console.log("[LOG]", payload);
    this.sendLog(payload);
  }

  error(message: string, source: string = "frontend", stackTrace: string = "") {
    const payload = {
      level: "Error",
      message,
      stackTrace,
      source,
      timestamp: new Date().toISOString(),
    };
    console.error("[ERROR]", payload);
    this.sendLog(payload);
  }

  warn(message: string, source: string = "frontend", stackTrace: string = "") {
    const payload = {
      level: "Warning",
      message,
      stackTrace,
      source,
      timestamp: new Date().toISOString(),
    };
    console.warn("[WARN]", payload);
    this.sendLog(payload);
  }

  private getJwtToken(): string | null {
    // JWT token'ı localStorage, sessionStorage veya başka bir yerden alın
    return localStorage.getItem("access_token");
  }

  private sendLog(payload: Record<string, unknown>) {
    const token = this.getJwtToken();
    if (!token) {
      // Token yoksa log gönderilmez, güvenlik gereği anonim loglama kapalı
      return;
    }
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    headers = headers.set("Authorization", `Bearer ${token}`);
    this.http.post(this.logApiUrl, payload, { headers }).subscribe({
      next: () => {},
      error: (err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 403) {
          // Token expired veya yetkisiz, güvenlik için localStorage temizle ve logout
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("user");
          // İsteğe bağlı: kullanıcıyı login sayfasına yönlendir
          this.router.navigate(["/login"]);
        }
        // Diğer hatalar için merkezi error handler eklenebilir
      },
    });
  }
}
