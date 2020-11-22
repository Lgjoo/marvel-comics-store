import { Component, HostListener, OnInit } from '@angular/core';
import { VariablesService } from './services/variables.service';
import { ComicsService } from './services/comics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onscroll(event) {
    let target = event.target.scrollingElement;
    let posAtual = target.scrollTop;
    let maxScroll = target.scrollTopMax;
    
    if(posAtual > maxScroll * 0.9 && !this.variables.getCarregandoMaisComics()) {
      this.variables.setCarregandoMaisComics(true);
      this.comics.getComics(this.variables.getTituloBusca(), this.variables.getComics().length).subscribe(
        comics => {
          this.variables.setComics(comics.data.results, false);
          this.variables.setCarregandoMaisComics(false);
        }
      );
    }
  }

  constructor(public variables: VariablesService, public comics: ComicsService) {}

  ngOnInit() {
    this.variables.setCarregandoComics(true);
    this.variables.setTituloBusca('');
    this.comics.getComics().subscribe(
      comics => {
        this.variables.setComics(comics.data.results, true);
        this.variables.setCarregandoComics(false);
      }
    );
  }
}
