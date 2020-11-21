import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  private menuBuscaAberto: boolean = false;
  private menuCarrinhoAberto: boolean = false;

  constructor() { }

  getMenuBuscaAberto(): boolean {
    return this.menuBuscaAberto;
  }

  setMenuBuscaAberto(aberto: boolean): void {
    this.menuBuscaAberto = aberto;
  }

  getMenuCarrinhoAberto(): boolean {
    return this.menuCarrinhoAberto;
  }

  setMenuCarrinhoAberto(aberto: boolean): void {
    this.menuCarrinhoAberto = aberto;
  }
}
