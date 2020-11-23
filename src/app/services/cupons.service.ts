import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupom } from '../models/cupom';
import { HttpClient } from '@angular/common/http';

/**
 * Serviço de controle dos cupons
 */

@Injectable({
  providedIn: 'root'
})
export class CuponsService {

  constructor(private http: HttpClient) { }

  /**
   * Método de requisição dos cupons
   */
  getCupons(): Observable<{cupons: Cupom[]}> {
    return this.http.get<{cupons: Cupom[]}>('assets/mocks/cupons.json');
  }
}
