import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { UserForLoginDto } from "../models/user-for-login.dto";
import { UserForRegisterDto } from "../models/user-for-register.dto";
import { AuthResponse } from "../models/auth-response.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  private apiUrl = "http://localhost:60805/api/Auth";
  private currentUserSubject = new BehaviorSubject<Record<
    string,
    unknown
  > | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(data: UserForLoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/Login`, data).pipe(
      tap((res) => this.handleAuthSuccess(res)),
      catchError(this.handleError),
    );
  }

  register(data: UserForRegisterDto): Observable<unknown> {
    return this.http
      .post<unknown>(`${this.apiUrl}/Register`, data)
      .pipe(catchError(this.handleError));
  }

  refreshToken(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/RefreshToken`).pipe(
      tap((res) => this.handleAuthSuccess(res)),
      catchError(this.handleError),
    );
  }

  logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    this.currentUserSubject.next(null);
    // İsteğe bağlı: this.http.put(`${this.apiUrl}/RevokeToken`, { ... })
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("access_token");
  }

  getToken(): string | null {
    return localStorage.getItem("access_token");
  }

  getUser(): Record<string, unknown> | null {
    return this.currentUserSubject.value;
  }

  private handleAuthSuccess(res: AuthResponse): void {
    localStorage.setItem("access_token", res.accessToken);
    if (res.refreshToken)
      localStorage.setItem("refresh_token", res.refreshToken);
    if (res.user) localStorage.setItem("user", JSON.stringify(res.user));
    this.currentUserSubject.next(res.user || null);
  }

  private getUserFromStorage(): Record<string, unknown> | null {
    const user = localStorage.getItem("user");
    return user ? (JSON.parse(user) as Record<string, unknown>) : null;
  }

  private handleError(error: unknown): Observable<never> {
    return throwError(() => error);
  }
}
