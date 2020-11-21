import { Component } from '@angular/core';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-listar-comics',
  templateUrl: './listar-comics.component.html',
  styleUrls: ['./listar-comics.component.css']
})
export class ListarComicsComponent {

  constructor(public variables: VariablesService) { }

}
