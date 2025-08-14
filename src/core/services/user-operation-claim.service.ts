import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserOperationClaim } from "../models/user-operation-claim.model";

@Injectable({ providedIn: "root" })
export class UserOperationClaimService {
  private readonly apiUrl = "/api/UserOperationClaims";

  constructor(private http: HttpClient) {}

  create(claim: Partial<UserOperationClaim>): Observable<UserOperationClaim> {
    return this.http.post<UserOperationClaim>(this.apiUrl, claim);
  }

  update(claim: UserOperationClaim): Observable<UserOperationClaim> {
    return this.http.put<UserOperationClaim>(this.apiUrl, claim);
  }

  getAll(): Observable<UserOperationClaim[]> {
    return this.http.get<UserOperationClaim[]>(this.apiUrl);
  }

  getById(id: string): Observable<UserOperationClaim> {
    return this.http.get<UserOperationClaim>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
