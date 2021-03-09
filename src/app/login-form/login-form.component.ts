import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidarCamposService } from '../shared/components/campos/validar-campos.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login: FormGroup;
  
  constructor(public validacao: ValidarCamposService,
              private fb: FormBuilder) { }

  get f () {
    return this.login.controls;
  }

  ngOnInit(){
    this.login = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(6)]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  hide = true;

  entrar(){
    this.login.markAllAsTouched();
    if(this.login.invalid){
      return;
    }
    alert("Botão entrar funcionando"+JSON.stringify(this.login.value, null, 4));
  }
}
