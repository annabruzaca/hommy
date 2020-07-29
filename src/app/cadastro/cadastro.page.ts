import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
cadastroForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
      this.cadastroForm = this.formBuilder.group({
          name: [null, [Validators.required]],
          email: [null, [Validators.required, Validators.email]],
          senha: [null, [Validators.required, Validators.minLength(1)]],
          senha2: [null, [Validators.required, Validators.minLength(1)]],
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
