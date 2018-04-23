import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AuthService } from './auth.service';

@Injectable()
export class AuthTestService {

  apiRoot : string = "https://localhost:44362/"
  constructor(private _http : HttpClient, private _authService : AuthService) { }


  OpenApiCall(): Observable<any> {
    return this._http.get(this.apiRoot + "apiTest/open")
      .do(data => {
        // Pre Process Data
      })
      .catch(this.handleError);
  }

  ClosedApiCall(): Observable<any> {
    // let header = new HttpHeaders({ 'Authorization': this._authService.getAuthorizationHeaderValue() });
    //     let options = ({ headers: header });
    return this._http.get<any>(this.apiRoot + "apiTest/closed")
      .do(data => {
        console.log(data);
      })
      .catch(this.handleError);
  }
  
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
