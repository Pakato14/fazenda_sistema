import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ControleAnimais } from '../../../models/controle-animais.model';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movimentacao',
  standalone: false,
  templateUrl: './movimentacao.component.html',
  styleUrl: './movimentacao.component.css'
})
export class MovimentacaoComponent implements OnInit {
  @ViewChild('formMovimentacao') formMovimentacao!: NgForm;
  movimentacao!: ControleAnimais;
  listaLotes: any[] = [];

  ngOnInit(): void {
    this.movimentacao = new ControleAnimais();
    this.getLotes();
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
        // console.log('lotes', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar os lotes!');
      }
    });
  }

  salvar() {
    this.operacionalService.registerControleAnimais(this.movimentacao).subscribe({
      next: (res) => {
        this.toastr.success('Movimentação cadastrada com sucesso!');
        this.formMovimentacao.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao cadastrar a movimentação!');
      }
    });
  }

}
