import {Component, Input} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientXsrfModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    constructor(
      private http: HttpClient,
      private httpXsrf: HttpClientXsrfModule,
      public dialog: MatDialog) {}

    openDialog(): void {

      const dialogRef = this.dialog.open(LoginComponent, {
        width: '250px',
        data: { username: '', password: '' }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed: ' + JSON.stringify(result));

        this.http
        .post('http://192.168.188.129:3000/tools/login', result,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
        .subscribe(
          (resp: any) => {
            // Here, resp is of type HttpResponse<MyJsonData>.
            // You can inspect its headers:
            console.log(resp);
            // And access the body directly, which is typed as MyJsonData as requested.
            // console.log(resp.body.someField);
          });

      });
    }

  }
