import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar3',
  templateUrl: './toolbar3.component.html',
  styleUrls: ['./toolbar3.component.css']
})
export class Toolbar3Component implements OnInit {
  modal;
  img;
  modalImg;
  toolbar1;
  toolbar2;

  constructor() { }

  ngOnInit() {
    // Get the modal
    this.modal = document.getElementById('myModal');
    this.modalImg = document.getElementById('img01');
  }


  showModal() {
    this.modal.style.display = 'block';
    this.modalImg.src = '../assets/cat.jpg';
  }

  hideModal() {
    this.modal.style.display = 'none';
  }

  // When the user clicks on <span> (x), close the modal
  onMouseOver(event) {
    if (event.clientY <  this.modalImg.y ||
        event.clientY >  this.modalImg.y + this.modalImg.height ||
        event.clientX <  this.modalImg.x ||
        event.clientX >  this.modalImg.x + this.modalImg.width) {
    this.hideModal();
  }
}


}
