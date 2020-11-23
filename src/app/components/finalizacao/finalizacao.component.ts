import { formatCurrency } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Comic } from 'src/app/models/comic';
import { Cupom } from 'src/app/models/cupom';
import { VariablesService } from 'src/app/services/variables.service';

/**
 * Componente da finalização do pedido
 */

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.css']
})
export class FinalizacaoComponent implements OnInit {
  public comics: Array<Comic> = [];
  public codigoCupom: string = '';
  public cuponsPedido: Array<Cupom> = [];
  private _success = new Subject<string>();
  public mensagem: string = '';
  
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(public variables: VariablesService) { }

  ngOnInit(): void {
    this.comics = this.variables.getComicsPedido();
    this._success.subscribe(message => this.mensagem = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  /**
   * Método que altera a quantidade de uma HQ no pedido
   * 
   * @param comic HQ
   * @param quantidade quantidade no pedido 
   */
  mudaQuantidade(comic: Comic, quantidade: number): void {
    if(quantidade < 1) {
      quantidade = 1;
    }
    comic.quantidade = quantidade;
  }

  /**
   * Método que retorna o preço da HQ formatado
   * 
   * @param comic HQ
   * @param precoUnitario Preço da HQ 
   */
  getPrecoTotal(comic: Comic, precoUnitario: string): string {
    let precoTotal: number = 0;

    precoTotal = parseFloat(precoUnitario.replace('$', '')) * comic.quantidade;

    return formatCurrency(precoTotal, 'en-us', '$');
  }

  /**
   * Método que calcula o total do pedido considerando cupons
   */
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

  /**
   * Método que realiza o checkout do pedido
   */
  fazerCheckoutPedido(): void {
    if(this.comics.length > 0) {
      this.variables.setComicsPedido([]);
      this.variables.setMenuCarrinhoAberto(false);
      this.cuponsPedido.forEach(cupom => {
        this.variables.cupomUtilizado(cupom);
      });
      this.cuponsPedido = [];
      this.comics = [];
      this._success.next('Obrigado por comprar conosco!');
    }
  }

  /**
   * Método que insere um cupom no pedido
   */
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

  /**
   * Método que retira um cupom do pedido
   * 
   * @param cupom Cupom
   */
  removeCupomPedido(cupom: Cupom): void {
    let indexCupom = this.cuponsPedido.findIndex(cupomPedido => cupomPedido.id == cupom.id);

    this.cuponsPedido.splice(indexCupom, 1);
  }
}
