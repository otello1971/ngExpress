import { Component, Input} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    userLoggedIn: UserLoggedIn;
    userToken: string;
    expressRes: Object; // ExpressRes;
    // httpResponse: HttpResponse<Object>;
    constructor(
      private http: HttpClient,
      public dialog: MatDialog) {}

    openDialog(option): void {
      const url = 'http://192.168.188.129:3000/tools/' +  option;
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '250px',
        data: { username: '', password: '' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.userLoggedIn = result;
          console.log('The dialog was closed: ' + JSON.stringify(result));
          this.http
          .post<Object>(
              url,
              result,
              {
                observe: 'response',
                // headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'json',
                withCredentials: true
              }
          )
          .subscribe(
            (resp) => {
              this.expressRes = resp.body;
              console.log('Cookie: ' + JSON.stringify(resp.headers));
              console.log('Respuesta: ' + JSON.stringify(resp));
          });
        }
      });
    }

    logout() {
      if (this.userLoggedIn) {
        this.http
        .get('http://192.168.188.129:3000/tools/logout',
        {
          withCredentials: true
        })
        .subscribe(
          (resp: ExpressRes) => {
            this.expressRes = resp;
            this.userToken = null;
            this.userLoggedIn = null;
            console.log('logout ... : ' + JSON.stringify(resp));
          }
        );
      }
    }

    ask() {
      // if (this.userLoggedIn) {
        this.http
        .get('http://192.168.188.129:3000/',
        {
          observe: 'response',
          responseType: 'text',
          withCredentials: true
        })
        .subscribe(
          (resp: Object) => {
            this.userToken = JSON.stringify(resp);
            console.log('token received is : ' + JSON.stringify(resp));
          }
        );
      // }
    }

    response() {
      if (this.userLoggedIn) {
        this.http
        .post('http://192.168.188.129:3000/',
        this.userToken,
        {
          observe: 'response',
          responseType: 'text',
          withCredentials: true
        })
        .subscribe(
          (resp: Object) => {
            this.userToken = JSON.stringify(resp);
            console.log('token received is : ' + JSON.stringify(resp));
          }
        );
      }
    }

}
