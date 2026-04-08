import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipoCusto } from '../../../models/tipo-custo';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Custo } from '../../../models/custos.model';

@Component({
  selector: 'app-cadastro-custos',
  standalone: false,
  templateUrl: './cadastro-custos.component.html',
  styleUrl: './cadastro-custos.component.css'
})
export class CadastroCustosComponent implements OnInit {
  @ViewChild('formCadastroCustos') formCadastroCustos!: NgForm;
  custo!: Custo;
  listaLotes: any[] = [];
  listaTipoCusto: any[] = [];

  ngOnInit(): void {
    this.custo = new Custo();
    this.getlotes();
    this.getTipoCusto();
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  getlotes() {
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

  getTipoCusto() {
    this.operacionalService.getOperacional('getTiposCusto').subscribe({
      next: (res) => {
        this.listaTipoCusto = res;
        console.log('tipos custo', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar os tipos de custo!');
      }
    });
  }

  salvar() {
    console.log('dados', this.custo);
    this.operacionalService.registerCusto(this.custo).subscribe({
      next: (res) => {
        this.toastr.success('Tipo de custos cadastrado com sucesso!');
        this.formCadastroCustos.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao cadastrar o animal!');
      }
    });
  }

}
