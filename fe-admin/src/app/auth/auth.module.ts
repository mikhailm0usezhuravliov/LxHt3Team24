import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { NgMaterialModule } from '../shared/ng-material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, AuthRoutingModule, NgMaterialModule, ReactiveFormsModule],
})
export class AuthModule {}
