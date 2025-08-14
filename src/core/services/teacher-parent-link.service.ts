import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TeacherParentLink } from "../models/teacher-parent-link.model";

@Injectable({ providedIn: "root" })
export class TeacherParentLinkService {
  private readonly apiUrl = "/api/TeacherParentLinks";

  constructor(private http: HttpClient) {}

  create(link: Partial<TeacherParentLink>): Observable<TeacherParentLink> {
    return this.http.post<TeacherParentLink>(this.apiUrl, link);
  }

  update(link: TeacherParentLink): Observable<TeacherParentLink> {
    return this.http.put<TeacherParentLink>(this.apiUrl, link);
  }

  getAll(): Observable<TeacherParentLink[]> {
    return this.http.get<TeacherParentLink[]>(this.apiUrl);
  }

  getById(id: string): Observable<TeacherParentLink> {
    return this.http.get<TeacherParentLink>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
