import { Component, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
// import { trigger, state, style, animate, transition } from '@angular/animations';
declare var $: any; // JQuery compatibility for Bootstrap4
declare var jQuery: any; // JQuery compatibility for Bootstrap4

@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html',
  styleUrls: ['./toolbar2.component.css', './toolbar2.animations.css']
})
export class Toolbar2Component implements OnInit {

  @Output() showModal = new EventEmitter();
  @Output() hideModal = new EventEmitter();
  cardId = '';

  constructor() { }

  ngOnInit(): void {
    $('#navbarSupportedContent2').collapse('show');  // versión móvil, muestra menú de navegación.
  }

  // showCard(event) {
  //   this.cardId = event.currentTarget.id;
  //   document.getElementById(this.cardId).className = this.cardId + ' menu-item buttonIn';
  //   this.router.navigate([ { outlets: { toolbar2: [ 'toolbar2', { outlets: { cards: [this.cardId ]}}] }}]);
  // }

  hideCard(event) {
    // si la salida del mouse se efectúa por todas partes excepto por la base del elemento
    // event.clientY es la coordenada de salida del mouse
    console.log(
      'event.relatedTarget.itemId: ' + event.relatedTarget.id
      + ', event.target.itemId: ' + event.target.id
    );
    if (event.clientY - event.currentTarget.offsetHeight < event.relatedTarget.Height ) {
      // document.getElementById(this.cardId).className = this.cardId + ' menu-item buttonOut';
      // this.router.navigate([ { outlets: { toolbar2: [ 'toolbar2', { outlets: { cards: null}}]}}]);
      // this.router.navigate([ { outlets: { toolbar2: null }}]);
       this.hideModal.emit();
     }
  }

  // toggle(id) {
  //     window.requestAnimationFrame(function(time) {
  //       document.getElementById(id).className = id + ' menu-item buttonFade';
  //     });
  // }

}
