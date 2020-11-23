import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { VariablesService } from '../../services/variables.service';
import { LoginComponent } from '../login/login.component';

/**
 * Componente do header da aplicação
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalOptions: NgbModalOptions = {
    size: 'md',
    centered: true
  };

  constructor(public variables: VariablesService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  toggleMenuBusca(): void {
    this.variables.setMenuBuscaAberto(!this.variables.getMenuBuscaAberto());
  }

  toggleMenuCarrinho(): void {
    this.variables.setMenuCarrinhoAberto(!this.variables.getMenuCarrinhoAberto());
  }

  /**
   * Método que abre modal para login
   */
  abrirLogin(): void {
    this.modalService.open(LoginComponent, this.modalOptions);
  }
}
