import { Component, OnInit } from '@angular/core';

class quarto {
imagem: string;
nameRepublica: string;
priceQuarto: number;
addressRepublica: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  quartos: quarto[];

 constructor() { }

handleEvent(event:any){
    console.log('Evento Recebido');
}

 ngOnInit() {
     this.quartos = [
    {
        imagem: 'assets/casa.jpg',
        nameRepublica: 'Casa Kaller',
        priceQuarto: 700,
        addressRepublica: 'Rua Maria Joana, Tijuca, Rio de Janeiro'
    },
    {
        imagem: 'assets/cozinha.jpg',
        nameRepublica: 'Casa Kouter',
        priceQuarto: 900,
        addressRepublica: 'Rua Santa Maga, Ipanema, Rio de Janeiro'
    },
    ]
 }
}
