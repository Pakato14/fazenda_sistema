import { Component, OnInit, ViewChild } from '@angular/core';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { TipoRacao } from '../../../models/tipo-racao';

@Component({
  selector: 'app-cadastro-racao',
  standalone: false,
  templateUrl: './cadastro-racao.component.html',
  styleUrl: './cadastro-racao.component.css',
})
export class CadastroRacaoComponent implements OnInit {
  @ViewChild('formCadastroRacao') formCadastroRacao!: NgForm;
  racao!: TipoRacao;
  listaRacao: any[] = [];

  //edicção
  editando: boolean = false;
  racaoEditandoId: number | null = null;

  // filtro
  termoBusca: string = '';

  // paginação
  paginaAtual: number = 1;
  itensPorPagina: number = 10;

  ngOnInit(): void {
    this.racao = new TipoRacao();
    this.resetForm();
    this.getRacao();
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  resetForm() {
    this.racao = new TipoRacao();
    this.editando = false;
    this.racaoEditandoId = null;
  }

  salvar() {
    if (this.editando && this.racaoEditandoId) {
      // UPDATE
      this.operacionalService
        .updateRacao(this.racao, this.racaoEditandoId)
        .subscribe({
          next: () => {
            this.toastr.success('Ração atualizada com sucesso!');
            this.afterSave();
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Erro ao atualizar!');
          },
        });
    } else {
      // CREATE
      this.operacionalService.registerTipoRacao(this.racao).subscribe({
        next: () => {
          this.toastr.success('Ração cadastrada com sucesso!');
          this.afterSave();
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Erro ao cadastrar!');
        },
      });
    }
  }

  afterSave() {
    this.getRacao();
    this.formCadastroRacao.reset();
    this.resetForm();
  }

  editar(racao: any) {
    this.racao = { ...racao }; // evita binding direto
    this.editando = true;
    this.racaoEditandoId = racao.id;
  }

  cancelarEdicao() {
    this.resetForm();
    this.formCadastroRacao.reset();
  }

  excluir(id: number) {
    if (!confirm('Deseja realmente excluir este item?')) return;

    this.operacionalService.deleteAnimal(id).subscribe({
      next: () => {
        this.toastr.success('Excluído com sucesso!');
        this.getRacao();
      },
      error: () => this.toastr.error('Erro ao excluir!'),
    });
  }

  getRacao() {
    this.operacionalService.getOperacional('getRacoes').subscribe({
      next: (res) => {
        this.listaRacao = res;
        // console.log('racoes', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar as racoes!');
      },
    });
  }

  // ===== FILTRO =====
  get listaFiltrada() {
    return this.listaRacao.filter((a) =>
      a.tipo_racao.toLowerCase().includes(this.termoBusca.toLowerCase()),
    );
  }

  // ===== PAGINAÇÃO =====
  get listaPaginada() {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.listaFiltrada.slice(inicio, inicio + this.itensPorPagina);
  }

  get totalPaginas() {
    return Math.ceil(this.listaFiltrada.length / this.itensPorPagina);
  }

  mudarPagina(pagina: number) {
    this.paginaAtual = pagina;
  }
}
