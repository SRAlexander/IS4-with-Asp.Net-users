import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { AuthService } from '../../services/auth.service';
import { HttpHeaders, HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthTestService } from '../../services/auth-test.service';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {

  response: any = null;
  constructor(private _http: HttpClient, private _authTest : AuthTestService) { }

  ngOnInit() {
    this._authTest.ClosedApiCall().subscribe(response => {
      this.response = response;
    })
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const clonedRequest = req.clone({
  //     responseType: 'text'
  //   });

  //   return next.handle(clonedRequest)
  //     .map((event: HttpEvent<any>) => {
  //       if (event instanceof HttpResponse) {
  //         return event.clone({
  //           body: JSON.parse(event.body),
  //         });
  //       }
  //     })
  //     .catch((error: HttpErrorResponse) => {
  //         const parsedError = Object.assign({}, error, { error: JSON.parse(error.error) });
  //         return Observable.throw(new HttpErrorResponse(parsedError));
  //     });
  // }

}
