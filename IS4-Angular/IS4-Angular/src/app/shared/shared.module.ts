import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTestService } from './services/auth-test.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { CallApiComponent } from './components/call-api/call-api.component';
import { HttpModule } from '@angular/http';
import { TokenInterceptor } from './interceptors/token.interceptor';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  exports: [HttpClientModule,
    ProtectedComponent],
  declarations: [ProtectedComponent, AuthCallbackComponent, CallApiComponent],
  providers : [AuthTestService, AuthGuardService, AuthService]
})
export class SharedModule { }
