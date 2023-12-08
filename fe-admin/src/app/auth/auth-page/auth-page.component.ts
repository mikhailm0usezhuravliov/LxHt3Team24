import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iUser } from '../../shared/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public flag: boolean = true;
  public loginError: boolean = false;

  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _route: Router
  ) {
    this.form = this._fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(42),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this._authService.isAuth$.subscribe((val) => {
    });
  }

  login(form: any) {
    let login = this._authService.tryLogIn(form.value as iUser);
    if (login) {
      this._route.navigate(['admin']);
    } else {
      this.loginError = true
    }
  }
}
