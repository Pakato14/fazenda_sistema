import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpresaService } from '../../../service/empresa.service';
import { Empresa } from '../../../models/empresa.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empresa-form',
  standalone: false,
  templateUrl: './empresa-form.component.html',
  styleUrl: './empresa-form.component.css'
})
export class EmpresaFormComponent implements OnInit {
consultaCNPJ(arg0: string|undefined,_t20: NgForm) {
throw new Error('Method not implemented.');
}
  @ViewChild('formCadastroEmpresa') formCadastroEmpresa!: NgForm;
  empresa!: Empresa;

  constructor(
    private companyService: EmpresaService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.empresa = new Empresa();
  }

  salvar() {
    console.log('dados_empresa', this.empresa);
    this.companyService.cadastrarEmpresa(this.empresa).subscribe({
      next: (res) => {
        this.toastr.success('Empresa cadastrada com sucesso!');
        this.formCadastroEmpresa.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.erro.message);
        this.toastr.error('Erro ao cadastrar empresa!');
      }
    });
  }

}
