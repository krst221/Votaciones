import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  async login() {
    console.log(this.form.value);
    const { error } = await this.auth.login(this.form.value);
    if (error) {
      console.log(error);
    } else {
      this.router
        .navigateByUrl('/app', { replaceUrl: true })
        .then(() => this.toaster.success('Has iniciado sesión!'));
    }
  }

  async register() {
    const { error, user } = await this.auth.createAccount(
      this.form.value
    );
    console.log(user?.identities);
    if (error) {
      console.log(error);
      this.toaster.error('Ha habido un error con el registro.')
    } else if(user?.identities && user.identities.length === 0) {
      this.toaster.error('El correo ya esta registrado.');
    } else {
      this.toaster.info('Te has registrado! Verifica tu correo.');
    }
  }
}
