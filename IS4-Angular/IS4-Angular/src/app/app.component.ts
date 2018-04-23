import { Component } from '@angular/core';
import { AuthTestService } from './shared/services/auth-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  resMessage : string = "";

  constructor(private _authTestService : AuthTestService){

  }

  closedApiCall(){
    console.log("Closed Api call called")
    this._authTestService.ClosedApiCall().subscribe(
      response => {
        this.resMessage = response.text;
      },
      error => {

      }
    );
  }

  openApiCall(){
    console.log("Open Api call called")
    this._authTestService.OpenApiCall().subscribe(
      response => {
        this.resMessage = response.text;
      },
      error => {

      }
    );
  }

  signIn(){
    console.log("Sign in Api call called")
  }

  signOut(){
    console.log("Sign out Api call called")
  }
}


