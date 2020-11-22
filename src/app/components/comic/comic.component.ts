import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Comic } from 'src/app/models/comic';
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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abreDetalhes(comic: Comic): void {
    const modalDetalhe = this.modalService.open(DetalhesComponent, this.modalOptions);
    modalDetalhe.componentInstance.comic = comic;
  }

}
