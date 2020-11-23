import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbAlert, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Comic } from 'src/app/models/comic';
import { VariablesService } from 'src/app/services/variables.service';
import { DetalhesComponent } from '../detalhes/detalhes.component';

/**
 * Componente que exibe a HQ na lista de HQs
 */

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  private _success = new Subject<string>();
  public mensagem: string = '';
  
  @Input() comic: Comic;
  modalOptions: NgbModalOptions = {
    size: 'xl',
    centered: true
  };

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(private modalService: NgbModal, public variables: VariablesService) { }

  ngOnInit(): void {
    this._success.subscribe(message => this.mensagem = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  /**
   * Método que abre os detalhes da HQ
   * 
   * @param comic HQ
   */
  abreDetalhes(comic: Comic): void {
    const modalDetalhe = this.modalService.open(DetalhesComponent, this.modalOptions);
    modalDetalhe.componentInstance.comic = comic;
  }

  /**
   * Método que insere a HQ no pedido
   * 
   * @param comic HQ
   */
  insereCarrinho(comic: Comic): void {
    this.variables.insereComicPedido(comic);
    this._success.next('Inserido no carrinho');
  }

  /**
   * Método que troca o label do botão ao passar o mouse por cima
   * 
   * @param mouseHover mouse está em cima do botão ou não
   * @param event evento da ação
   */
  changeLabelBotaoComprar(mouseHover: boolean, event): void {
    document.getElementById(event.target.id).innerHTML = mouseHover 
      ? 'Comprar'
      : this.variables.getPrice(this.comic);
  }

}
