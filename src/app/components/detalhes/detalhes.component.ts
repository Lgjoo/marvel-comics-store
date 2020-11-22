import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Comic } from 'src/app/models/comic';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  @Input() comic: Comic;

  constructor(public activeModal: NgbActiveModal, public variables: VariablesService) { }

  ngOnInit(): void {

  }

  comprarComic() {
    // insereCarrinho(this.comic);
    this.activeModal.close();
  }

  getCriadores(criadores: Array<any>): string {
    let resultado: Array<any> = [];

    criadores.forEach(criador => {
      resultado.push(criador.name + ' - ' + criador.role);
    });

    return resultado.join(', ');
  }

  getPersonagens(personagens: Array<any>): string {
    let resultado: Array<any> = [];

    personagens.forEach(personagem => {
      resultado.push(personagem.name);
    });

    return resultado.join(', ');
  }

  getHistorias(historias: Array<any>): string {
    let resultado: Array<any> = [];

    historias.forEach(historia => {
      resultado.push(historia.name);
    });

    return resultado.join(', ');
  }
}
