import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private comicsUrl: string = 'https://gateway.marvel.com:443/v1/public/comics?';
  private publicKey: string = 'dadf708548c33c0f35097c1274a3775e';
  private privateKey: string = '88fd93f2455f0ef672734efb5f9b6efed8349fee';
  private requisicaoEmAndamento: boolean = false;
  private idTerminadoRaridade: number;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.idTerminadoRaridade = Math.floor(Math.random() * 10);
  }

  getComics(titulo: string = '', offset: number = 0): Observable<{data: {results: Comic[]}}> {
    let url = this.comicsUrl;
    if(titulo.length > 0) {
      url += 'titleStartsWith='+encodeURI(titulo)+'&';
    }
    if(offset != 0) {
      url += 'offset='+offset+'&';
    }
    if(!this.requisicaoEmAndamento) {
      this.requisicaoEmAndamento = true;

      return this.http.get<{data: {results: Comic[]}}>(url + this.getParams())
      .pipe(
        tap(dados => {
          this.requisicaoEmAndamento = false;

          dados.data.results.forEach(dado => {
            if(dado.id.toString().endsWith(this.idTerminadoRaridade.toString())) {
              dado.raro = true;
            } else {
              dado.raro = false;
            }
            let preco = dado.prices.find(preco => preco.type == 'printPrice');
            if(!!preco) {
              dado.preco = preco.price;
            } else {
              dado.preco = 0.0;
            }
          });

          return dados;
        }),
        catchError(error => {
          console.log(error);

          return [];
        })
      );
    }
  }

  getParams(): string {
    let ts = new Date().getTime();
    let hash = Md5.hashStr(ts + this.privateKey + this.publicKey);
    let params = 'ts=' + ts + '&apikey=' + this.publicKey + '&hash=' + hash;

    return params;
  }
}
