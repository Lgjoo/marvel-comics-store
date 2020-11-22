import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.css']
})
export class FinalizacaoComponent implements OnInit {
  public comics: Array<Comic> = [];

  constructor(public variables: VariablesService) { }

  ngOnInit(): void {
    this.comics = this.variables.getComicsPedido();
  }

  mudaQuantidade(comic: Comic, quantidade: number) {
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
      total += comic.preco * comic.quantidade;
    });

    return formatCurrency(total, 'en-us', '$')
  }

  fazerCheckoutPedido(): void {
    this.variables.setComicsPedido([]);
    this.variables.setMenuCarrinhoAberto(false);
  }
}
