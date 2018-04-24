import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTestService } from './services/auth-test.service';
import { HttpClientModule } from '@angular/common/http';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HttpClientModule,
    ProtectedComponent],
  declarations: [ProtectedComponent, AuthCallbackComponent],
  providers : [AuthTestService, AuthGuardService, AuthService]
})
export class SharedModule { }
