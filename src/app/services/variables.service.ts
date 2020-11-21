import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  private menuBuscaAberto: boolean = false;
  private menuCarrinhoAberto: boolean = false;
  private carregandoComics: boolean = false;
  private comics: Array<Comic> = [];

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
      this.comics = [];
      this.comics = comics;
    } else {
      this.comics.concat(comics);
    }
  }
}
