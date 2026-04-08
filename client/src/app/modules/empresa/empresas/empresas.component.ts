import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../service/empresa.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresas',
  standalone: false,
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css',
})
export class EmpresasComponent implements OnInit {
  empresas: any[] = [];
  lista_filtrada: any[] = [];

  constructor(private companyService: EmpresaService, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.companyService.getCompanies('allCompanies').subscribe(
      (companies: any[]) => {
        this.empresas = companies;
        this.lista_filtrada = companies; // inicia filtrada
        // console.log('lista_companies', this.lista_companies)
      },
      (erro: any) => console.error(erro),
    );
  }
  editar(id: number) {
    this.router.navigate(['/editcompany', id]);
  }

  deletar(id: number) {
    if (confirm('Tem certeza que deseja deletar esta empresa?')) {
      this.companyService.deletarEmpresa(id).subscribe(
        () => {
          this.toastr.success('Empresa deletada com sucesso!');
          this.carregar(); // recarregar lista
        },
        (erro: any) => {
          console.error(erro);
          this.toastr.error('Erro ao deletar empresa!');
        }
      );
    }
  }}
