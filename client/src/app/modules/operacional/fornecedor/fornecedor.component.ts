import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../../service/fornecedor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fornecedor',
  standalone: false,
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent implements OnInit {
  fornecedores: any[] = [];
  lista_filtrada: any[] = [];

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.fornecedorService.listarFornecedor().subscribe(
      (fornecedores: any[]) => {
        this.fornecedores = fornecedores;
        this.lista_filtrada = fornecedores; // inicia filtrada
        // console.log('lista_fornecedores', this.lista_fornecedores)
      },
      (erro: any) => console.error(erro),
    );
  }
  editar(id: number) {
    this.router.navigate(['/editfornecedor', id]);
  }

  deletar(id: number) {
    if (confirm('Tem certeza que deseja deletar este fornecedor?')) {
      this.fornecedorService.deletarFornecedor(id).subscribe(
        () => {
          this.toastr.success('Fornecedor deletado com sucesso!');
          this.carregar(); // recarregar lista
        },
        (erro: any) => {
          console.error(erro);
          this.toastr.error('Erro ao deletar fornecedor!');
        }
      );
    }
  }}
