import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { Cupom } from 'src/app/models/cupom';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.css']
})
export class FinalizacaoComponent implements OnInit {
  public comics: Array<Comic> = [];
  public codigoCupom: string = '';
  public cuponsPedido: Array<Cupom> = [];

  constructor(public variables: VariablesService) { }

  ngOnInit(): void {
    this.comics = this.variables.getComicsPedido();
  }

  mudaQuantidade(comic: Comic, quantidade: number): void {
    if(quantidade < 1) {
      quantidade = 1;
    }
    comic.quantidade = quantidade;
  }

  getPrecoTotal(comic: Comic, precoUnitario: string): string {
    let precoTotal: number = 0;

    precoTotal = parseFloat(precoUnitario.replace('$', '')) * comic.quantidade;

    return formatCurrency(precoTotal, 'en-us', '$');
  }

  getTotalPedido(): string {
    let total: number = 0;

    this.comics.forEach(comic => {
      let precoComic = comic.preco * comic.quantidade;

      this.cuponsPedido.forEach(cupom => {
        if(comic.raro) {
          if(cupom.raro) {
            precoComic -= precoComic* (cupom.desconto / 100);
          }
        } else {
          precoComic -= precoComic* (cupom.desconto / 100);
        }
      });

      total += precoComic;
    });

    return formatCurrency(total, 'en-us', '$')
  }

  fazerCheckoutPedido(): void {
    this.variables.setComicsPedido([]);
    this.variables.setMenuCarrinhoAberto(false);
    this.cuponsPedido.forEach(cupom => {
      this.variables.cupomUtilizado(cupom);
    });
  }

  inserirCupom(): void {
    let cupons = this.variables.getCuponsDisponiveis();

    let cupomInserido = cupons.find(cupom => cupom.codigo == this.codigoCupom);
    let cupomJaInserido = this.cuponsPedido.find(cupom => cupom.id == cupomInserido.id);

    if(cupomInserido !== undefined && cupomJaInserido === undefined) {
      this.codigoCupom = '';
      this.cuponsPedido.push(cupomInserido);
    }
  }

  getRaridadeCupom(raro: boolean): string {
    return raro ? 'Raro' : 'Comum';
  }

  getDescontoCupom(desconto: number): string {
    return desconto.toPrecision(2) + '%';
  }

  removeCupomPedido(cupom: Cupom): void {
    let indexCupom = this.cuponsPedido.findIndex(cupomPedido => cupomPedido.id == cupom.id);

    this.cuponsPedido.splice(indexCupom, 1);
  }
}
