import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TeacherProfile } from "../models/teacher-profile.model";

@Injectable({ providedIn: "root" })
export class TeacherProfileService {
  private readonly apiUrl = "/api/TeacherProfiles";

  constructor(private http: HttpClient) {}

  create(profile: Partial<TeacherProfile>): Observable<TeacherProfile> {
    return this.http.post<TeacherProfile>(this.apiUrl, profile);
  }

  update(profile: TeacherProfile): Observable<TeacherProfile> {
    return this.http.put<TeacherProfile>(this.apiUrl, profile);
  }

  getAll(): Observable<TeacherProfile[]> {
    return this.http.get<TeacherProfile[]>(this.apiUrl);
  }

  getById(id: string): Observable<TeacherProfile> {
    return this.http.get<TeacherProfile>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
