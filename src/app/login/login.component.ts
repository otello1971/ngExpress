import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup;

 constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Login) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: new FormControl(this.data.username, [Validators.required]),
          password: new FormControl(this.data.password, [Validators.required])
      });
    }
    get username() { return this.loginForm.get('username'); }
    get password() { return this.loginForm.get('password'); }
}
