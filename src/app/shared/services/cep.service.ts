import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cidade, EstadoBr } from '../useful';


@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  urlCidades = '../../../assets/dados/cidades.json';
  urlEstados = '../../../assets/dados/estadosbr.json';

  consultaCEP(cep: string): Observable<any> {
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
    return of({});
  }

  getEstadosBr(): Observable<EstadoBr[]> {
    return this.http.get<EstadoBr[]>(this.urlEstados);
  }

  getCidades(idEstado?: number): Observable<Cidade[]> {
    if (idEstado) {
      return this.http.get<Cidade[]>(this.urlCidades)
        .pipe(
          map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
        );
    } else {
      return this.http.get<Cidade[]>(this.urlCidades)
    }
  }

  getCidadeNome(cidade): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.urlCidades)
      .pipe(
        map((cidades: Cidade[]) => cidades.filter(c => c.nome === cidade))
      );
  }
}
