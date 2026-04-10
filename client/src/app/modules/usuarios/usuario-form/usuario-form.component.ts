import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpresaService } from '../../../service/empresa.service';

@Component({
  selector: 'app-usuario-form',
  standalone: false,
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit {
  @ViewChild('formCadastroUser') formCadastroUser!: NgForm;
  user!: User;
  empresas: any[] = [];
  isEdit: boolean = false;

  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

  constructor(
    private service: UserService,
    private companyService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.user = new User();
    this.pegarEmpresas();

    const id = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!id;
    if (id) {
      this.carregarUsuario(+id);
    }
  }

  pegarEmpresas() {
    this.companyService.getCompanies('takeCompany').subscribe({
      next: (res) => {
        this.empresas = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  carregarUsuario(id: number) {
    this.service.pegarUserPorId(id).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.error(err);
        this.toastr.error('Erro ao carregar usuário!');
      }
    });
  }

  consultaEmail(email: any, form: any) {
    this.service.consultarEmail(email).subscribe((res: any) => {
      if (res.mensagem === 'Email já cadastrado!') {
        this.toastr.error(res.mensagem);
        this.formCadastroUser.reset();
      }
    });
  }

  cancelar() {
    this.router.navigate(['/usuarios']);
  }


  salvar() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.atualizarUser(this.user, +id).subscribe({
        next: (res) => {
          this.toastr.success('Usuário atualizado com sucesso!');
          this.router.navigate(['/usuarios']);
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Erro ao atualizar usuário!');
        }
      });
    } else {
      this.user.user_password = this.service.CriptografarMD5(this.user.user_password);
      this.service.cadastrar_users(this.user).subscribe({
        next: (res) => {
          this.toastr.success('Usuário cadastrado com sucesso!');
          this.formCadastroUser.reset();
          this.router.navigate(['/usuarios']);
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Erro ao cadastrar usuário!');
        }
      });
    }
  }

}
