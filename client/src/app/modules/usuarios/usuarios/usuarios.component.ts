import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  lista_filtrada: any[] = [];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.service.pegar_users('allUser').subscribe(
      (usr: any[]) => {
        this.usuarios = usr;
        this.lista_filtrada = usr; // inicia filtrada
        // console.log('lista_users', this.lista_users)
      },
      (erro: any) => console.error(erro)
    );
  }

}
