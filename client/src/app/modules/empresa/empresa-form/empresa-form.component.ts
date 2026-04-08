import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpresaService } from '../../../service/empresa.service';
import { Empresa } from '../../../models/empresa.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empresa-form',
  standalone: false,
  templateUrl: './empresa-form.component.html',
  styleUrl: './empresa-form.component.css'
})
export class EmpresaFormComponent implements OnInit {
  @ViewChild('formCadastroEmpresa') formCadastroEmpresa!: NgForm;
  empresa!: Empresa;
  isEdit: boolean = false;

  constructor(
    private companyService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.empresa = new Empresa();
    const id = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!id;
    if (id) {
      this.carregarEmpresa(+id);
    }
  }

  carregarEmpresa(id: number) {
    this.companyService.pegarEmpresaPorId(id).subscribe({
      next: (res) => {
        this.empresa = res;
      },
      error: (err) => {
        console.error(err);
        this.toastr.error('Erro ao carregar empresa!');
      }
    });
  }

  cancelar() {
    this.router.navigate(['/empresas']);
  }

  consultaCNPJ(cnpj: any, form: any) {
    this.companyService.verificaCNPJ(cnpj).subscribe((res: any) => {
      if (res.mensagem === 'CNPJ já cadastrado!') {
        this.toastr.error(res.mensagem);
        this.formCadastroEmpresa.reset();
      }
    });}


  salvar() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.companyService.atualizarEmpresa(this.empresa, +id).subscribe({
        next: (res) => {
          this.toastr.success('Empresa atualizada com sucesso!');
          this.router.navigate(['/empresas']);
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Erro ao atualizar empresa!');
        }
      });
    } else {
      console.log('dados_empresa', this.empresa);
      this.companyService.cadastrarEmpresa(this.empresa).subscribe({
        next: (res) => {
          this.toastr.success('Empresa cadastrada com sucesso!');
          this.formCadastroEmpresa.reset();
          this.router.navigate(['/empresas']);
        },
        error: (err) => {
          console.error(err.erro.message);
          this.toastr.error('Erro ao cadastrar empresa!');
        }
      });
    }
  }

}
