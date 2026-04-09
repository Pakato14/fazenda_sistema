import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoVacina } from '../../../models/tipo-vacina';

@Component({
  selector: 'app-cadastro-vacina',
  standalone: false,
  templateUrl: './cadastro-vacina.component.html',
  styleUrl: './cadastro-vacina.component.css'
})
export class CadastroVacinaComponent implements OnInit {
  @ViewChild('formCadastroVacina') formCadastroVacina!: NgForm;
  vacina!: TipoVacina;

  listaVacina: any[] = [];

  //edicção
  editando: boolean = false;
  vacinaEditandoId: number | null = null;

  // filtro
  termoBusca: string = '';

  // paginação
  paginaAtual: number = 1;
  itensPorPagina: number = 10;

  ngOnInit(): void {
    this.vacina = new TipoVacina();
    this.resetForm();
    this.getVacina();
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  resetForm() {
    this.vacina = new TipoVacina();
    this.editando = false;
    this.vacinaEditandoId = null;
  }

  // salvar() {
  //   console.log('dados', this.vacina);
  //   this.operacionalService.registerTipoVacina(this.vacina).subscribe({
  //     next: (res) => {
  //       this.toastr.success('Tipo de vacina cadastrada com sucesso!');
  //       this.formCadastroVacina.reset();
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: (err) => {
  //       console.error(err.error.message);
  //       this.toastr.error('Erro ao cadastrar o tipode vacina!');
  //     }
  //   });
  // }

  salvar() {
    if (this.editando && this.vacinaEditandoId) {
      // UPDATE
      this.operacionalService
        .updateVacina(this.vacina, this.vacinaEditandoId)
        .subscribe({
          next: () => {
            this.toastr.success('Vacina atualizada com sucesso!');
            this.afterSave();
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Erro ao atualizar!');
          },
        });
    } else {
      // CREATE
      this.operacionalService.registerTipoVacina(this.vacina).subscribe({
        next: () => {
          this.toastr.success('Vacina cadastrada com sucesso!');
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
    this.getVacina();
    this.formCadastroVacina.reset();
    this.resetForm();
  }

  editar(vacina: any) {
    this.vacina = { ...vacina }; // evita binding direto
    this.editando = true;
    this.vacinaEditandoId = vacina.id;
  }

  cancelarEdicao() {
    this.resetForm();
    this.formCadastroVacina.reset();
  }

  excluir(id: number) {
    if (!confirm('Deseja realmente excluir este item?')) return;

    this.operacionalService.deleteAnimal(id).subscribe({
      next: () => {
        this.toastr.success('Excluído com sucesso!');
        this.getVacina();
      },
      error: () => this.toastr.error('Erro ao excluir!'),
    });
  }

  getVacina() {
    this.operacionalService.getOperacional('getVacinas').subscribe({
      next: (res) => {
        this.listaVacina = res;
        console.log('vacinas', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar as vacinas!');
      },
    });
  }

  // ===== FILTRO =====
  get listaFiltrada() {
    return this.listaVacina.filter((a) =>
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
