import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
          email: [null, [Validators.required, Validators.email]],
          senha: [null, [Validators.required, Validators.minLength(1)]],
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
