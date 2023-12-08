import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  styleUrls: ['./admin-root.component.scss']
})
export class AdminRootComponent {
  private _authService = inject(AuthService)
  private _router = inject(Router)


  logOut () {
    this._authService.logOut();
    this._router.navigate(['auth', 'signin']);
  }
}
