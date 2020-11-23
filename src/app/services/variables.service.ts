import { formatCurrency } from '@angular/common';
import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';
import { CuponsService } from './cupons.service';
import { Cupom } from '../models/cupom';

/**
 * Serviço de controle das variáveis
 */

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
  private comicsPedido: Array<Comic> = [];
  private cuponsDisponiveis: Array<Cupom> = [];

  constructor(public cupons: CuponsService) {
    this.cupons.getCupons().subscribe(
      cuponsImportados => {
        this.cuponsDisponiveis = cuponsImportados.cupons;
      }
    );
  }

  getMenuBuscaAberto(): boolean {
    return this.menuBuscaAberto;
  }

  setMenuBuscaAberto(aberto: boolean): void {
    if(this.menuCarrinhoAberto && aberto) {
      this.menuCarrinhoAberto = false;
    }
    this.menuBuscaAberto = aberto;
  }

  getMenuCarrinhoAberto(): boolean {
    return this.menuCarrinhoAberto;
  }

  setMenuCarrinhoAberto(aberto: boolean): void {
    if(this.menuBuscaAberto && aberto) {
      this.menuBuscaAberto = false;
    }
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

  getPrice(comic: Comic): string {
    return formatCurrency(comic.preco, 'en-us', '$');
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

  getComicsPedido(): Array<any> {
    return this.comicsPedido;
  }

  setComicsPedido(comics: Array<any>): void {
    this.comicsPedido = comics;
  }

  insereComicPedido(comic: Comic): void {
    let indexComic = this.comicsPedido.findIndex(comicPedido => comicPedido.id == comic.id);

    if(indexComic > -1) {
      this.comicsPedido[indexComic].quantidade++;
    } else {
      comic.quantidade = 1;
      this.comicsPedido.push(comic);
    }
  }

  removeComicPedido(comic: Comic): void {
    let indexComic = this.comicsPedido.findIndex(comicPedido => comicPedido.id == comic.id);

    if(indexComic > -1) {
      this.comicsPedido.splice(indexComic, 1);
    }
  }

  /**
   * Método para pegar os cupons disponíveis, retirando os já utilizados pelo usuário em outras compras
   */
  getCuponsDisponiveis(): Array<Cupom> {
    let cuponsUtilizados: Array<Cupom> = JSON.parse(localStorage.getItem('cuponsUtilizados')) || [];

    this.cuponsDisponiveis = this.cuponsDisponiveis.filter(cupom => {
      if(cuponsUtilizados.find(cupomUtilizado => cupomUtilizado.id == cupom.id) === undefined) {
        return cupom;
      }
    });

    return this.cuponsDisponiveis;
  }

  /**
   * Método que grava o cupom utilizado na compra para não ser mais utilizado
   * 
   * @param cupom cupom utilizado na compra
   */
  cupomUtilizado(cupom: Cupom): void {
    let cuponsUtilizados: Array<Cupom> = JSON.parse(localStorage.getItem('cuponsUtilizados')) || [];

    cuponsUtilizados.push(cupom);

    localStorage.setItem('cuponsUtilizados', JSON.stringify(cuponsUtilizados));
  }
}
