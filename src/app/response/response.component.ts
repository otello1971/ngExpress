import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-response',
  template: `
    <p>{{body}}</p>
  `,
  styles: []
})
export class ResponseComponent implements OnInit {
  body: '';
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.post('dummy')
    .subscribe(
      (resp) => {
        console.log('toolbar/response(): ' + JSON.stringify(resp.body));
        this.body = resp.body.message;
      });
  }

}
