import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../shared/model';
import { AbstractService } from './abstract-service';
import { Observable } from 'rxjs';

@Injectable()
export class CardsService extends AbstractService<Model, number> {

  constructor(private http: HttpClient) {
    super();
  }

  listar(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url);
  }
  buscar(id: number): Observable<Model> {
    return this.http.get<Model>(`${this.url}/${id}`);
  }
  criar(objeto: Model): Observable<Model> {
    return this.http.post<Model>(this.url, objeto);
  }
  atualizar(objeto: Model): Observable<Model> {
    return this.http.patch<Model>(this.url, objeto);
  }
  deletar(id: number): void {
    this.http.delete(`${this.url}/${id}`);
  }

}
