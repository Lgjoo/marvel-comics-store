import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Comic } from 'src/app/models/comic';
import { VariablesService } from 'src/app/services/variables.service';
import { DetalhesComponent } from '../detalhes/detalhes.component';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic: Comic;
  modalOptions: NgbModalOptions = {
    size: 'xl',
    centered: true
  };

  constructor(private modalService: NgbModal, public variables: VariablesService) { }

  ngOnInit(): void {
  }

  abreDetalhes(comic: Comic): void {
    const modalDetalhe = this.modalService.open(DetalhesComponent, this.modalOptions);
    modalDetalhe.componentInstance.comic = comic;
  }

  insereCarrinho(comic: Comic): void {
    this.variables.insereComicPedido(comic);
  }

  changeLabelBotaoComprar(mouseHover: boolean, event): void {
    document.getElementById(event.target.id).innerHTML = mouseHover 
      ? 'Comprar'
      : this.variables.getPrice(this.comic);
  }

}
