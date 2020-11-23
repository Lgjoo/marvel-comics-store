import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Componente de login do usuário
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuarioLogin: string = '';
  public senhaLogin: string = '';
  public logado: boolean = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    let usuarioSenha = localStorage.getItem('usuarioSenha');

    if(usuarioSenha != null) {
      this.logado = true;
      let usuarioSenhaParsed = JSON.parse(usuarioSenha);
      this.usuarioLogin = usuarioSenhaParsed.usuario;
    }
  }

  logarUsuario(): void {
    let usuarioSenha = {
      usuario: this.usuarioLogin,
      senha: this.senhaLogin
    };

    localStorage.setItem('usuarioSenha', JSON.stringify(usuarioSenha));
  }

  deslogarUsuario(): void {
    this.usuarioLogin = '';
    localStorage.removeItem('usuarioSenha');
    this.logado = false;
  }
}
