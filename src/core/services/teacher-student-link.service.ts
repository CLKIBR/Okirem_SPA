import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TeacherStudentLink } from "../models/teacher-student-link.model";

@Injectable({ providedIn: "root" })
export class TeacherStudentLinkService {
  private readonly apiUrl = "/api/TeacherStudentLinks";

  constructor(private http: HttpClient) {}

  create(link: Partial<TeacherStudentLink>): Observable<TeacherStudentLink> {
    return this.http.post<TeacherStudentLink>(this.apiUrl, link);
  }

  update(link: TeacherStudentLink): Observable<TeacherStudentLink> {
    return this.http.put<TeacherStudentLink>(this.apiUrl, link);
  }

  getAll(): Observable<TeacherStudentLink[]> {
    return this.http.get<TeacherStudentLink[]>(this.apiUrl);
  }

  getById(id: string): Observable<TeacherStudentLink> {
    return this.http.get<TeacherStudentLink>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
