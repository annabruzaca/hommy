import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-rep',
  templateUrl: './cadastro-rep.page.html',
  styleUrls: ['./cadastro-rep.page.scss'],
})
export class CadastroRepPage implements OnInit {
cadastroForm: FormGroup;

  constructor() {
      this.cadastroRepForm = this.formBuilder.group({
          name: [null, [Validators.required]],
          email: [null, [Validators.required, Validators.email]],
          senha: [null, [Validators.required, Validators.minLength(1)]],
          senha2: [null, [Validators.required, Validators.minLength(1)]],
      });
  }
  submitForm(form) {
      console.log(form);
      console.log(form.value);
      window.location.href="/cad-rep-sn";
  }
  ngOnInit() {
  }

}
