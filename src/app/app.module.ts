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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLateralComponent,
    ListarComicsComponent,
    ComicComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
