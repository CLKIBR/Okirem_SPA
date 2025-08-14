import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StudentProfile } from "../models/student-profile.model";

@Injectable({ providedIn: "root" })
export class StudentProfileService {
  private readonly apiUrl = "/api/StudentProfiles";

  constructor(private http: HttpClient) {}

  create(profile: Partial<StudentProfile>): Observable<StudentProfile> {
    return this.http.post<StudentProfile>(this.apiUrl, profile);
  }

  update(profile: StudentProfile): Observable<StudentProfile> {
    return this.http.put<StudentProfile>(this.apiUrl, profile);
  }

  getAll(): Observable<StudentProfile[]> {
    return this.http.get<StudentProfile[]>(this.apiUrl);
  }

  getById(id: string): Observable<StudentProfile> {
    return this.http.get<StudentProfile>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
