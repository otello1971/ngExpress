import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html',
  styleUrls: ['./toolbar2.component.css']
})
export class Toolbar2Component {
  // cardVisible = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  showCard(card) {
    this.router.navigate([ { outlets: { toolbar2: [ 'toolbar2', { outlets: { cards: [card ]}}] }}]);
  }

  hideCard(event) {
    // si la salida del mouse se efectúa por todas partes excepto por la base del elemento
    // event.clientY es la coordenada de salida del mouse
    if (event.clientY < event.currentTarget.offsetTop + event.currentTarget.offsetHeight ) {
      // this.router.navigate([ { outlets: { toolbar2: [ 'toolbar2', { outlets: { cards: null}}]}}]);
      this.router.navigate([ { outlets: { toolbar2: null }}]);
    }
  }
}
