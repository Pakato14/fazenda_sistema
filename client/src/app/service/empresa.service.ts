import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) {}

  cadastrarEmpresa(data: any): Observable<any> {
    console.log('dados_empresa', data);
    return this.http.post(environment.apiUrl + 'registercompany', data);
  }

  getCompanies(metodo: string): Observable<any> {
    return this.http.get(environment.apiUrl + metodo);
  }
}
