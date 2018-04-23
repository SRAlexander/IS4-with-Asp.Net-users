import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedComponent } from './shared/components/protected/protected.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthCallbackComponent } from './shared/components/auth-callback/auth-callback.component';
import { CallApiComponent } from './shared/components/call-api/call-api.component';

const routes: Routes = [
  {
    path: '',
    children: []
},
{
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuardService]
},
{
  path: 'auth-callback',
  component: AuthCallbackComponent
},
{
  path: 'call-api',
  component: CallApiComponent,
  canActivate: [AuthGuardService]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
