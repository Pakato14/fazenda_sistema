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
    return this.http.post(environment.apiUrl + 'registercompany', data);
  }

  getCompanies(metodo: string): Observable<any> {
    return this.http.get(environment.apiUrl + metodo);
  }

  verificaCNPJ(cnpj: string): Observable<any> {
    return this.http.get(environment.apiUrl + 'checkCompany/' + cnpj);
  }

  atualizarEmpresa(data: any, id: number): Observable<any> {
    return this.http.put(environment.apiUrl + 'atualizaEmpresa/' + id, data);
  }

  deletarEmpresa(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'empresa/' + id);
  }

  pegarEmpresaPorId(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + 'empresa/' + id);
  }
}
