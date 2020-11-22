import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../services/variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public variables: VariablesService) {

  }

  ngOnInit(): void {
  }

  toggleMenuBusca(): void {
    this.variables.setMenuBuscaAberto(!this.variables.getMenuBuscaAberto());
  }

  toggleMenuCarrinho(): void {
    this.variables.setMenuCarrinhoAberto(!this.variables.getMenuCarrinhoAberto());
  }

}
