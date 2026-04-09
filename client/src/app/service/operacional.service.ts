import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperacionalService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'cadastroAnimal', data);
  }

  registerTipoCusto(data: any): Observable<any> {
    console.log('dados service', data);
    return this.http.post(environment.apiUrl + 'cadastroTipoCusto', data);
  }

  registerCusto(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'cadastroCustos', data);
  }

  registerTipoVacina(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'cadastroVacina', data);
  }

  registerTipoRacao(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'cadastroRacao', data);
  }

  getOperacional(metodo: any): Observable<any> {
    return this.http.get(environment.apiUrl + metodo);
  }

  updateAnimal(data: any, id: number): Observable<any> {
    return this.http.patch(environment.apiUrl + 'updateAnimal/' + id, data);
  }

  deleteAnimal(id: number) {
    return this.http.delete<any>(environment.apiUrl + 'animal/' + id);
  }

  updateTipoCusto(data: any, id: number): Observable<any> {
    return this.http.patch(environment.apiUrl + 'updateTipoCusto/' + id, data);
  }

  deleteTipoCusto(id: number) {
    return this.http.delete<any>(environment.apiUrl + 'tipoCusto/' + id);
  }

  updateVacina(data: any, id: number): Observable<any> {
    return this.http.patch(environment.apiUrl + 'updateVacina/' + id, data);
  }

  deleteVacina(id: number) {
    return this.http.delete<any>(environment.apiUrl + 'vacina/' + id);
  }

  updateRacao(data: any, id: number): Observable<any> {
    return this.http.patch(environment.apiUrl + 'updateRacao/' + id, data);
  }

  deleteRacao(id: number) {
    return this.http.delete<any>(environment.apiUrl + 'racao/' + id);
  }


}
