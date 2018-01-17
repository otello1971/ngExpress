import { Component, Input, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CrudService } from './services/crud.service';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    userLoggedIn: UserLoggedIn = null;
    expressRes: Object; // ExpressRes;

    constructor(
      private dialog: MatDialog,
      private crud: CrudService) {}

    ngOnInit() {

    }

    openDialog(option): void {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '250px',
        data: { username: '', password: '', title: option }
      });

      dialogRef.afterClosed().subscribe(dialog_object => {
        if (dialog_object) {
          this.crud.post_login_option(dialog_object, option)
          .subscribe(
            (resp: ExpressRes) => {
              console.log('resp login/signup: ' + JSON.stringify(resp.body));
              this.expressRes = resp.body;
              this.userLoggedIn = dialog_object; // using destructuring technique: set username
          },
          (err) => {
              this.expressRes = err.error;
              this.userLoggedIn = null;
          });
        }
      });
    }

    logout() {
      if (this.userLoggedIn) {
        this.crud.get_logout()
        .subscribe(
          (resp: ExpressRes) => {
            console.log('resp logout: ' + JSON.stringify(resp.body));
            this.expressRes = resp.body;
            this.userLoggedIn = null;
        });
      }
    }

    ask() {
        this.crud.get()
        .subscribe(
          (resp: ExpressRes) => {
            this.expressRes = resp.body;
          });
    }

    response() {
      if (this.userLoggedIn) {
        this.crud.post('dummy')
        .subscribe(
          (resp: ExpressRes) => {
            console.log('resp response: ' + JSON.stringify(resp.body));
            this.expressRes = resp.body;
          });
      }
    }

}
