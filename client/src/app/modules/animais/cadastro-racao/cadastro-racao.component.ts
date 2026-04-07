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
  styleUrl: './cadastro-racao.component.css'
})
export class CadastroRacaoComponent implements OnInit {
  @ViewChild('formCadastroRacao') formCadastroRacao!: NgForm;
  racao!: TipoRacao;

  ngOnInit(): void {
    this.racao = new TipoRacao();
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  salvar() {
    console.log('dados', this.racao);
    this.operacionalService.registerTipoRacao(this.racao).subscribe({
      next: (res) => {
        this.toastr.success('Racção cadastrada com sucesso!');
        this.formCadastroRacao.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao cadastrar a ração!');
      }
    });
  }

}
