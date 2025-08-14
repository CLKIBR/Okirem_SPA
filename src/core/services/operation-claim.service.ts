import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OperationClaim } from "../models/operation-claim.model";

@Injectable({ providedIn: "root" })
export class OperationClaimService {
  private readonly apiUrl = "/api/OperationClaims";

  constructor(private http: HttpClient) {}

  create(claim: Partial<OperationClaim>): Observable<OperationClaim> {
    return this.http.post<OperationClaim>(this.apiUrl, claim);
  }

  update(claim: OperationClaim): Observable<OperationClaim> {
    return this.http.put<OperationClaim>(this.apiUrl, claim);
  }

  getAll(): Observable<OperationClaim[]> {
    return this.http.get<OperationClaim[]>(this.apiUrl);
  }

  getById(id: string): Observable<OperationClaim> {
    return this.http.get<OperationClaim>(`${this.apiUrl}/${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
