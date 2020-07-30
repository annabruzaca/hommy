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

 constructor() { }

 ngOnInit() { }
}
