import { Component, OnInit } from '@angular/core';
import { VariablesService } from './services/variables.service';
import { ComicsService } from './services/comics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public variables: VariablesService, public comics: ComicsService) {}

  ngOnInit() {
    this.variables.setCarregandoComics(true);
    this.comics.getComics().subscribe(
      comics => {
        this.variables.setComics(comics.data.results, true);
        this.variables.setCarregandoComics(false);
      }
    );
  }
}
