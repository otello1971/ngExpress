import { Component, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
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

  @Output() showModal = new EventEmitter<string>();
  @Output() hideModal = new EventEmitter();

  showBrand = false; // toggles brand logo on toolbar

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    $('#navbarSupportedContent2').collapse('show');  // versión móvil, muestra menú de navegación.
  }

  hideCard(event) {
    // si la salida del mouse se efectúa por todas partes excepto por la base del elemento
    // event.clientY es la coordenada de salida del mouse
    // console.log (
    //   'event.relatedTarget.itemId: ' + event.relatedTarget.id
    //   + ', event.relatedTarget.className: ' + event.relatedTarget.className
    //   + ', event.target.itemId: ' + event.target.id
    // );
    if (event.relatedTarget) {
      if (!event.relatedTarget.className.startsWith('card')) {
        this.hideModal.emit();
      }
    } else {
      this.hideModal.emit();
    }
  }

  // Toolbar dinámico ante scroll
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    // toolbar1 invisible, toolbar2 fixed-top con logo en el centro.
    if (scrollPosition >= 55) {
      document.getElementById('toolbar1').className = 'invisible';
      document.getElementById('myModal').style.top = '55px';
      this.showBrand = true; // articula las opciones dinámicas en html
    } else {
      document.getElementById('toolbar1').className = 'row';
      document.getElementById('myModal').style.top = '120px';
      this.showBrand = false;
    }
  }

}
