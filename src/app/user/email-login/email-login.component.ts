import { Component, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrl: './email-login.component.scss'
})
export class EmailLoginComponent {

  public form!: FormGroup;
  public loading = false;
  public serverMessage!: string;
  public type: 'login' | 'signup' | 'reset' = 'signup';

  private auth: Auth = inject(Auth);
  private formBuilder: FormBuilder = inject(FormBuilder);

  public get email() {
    return this.form.get('email');
  }

  public get isLogin() {
    return this.type === 'login';
  }

  public get isPasswordReset() {
    return this.type === 'reset';
  }

  public get isSignup() {
    return this.type === 'signup';
  }

  public get password() {
    return this.form.get('password');
  }

  public get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  public get passwordDoesMatch() {
    return this.type !== 'signup'
      ? true
      : this.password?.value === this.passwordConfirm?.value;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      passwordConfirm: ['', []]
    });
  }

  public changeType(val: 'login' | 'signup' | 'reset') {
    this.type = val;
  }

  public async onSubmit() {
    this.loading = true;

    const email = this.email?.value;
    const password = this.password?.value;

    try {
      if (this.isLogin) {
        await signInWithEmailAndPassword(this.auth, email, password);
      }
      if (this.isSignup) {
        await createUserWithEmailAndPassword(this.auth, email, password);
      }
      if (this.isPasswordReset) {
        await sendPasswordResetEmail(this.auth, email);
        this.serverMessage = 'Check your email';
      }
    } catch (err: any) {
      this.serverMessage = err;
    }

    this.loading = false;
  }

}
