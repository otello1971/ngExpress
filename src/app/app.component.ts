import { Component, OnInit, Inject} from '@angular/core';
import { GLOBALS } from '../shared/globals';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {


  constructor(private crud: CrudService,
              @Inject(GLOBALS) public user: User) { }

  ngOnInit() {
    this.crud.post('dummy')
    .subscribe(
      (resp) => {
        console.log('app.component ->user: ' + JSON.stringify(resp.body));
        const token = resp.body.message;
      },
      (err) => {
        this.user = null;
      });
  }

}
