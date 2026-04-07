import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
      console.log('dados_empresa', data);
      return this.http.post(environment.apiUrl + 'cadastroAnimal', data);
    }
}
