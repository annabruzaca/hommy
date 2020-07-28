import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.page.html',
  styleUrls: ['./quarto.page.scss'],
})

export class QuartoPage implements OnInit {
    quartos = {
        imagem: 'assets/casa.jpg',
        nameRepublica: 'Casa Kaller',
        priceQuarto: 700,
        addressRepublica: 'Rua Maria Joana, Tijuca, Rio de Janeiro'
    };

  constructor() { }

  ngOnInit() {
  }

}
