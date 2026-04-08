import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  lista_filtrada: any[] = [];

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) {}

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

  editar(id: number) {
    this.router.navigate(['/edituser', id]);
  }

  deletar(id: number) {
    if (confirm('Tem certeza que deseja deletar este usuário?')) {
      this.service.deleteUser(id).subscribe(
        () => {
          this.toastr.success('Usuário deletado com sucesso!');
          this.carregar(); // recarregar lista
        },
        (erro: any) => {
          console.error(erro);
          this.toastr.error('Erro ao deletar usuário!');
        }
      );
    }
  }

}
