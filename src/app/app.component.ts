import { Component, Input, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { CrudService } from './services/crud.service';
import { GLOBALS } from '../shared/globals';
import { Toolbar3Component } from './toolbar3/toolbar3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {


  constructor() { }

  ngOnInit() { }

}
