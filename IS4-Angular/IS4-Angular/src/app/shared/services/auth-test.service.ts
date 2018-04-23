import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthTestService {

  apiRoot : string = "https://localhost:44362/"
  constructor(private _http : HttpClient) { }


  OpenApiCall(): Observable<any> {
    return this._http.get<any>(this.apiRoot + "apiTest/open")
      .do(data => {
        // Pre Process Data
      })
      .catch(this.handleError);
  }

  ClosedApiCall(): Observable<any> {
    return this._http.get<any>(this.apiRoot + "apiTest/closed")
      .do(data => {
        // Pre Process Data
      })
      .catch(this.handleError);
  }
  
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
