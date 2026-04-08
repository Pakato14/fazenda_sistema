import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animais } from '../../../models/animais.models';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { OperacionalService } from '../../../service/operacional.service';

@Component({
  selector: 'app-cadastro-animais',
  standalone: false,
  templateUrl: './cadastro-animais.component.html',
  styleUrl: './cadastro-animais.component.css',
})
export class CadastroAnimaisComponent implements OnInit {
  @ViewChild('formCadastroAnimal') formCadastroAnimal!: NgForm;
  animal!: Animais;
  listaAnimais: any[] = [];

  //edicção
  editando: boolean = false;
  animalEditandoId: number | null = null;

  // filtro
  termoBusca: string = '';

  // paginação
  paginaAtual: number = 1;
  itensPorPagina: number = 10;

  ngOnInit(): void {
    this.resetForm();
    this.getAnimais();
  }

  resetForm() {
    this.animal = new Animais();
    this.editando = false;
    this.animalEditandoId = null;
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  salvar() {
    if (this.editando && this.animalEditandoId) {
      // UPDATE
      this.operacionalService
        .updateAnimal(this.animal, this.animalEditandoId)
        .subscribe({
          next: () => {
            this.toastr.success('Animal atualizado com sucesso!');
            this.afterSave();
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Erro ao atualizar!');
          },
        });
    } else {
      // CREATE
      this.operacionalService.register(this.animal).subscribe({
        next: () => {
          this.toastr.success('Criação cadastrada com sucesso!');
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
    this.getAnimais();
    this.formCadastroAnimal.reset();
    this.resetForm();
  }

  editar(animal: any) {
    this.animal = { ...animal }; // evita binding direto
    this.editando = true;
    this.animalEditandoId = animal.id;
  }

  cancelarEdicao() {
    this.resetForm();
    this.formCadastroAnimal.reset();
  }

  excluir(id: number) {
    if (!confirm('Deseja realmente excluir este item?')) return;

    this.operacionalService.deleteAnimal(id).subscribe({
      next: () => {
        this.toastr.success('Excluído com sucesso!');
        this.getAnimais();
      },
      error: () => this.toastr.error('Erro ao excluir!'),
    });
  }

  getAnimais() {
    this.operacionalService.getOperacional('getAnimais').subscribe({
      next: (res) => {
        this.listaAnimais = res;
        console.log('animais', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar os animais!');
      },
    });
  }

  // ===== FILTRO =====
  get listaFiltrada() {
    return this.listaAnimais.filter((a) =>
      a.tipo.toLowerCase().includes(this.termoBusca.toLowerCase()),
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
