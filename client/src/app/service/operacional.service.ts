import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperacionalService {

  constructor(private http: HttpClient) { }

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
}
