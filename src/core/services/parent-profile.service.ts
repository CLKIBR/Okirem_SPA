import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ParentProfile } from "../models/parent-profile.model";

@Injectable({ providedIn: "root" })
export class ParentProfileService {
  private readonly apiUrl = "/api/ParentProfiles";

  constructor(private http: HttpClient) {}

  create(profile: Partial<ParentProfile>): Observable<ParentProfile> {
    return this.http.post<ParentProfile>(this.apiUrl, profile);
  }

  update(profile: ParentProfile): Observable<ParentProfile> {
    return this.http.put<ParentProfile>(this.apiUrl, profile);
  }

  getAll(): Observable<ParentProfile[]> {
    return this.http.get<ParentProfile[]>(this.apiUrl);
  }

  getById(id: string): Observable<ParentProfile> {
    return this.http.get<ParentProfile>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
