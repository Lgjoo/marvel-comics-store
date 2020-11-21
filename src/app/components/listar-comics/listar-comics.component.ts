import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-comics',
  templateUrl: './listar-comics.component.html',
  styleUrls: ['./listar-comics.component.css']
})
export class ListarComicsComponent implements OnInit {
  public numbers = Array(100).fill(4);

  constructor() { }

  ngOnInit(): void {
  }

}
