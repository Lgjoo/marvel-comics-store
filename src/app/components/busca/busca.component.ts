import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { VariablesService } from 'src/app/services/variables.service';

/**
 * Componente que mostra as opções de busca da aplicação
 */

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  public tituloComic: string = '';

  constructor(public variables: VariablesService, public comics: ComicsService) { }

  ngOnInit(): void {
  }

  /**
   * Método para realizar a busca na API utilizando o título desejado
   */
  buscarComics(): void {
    this.variables.setTituloBusca(this.tituloComic);
    this.variables.setCarregandoComics(true);
    this.comics.getComics(this.tituloComic).subscribe(
      comics => {
        this.variables.setComics(comics.data.results, true);
        this.variables.setCarregandoComics(false);
        this.variables.setMenuBuscaAberto(false);
      }
    );
  }
}
