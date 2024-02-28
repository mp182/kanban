import { Component, OnInit, inject } from '@angular/core';
import { Auth, User, authState, signOut } from '@angular/fire/auth';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  public user$: Observable<User | null> = EMPTY;

  private auth: Auth = inject(Auth);

  ngOnInit(): void {
    if (this.auth) {
      this.user$ = authState(this.auth);
    }
  }

  public async logout() {
    return await signOut(this.auth);
  }

}
