import { Directive, HostListener, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  private auth: Auth = inject(Auth);

  constructor() { }

  @HostListener('click')
  public onclick() {
    this.login();
  }

  async login() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}