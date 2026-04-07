import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipoCusto } from '../../../models/tipo-custo';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-custos',
  standalone: false,
  templateUrl: './cadastro-custos.component.html',
  styleUrl: './cadastro-custos.component.css'
})
export class CadastroCustosComponent implements OnInit {
  @ViewChild('formCadastroCustos') formCadastroCustos!: NgForm;
  custo!: TipoCusto;

  ngOnInit(): void {
    this.custo = new TipoCusto();
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  salvar() {
    console.log('dados', this.custo);
    this.operacionalService.registerTipoCusto(this.custo).subscribe({
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
