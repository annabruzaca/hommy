import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

// class quarto {
// imagem: string;
// nameRepublica: string;
// priceQuarto: number;
// addressRepublica: string;
// comodidadeRepublica1: string;
// comodidadeRepublica2: string;
// comodidadeRepublica3: string;
// comodidadeRepublica4: string;
// descriptionRepublica: string;
// }

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.page.html',
  styleUrls: ['./quarto.page.scss'],
})

export class QuartoPage implements OnInit {
  quartos: any;
  commentForm: FormGroup;

  constructor(public alertController: AlertController, public formBuilder: FormBuilder, public toastController: ToastController) {
  this.commentForm = this.formBuilder.group({
      comment: [null]
  });
  }
  async alerta() {
      const alert = await this.alertController.create({
          header: 'Deseja reservar quarto?',
          message: 'Tem certeza que deseja reservar?',
          buttons: ['Reservar','Cancelar']
      });
      await alert.present();
  }
  async presentToast() {
      const toast = await this.toastController.create({
          message:'Seu comentário foi enviado!',
          duration:2000
      });
      toast.present();
  }
  ngOnInit() {
      this.quartos = [
          {
          imagem: 'assets/casa.jpg',
          nameRepublica: 'Casa Kaller',
          priceQuarto: 700,
          addressRepublica: 'Rua Maria Joana, Tijuca, Rio de Janeiro',
          comodidadeRepublica1: 'Cozinha',
          comodidadeRepublica2: 'Sala Comunitária',
          comodidadeRepublica3: 'Lavanderia',
          comodidadeRepublica4: 'Mobilhado',
          descriptionRepublica: 'Quartos espaçosos e arejados, ambiente limpo e acolhedor.',
      }
      ]
  }

}
