import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Buffer } from 'buffer'; // Node.js global class
import { CrudService } from '../services/crud.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup;
 loginObject: Login = {username: '', password: ''};
 expressRes: ExpressRes; // ExpressRes;
 status = '';

 constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public option: string,
    private crud: CrudService,
    public snackBar: MatSnackBar) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
      });
    }

    login() {
      this.status = 'charging';
      this.crud.post_login_option(this.loginObject, 'login')
      .subscribe(
      (resp) => {
        this.dialogRef.close(resp.body);
      },
      (err) => {
        // console.log('Error login/sigup: ' + JSON.stringify(err));
        this.openSnackBar(err.error.message || 'Authentication error', 'Error');
        this.expressRes = {status: 'error', message: err.message};
        this.status = '';
      });
    }

    signup() {
      this.status = 'charging';
      this.crud.post_login_option(this.loginObject, 'signup')
      .subscribe(
      (resp) => {
        this.openSnackBar(resp.body.message, 'Success');
        this.dialogRef.close(resp.body);
      },
      (err) => {
        console.log('Error login/sigup: ' + JSON.stringify(err));
        this.openSnackBar(err.error.message || 'Authentication error', 'Error');
        this.expressRes = {status: 'error', message: err.message};
        this.status = '';
      });
    }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    get username() { return this.loginForm.get('username'); }
    get password() { return this.loginForm.get('password'); }

    // changeEventHandler(event) {
    //   this.password.setValue(event.target.value);
    //   console.log('Password is ' + event.target.value);
    // }
}
