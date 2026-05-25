import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fornecedor } from '../../../models/fornecedor.model';
import { FornecedorService } from '../../../service/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fornecedor-form',
  standalone: false,
  templateUrl: './fornecedor-form.component.html',
  styleUrl: './fornecedor-form.component.css'
})
export class FornecedorFormComponent implements OnInit {
  @ViewChild('formCadastroFornecedor') formCadastroFornecedor!: NgForm;
  fornecedor!: Fornecedor;
  isEdit: boolean = false;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.fornecedor = new Fornecedor();
    const id = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!id;
    if (id) {
      this.carregarFornecedor(+id);
    }
  }

  carregarFornecedor(id: number) {
    this.fornecedorService.pegarFornecedorPorId(id).subscribe({
      next: (res) => {
        this.fornecedor = res;
      },
      error: (err) => {
        console.error(err);
        this.toastr.error('Erro ao carregar fornecedor!');
      }
    });
  }

  cancelar() {
    this.router.navigate(['/fornecedores']);
  }

  consultaCNPJ(cnpj: any, form: any) {
    this.fornecedorService.verificaCNPJ(cnpj).subscribe((res: any) => {
      if (res.mensagem === 'CNPJ já cadastrado!') {
        this.toastr.error(res.mensagem);
        this.formCadastroFornecedor.reset();
      }
    });}


  salvar() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fornecedorService.atualizarFornecedor(Number(id), this.fornecedor).subscribe({
        next: (res) => {
          this.toastr.success('Fornecedor atualizado com sucesso!');
          this.router.navigate(['/fornecedores']);
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Erro ao atualizar fornecedor!');
        }
      });
    } else {
      console.log('dados_fornecedor', this.fornecedor);
      this.fornecedorService.cadastrarFornecedor(this.fornecedor).subscribe({
        next: (res) => {
          this.toastr.success('Fornecedor cadastrado com sucesso!');
          this.formCadastroFornecedor.reset();
          this.router.navigate(['/fornecedores']);
        },
        error: (err) => {
          console.error(err.erro.message);
          this.toastr.error('Erro ao cadastrar fornecedor!');
        }
      });
    }
  }

}
