import { Component, OnInit, ViewChild } from '@angular/core';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoCusto } from '../../../models/tipo-custo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-tipocustos',
  standalone: false,
  templateUrl: './cadastro-tipocustos.component.html',
  styleUrl: './cadastro-tipocustos.component.css',
})
export class CadastroTipocustosComponent implements OnInit {
  @ViewChild('formCadastroCustos') formCadastroCustos!: NgForm;
  custo!: TipoCusto;
  listaCustos: any[] = [];

  //edicção
  editando: boolean = false;
  custoEditandoId: number | null = null;

  // filtro
  termoBusca: string = '';

  // paginação
  paginaAtual: number = 1;
  itensPorPagina: number = 10;

  ngOnInit(): void {
    this.resetForm();
    this.getTipoCusto();
  }

  resetForm() {
    this.custo = new TipoCusto();
    this.editando = false;
    this.custoEditandoId = null;
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  // salvar() {
  //   console.log('dados', this.custo);
  //   this.operacionalService.registerTipoCusto(this.custo).subscribe({
  //     next: (res) => {
  //       this.toastr.success('Tipo de custos cadastrado com sucesso!');
  //       this.formCadastroCustos.reset();
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: (err) => {
  //       console.error(err.error.message);
  //       this.toastr.error('Erro ao cadastrar o tipo de custos!');
  //     },
  //   });
  // }

  salvar() {
    if (this.editando && this.custoEditandoId) {
      // UPDATE
      this.operacionalService
        .updateTipoCusto(this.custo, this.custoEditandoId)
        .subscribe({
          next: () => {
            this.toastr.success('Custo atualizado com sucesso!');
            this.afterSave();
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Erro ao atualizar!');
          },
        });
    } else {
      // CREATE
      this.operacionalService.registerTipoCusto(this.custo).subscribe({
        next: () => {
          this.toastr.success('Custo cadastrado com sucesso!');
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
    this.getTipoCusto();
    this.formCadastroCustos.reset();
    this.resetForm();
  }

  editar(custo: any) {
    this.custo = { ...custo }; // evita binding direto
    this.editando = true;
    this.custoEditandoId = custo.id;
  }

  cancelarEdicao() {
    this.resetForm();
    this.formCadastroCustos.reset();
  }

  excluir(id: number) {
    if (!confirm('Deseja realmente excluir este item?')) return;

    this.operacionalService.deleteTipoCusto(id).subscribe({
      next: () => {
        this.toastr.success('Excluído com sucesso!');
        this.getTipoCusto();
      },
      error: () => this.toastr.error('Erro ao excluir!'),
    });
  }

  getTipoCusto() {
    this.operacionalService.getOperacional('getTipocusto').subscribe({
      next: (res) => {
        this.listaCustos = res;
        console.log('tipos de custo', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar os tipos de custo!');
      },
    });
  }

  // ===== FILTRO =====
  get listaFiltrada() {
    return this.listaCustos.filter((a) =>
      a.nome.toLowerCase().includes(this.termoBusca.toLowerCase()),
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
