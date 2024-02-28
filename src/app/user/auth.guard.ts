import { inject } from "@angular/core";
import { Auth, authState } from "@angular/fire/auth";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs";
import { SnackService } from "../services/snack.service";

export const authGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const snackbarService: SnackService = inject(SnackService);
  const auth: Auth = inject(Auth);
  const user$ = authState(auth);
  return user$.pipe(
    map(user => {
      const isLoggedIn = !!user;
      if (!isLoggedIn) {
        snackbarService.authError();
      }
      return isLoggedIn;
    })
  );
}
