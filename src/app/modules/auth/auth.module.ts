import { SharedModule } from './../../shared/shared.module';
import { AuthService } from './../../core/authentication/auth.service';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

@NgModule({
  declarations: [LoginComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule.forRoot(),
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService],
    };
  }
}
