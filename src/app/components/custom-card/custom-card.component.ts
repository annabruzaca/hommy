import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {

    title: string = 'Casa Kaller';
    subtitle: number = 700;
    content: string = 'Rua Maria Joana, Tijuca, Rio de Janeiro';

  constructor() { }

  ngOnInit() {}
}
