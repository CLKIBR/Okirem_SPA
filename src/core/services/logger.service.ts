// src/core/services/logger.service.ts

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class LoggerService {
  private logApiUrl = "http://localhost:60805/api/Log"; // narchgen backend log endpoint

  constructor(private http: HttpClient) {}

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
    // Örnek: localStorage.getItem('access_token')
    return localStorage.getItem("access_token");
  }

  private sendLog(payload: Record<string, unknown>) {
    const token = this.getJwtToken();
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    if (token) {
      headers = headers.set("Authorization", `Bearer ${token}`);
    }
    this.http.post(this.logApiUrl, payload, { headers }).subscribe({
      next: () => {},
      error: () => {},
    });
  }
}
