import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { School } from "../models/school.model";

@Injectable({ providedIn: "root" })
export class SchoolService {
  private readonly apiUrl = "/api/Schools";

  constructor(private http: HttpClient) {}

  create(school: Partial<School>): Observable<School> {
    return this.http.post<School>(this.apiUrl, school);
  }

  update(school: School): Observable<School> {
    return this.http.put<School>(this.apiUrl, school);
  }

  getAll(): Observable<School[]> {
    return this.http.get<School[]>(this.apiUrl);
  }

  getById(id: string): Observable<School> {
    return this.http.get<School>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
