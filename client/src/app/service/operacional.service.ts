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
      return this.http.post(environment.apiUrl + 'cadastroTipoCusto', data);
    }

  registerTipoVacina(data: any): Observable<any> {
      return this.http.post(environment.apiUrl + 'cadastroVacina', data);
    }

  registerTipoRacao(data: any): Observable<any> {
      return this.http.post(environment.apiUrl + 'cadastroRacao', data);
    }
}
