import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Classroom } from "../models/classroom.model";

@Injectable({ providedIn: "root" })
export class ClassroomService {
  private readonly apiUrl = "/api/Classrooms";

  constructor(private http: HttpClient) {}

  create(classroom: Partial<Classroom>): Observable<Classroom> {
    return this.http.post<Classroom>(this.apiUrl, classroom);
  }

  update(classroom: Classroom): Observable<Classroom> {
    return this.http.put<Classroom>(this.apiUrl, classroom);
  }

  getAll(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.apiUrl);
  }

  getById(id: string): Observable<Classroom> {
    return this.http.get<Classroom>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
