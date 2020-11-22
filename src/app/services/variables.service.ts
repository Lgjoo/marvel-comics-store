import { formatCurrency } from '@angular/common';
import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  private menuBuscaAberto: boolean = false;
  private menuCarrinhoAberto: boolean = false;
  private carregandoComics: boolean = false;
  private carregandoMaisComics: boolean = false;
  private comics: Array<Comic> = [];
  private tituloBusca: string = '';

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

  getCarregandoComics(): boolean {
    return this.carregandoComics;
  }

  setCarregandoComics(carregando: boolean): void {
    this.carregandoComics = carregando;
  }

  getComics(): Array<Comic> {
    return this.comics;
  }

  setComics(comics: Array<Comic>, novaConsulta: boolean = true): void {
    if (novaConsulta) {
      this.comics = comics;
    } else {
      this.comics = this.comics.concat(comics);
    }
  }

  getPrintPrice(precos: Array<any>): string {
    return formatCurrency(precos.find(preco => preco.type == 'printPrice').price || 0.0, 'en-us', '$');
  }

  getCarregandoMaisComics(): boolean {
    return this.carregandoMaisComics;
  }

  setCarregandoMaisComics(carregando: boolean): void {
    this.carregandoMaisComics = carregando;
  }

  getTituloBusca(): string {
    return this.tituloBusca;
  }

  setTituloBusca(titulo: string): void {
    this.tituloBusca = titulo;
  }
}
