import { Injectable } from "@angular/core";
import { CanActivate, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class UserOperationClaimGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn()) {
      // Add additional user-operation-claim checks if needed
      return true;
    }
    return this.router.createUrlTree(["/login"]);
  }
}
