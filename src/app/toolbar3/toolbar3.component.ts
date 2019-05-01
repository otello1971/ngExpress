import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar3',
  templateUrl: './toolbar3.component.html',
  styleUrls: ['./toolbar3.component.scss']
})
export class Toolbar3Component implements OnInit {
  modal;
  modalContent;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // Get the modal
    this.modal = document.getElementById('myModal');
    this.modalContent = document.getElementById('myCard');
  }


  showModal(cardname: string) {
    this.router.navigate([ { outlets: { cards: cardname  }}]);
    this.modal.className = 'modal cardIn';
  }

  hideModal() {
    this.router.navigate(['/']);
    this.modal.className = 'modal cardOut';
  }

  // When the user clicks outside card-group
  onMouseOver(event) {
    if (event.target.id === 'myModal') {
      this.hideModal();
    }
  }
}
