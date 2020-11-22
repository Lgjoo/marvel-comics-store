import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ListarComicsComponent } from './components/listar-comics/listar-comics.component';
import { ComicComponent } from './components/comic/comic.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { BuscaComponent } from './components/busca/busca.component';
import { FormsModule } from '@angular/forms';
import { FinalizacaoComponent } from './components/finalizacao/finalizacao.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLateralComponent,
    ListarComicsComponent,
    ComicComponent,
    DetalhesComponent,
    BuscaComponent,
    FinalizacaoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
