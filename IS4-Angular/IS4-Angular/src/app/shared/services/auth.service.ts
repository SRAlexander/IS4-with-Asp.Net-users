import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { AuthHttp, AuthConfig, tokenNotExpired } from 'angular2-jwt';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthService {

  private manager: UserManager = new UserManager(getClientSettings());
  private user: User = null;
  cachedRequests: Array<HttpRequest<any>> = [];

  constructor() { 
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }

  public getToken(): string {
    var token = localStorage[0];
    return token;
  }
  
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }
  
  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'https://localhost:44379/',
    client_id: 'ng',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: "id_token token",
    scope: "openid profile",
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
  };
}
