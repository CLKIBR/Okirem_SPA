import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ParentStudentLink } from "../models/parent-student-link.model";

@Injectable({ providedIn: "root" })
export class ParentStudentLinkService {
  private readonly apiUrl = "/api/ParentStudentLinks";

  constructor(private http: HttpClient) {}

  create(link: Partial<ParentStudentLink>): Observable<ParentStudentLink> {
    return this.http.post<ParentStudentLink>(this.apiUrl, link);
  }

  update(link: ParentStudentLink): Observable<ParentStudentLink> {
    return this.http.put<ParentStudentLink>(this.apiUrl, link);
  }

  getAll(): Observable<ParentStudentLink[]> {
    return this.http.get<ParentStudentLink[]>(this.apiUrl);
  }

  getById(id: string): Observable<ParentStudentLink> {
    return this.http.get<ParentStudentLink>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
