import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-listar-comics',
  templateUrl: './listar-comics.component.html',
  styleUrls: ['./listar-comics.component.css']
})
export class ListarComicsComponent implements OnInit {
  public comics: Array<Comic> = [];

  constructor(public variables: VariablesService) { }

  ngOnInit() {
    this.setComics();
  }

  setComics(): void {
    this.comics = this.variables.getComics();
  }
}
