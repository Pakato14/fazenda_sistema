import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

  cadastrarFornecedor(fornecedor: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'registerfornecedor', fornecedor);
  }

  listarFornecedor(): Observable<any> {
    return this.http.get(environment.apiUrl + 'allfornecedores');
  }

  atualizarFornecedor(id: number, fornecedor: any): Observable<any> {
    return this.http.put(environment.apiUrl + `atualizaFornecedor/${id}`, fornecedor);
  }

  deletarFornecedor(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + `fornecedor/${id}`);
  }

  pegarFornecedorPorId(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + `fornecedor/${id}`);
  }

  verificaCNPJ(cnpj: string): Observable<any> {
    return this.http.get(environment.apiUrl + 'checkcnpj/' + cnpj);
  }
}
