import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CrudService } from '../services/crud.service';
import { GLOBALS } from '../../shared/globals';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() menuButtonClick = new EventEmitter();
  expressRes: ExpressRes; // ExpressRes;
  showCard = false;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private crud: CrudService,
    @Inject(GLOBALS) public user: User) { }

  openDialog(option): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      data: option  // signup or login
    });

  dialogRef.afterClosed().subscribe(
    (dialogResult: ExpressRes) => {
      if (dialogResult) {
        this.expressRes = dialogResult;
        this.user = dialogResult.payload;
      }
    },
    (err) => {
        this.expressRes = {status: 'error', message: 'error'};
        this.user = null;
    });
  }


  logout() {
    if (this.user) {
      this.crud.get_logout()
      .subscribe(
        (resp) => {
          console.log('resp logout: ' + JSON.stringify(resp));
          this.expressRes = resp.body;
          this.user = null;
          this.router.navigate(['.']);
      });
    }
  }

  ask() {
      this.crud.get()
      .subscribe(
        (resp) => {
          this.expressRes = resp.body;
        });
  }

  response() {
    if (this.user) {
      this.router.navigate(['/response']);
    }
  }

  toggleCard() {
    this.showCard = true;
  }
}
