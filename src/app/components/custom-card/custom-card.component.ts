import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {

    @Input() quarto;

    @Output() buttonPressed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  gogo() {
      console.log('Evento emitido');
      this.buttonPressed.emit("KABOMM");
      alert(event);
  }
}
