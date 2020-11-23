import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Comic } from 'src/app/models/comic';
import { VariablesService } from 'src/app/services/variables.service';

/**
 * Componente de detalhes da HQ
 */

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

  /**
   * Método que insere a HQ no pedido
   */
  comprarComic() {
    this.variables.insereComicPedido(this.comic);
    this.activeModal.close();
  }

  /**
   * Método que retorna todos os criadores da HQ numa string
   * 
   * @param criadores criadores da HQ
   */
  getCriadores(criadores: Array<any>): string {
    let resultado: Array<any> = [];

    criadores.forEach(criador => {
      resultado.push(criador.name + ' - ' + criador.role);
    });

    return resultado.join(', ');
  }

  /**
   * Método que retorna todos os personagens da HQ numa string
   * 
   * @param personagens personagens da HQ
   */
  getPersonagens(personagens: Array<any>): string {
    let resultado: Array<any> = [];

    personagens.forEach(personagem => {
      resultado.push(personagem.name);
    });

    return resultado.join(', ');
  }

  /**
   * Método que retorna todas as histórias da HQ numa string
   * 
   * @param historias histórias da HQ
   */
  getHistorias(historias: Array<any>): string {
    let resultado: Array<any> = [];

    historias.forEach(historia => {
      resultado.push(historia.name);
    });

    return resultado.join(', ');
  }
}
