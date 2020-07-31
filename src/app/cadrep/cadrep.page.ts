import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadrep',
  templateUrl: './cadrep.page.html',
  styleUrls: ['./cadrep.page.scss'],
})
export class CadrepPage implements OnInit {
cadrepForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

  this.cadrepForm = this.formBuilder.group({
      quartos: [null, [Validators.required]],
      banheiros: [null, [Validators.required]],
      descricao: [null],
  });
  }
  submitForm(form) {
      console.log(form);
      console.log(form.value);
      window.location.href="/home";
  }
  ngOnInit() {
  }
}
