import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Racao } from '../../../models/racao.model';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consumo-racao',
  standalone: false,
  templateUrl: './consumo-racao.component.html',
  styleUrl: './consumo-racao.component.css'
})
export class ConsumoRacaoComponent implements OnInit {
  @ViewChild('formConsumoRacao') formConsumoRacao!: NgForm;
  racao!: Racao;
  listaLotes: any[] = [];
  listaRacoes: any[] = [];

  ngOnInit(): void {
    this.racao = new Racao();
    this.getLotes();
    this.getRacao();
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  getLotes() {
    this.operacionalService.getOperacional('getLotes').subscribe({
      next: (res) => {
        this.listaLotes = res;
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar os lotes!');
      }
    });
  }

  getRacao() {
    this.operacionalService.getOperacional('getRacoes').subscribe({
      next: (res) => {
        this.listaRacoes = res;
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar as rações!');
      }
    });
  }

  salvar() {
    console.log('dados', this.racao);
    this.operacionalService.registerConsumoRacao(this.racao).subscribe({
      next: (res) => {
        this.toastr.success('Consumo de Ração cadastrado com sucesso!');
        this.formConsumoRacao.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao cadastrar o consumo de ração!');
      }
    });
  }

}
