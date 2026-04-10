import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AplicacaoVacina } from '../../../models/aplicacao-vacina.model';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aplicacao-vacina',
  standalone: false,
  templateUrl: './aplicacao-vacina.component.html',
  styleUrl: './aplicacao-vacina.component.css'
})
export class AplicacaoVacinaComponent implements OnInit {
  @ViewChild('formAplicacaoVacina') formAplicacaoVacina!: NgForm;
  vacina!: AplicacaoVacina;
  listaLotes: any[] = [];
  listaVacinas: any[] = [];

  ngOnInit(): void {
    this.vacina = new AplicacaoVacina();
    this.getLotes();
    this.getVacina();
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
        console.log('lotes', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar os lotes!');
      }
    });
  }

  getVacina() {
    this.operacionalService.getOperacional('getVacinas').subscribe({
      next: (res) => {
        this.listaVacinas = res;
        console.log('vacinas', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar as vacinas!');
      }
    });
  }

  salvar() {
    this.operacionalService.registerAplicacaoVacina(this.vacina).subscribe({
      next: (res) => {
        this.toastr.success('Aplicação de Vacina cadastrada com sucesso!');
        this.formAplicacaoVacina.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao cadastrar a aplicação de vacina!');
      }
    });
  }

}
