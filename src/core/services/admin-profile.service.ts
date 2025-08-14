import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AdminProfile } from "../models/admin-profile.model";

@Injectable({ providedIn: "root" })
export class AdminProfileService {
  private readonly apiUrl = "/api/AdminProfiles";

  constructor(private http: HttpClient) {}

  create(profile: Partial<AdminProfile>): Observable<AdminProfile> {
    return this.http.post<AdminProfile>(this.apiUrl, profile);
  }

  update(profile: AdminProfile): Observable<AdminProfile> {
    return this.http.put<AdminProfile>(this.apiUrl, profile);
  }

  getAll(): Observable<AdminProfile[]> {
    return this.http.get<AdminProfile[]>(this.apiUrl);
  }

  getById(id: string): Observable<AdminProfile> {
    return this.http.get<AdminProfile>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
