import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
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

  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

  constructor(
    private service: UserService,
    private companyService: EmpresaService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.user = new User();
    this.pegarEmpresas();
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

  consultaEmail(email: any, form: any) {
    this.service.consultarEmail(email).subscribe((res: any) => {
      if (res.mensagem === 'Email já cadastrado!') {
        this.toastr.error(res.mensagem);
        this.formCadastroUser.reset();
      }
    });
  }


  salvar() {
    this.service.cadastrar_users(this.user).subscribe({
      next: (res) => {
        this.toastr.success('Usuário cadastrado com sucesso!');
        this.formCadastroUser.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
        this.toastr.error('Erro ao cadastrar usuário!');
      }
    });
  }

}
