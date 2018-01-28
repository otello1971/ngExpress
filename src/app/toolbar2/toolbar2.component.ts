import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html',
  styleUrls: ['./toolbar2.styles.css', './toolbar2.animations.css']
})
export class Toolbar2Component {
  cardId = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  showCard(event) {
    this.cardId = event.currentTarget.id;
    document.getElementById(this.cardId).className = this.cardId + ' menu-item buttonIn';
    this.router.navigate([ { outlets: { toolbar2: [ 'toolbar2', { outlets: { cards: [this.cardId ]}}] }}]);
  }

  hideCard(event) {
    // si la salida del mouse se efectúa por todas partes excepto por la base del elemento
    // event.clientY es la coordenada de salida del mouse
    if (event.clientY < event.currentTarget.offsetTop + event.currentTarget.offsetHeight ) {
      document.getElementById(this.cardId).className = this.cardId + ' menu-item buttonOut';
      this.router.navigate([ { outlets: { toolbar2: [ 'toolbar2', { outlets: { cards: null}}]}}]);
      // this.router.navigate([ { outlets: { toolbar2: null }}]);
    }
  }

  // play(id) {
  //     window.requestAnimationFrame(function(time) {
  //       document.getElementById(id).className = id + ' menu-item buttonFade';
  //     });
  // }

}
