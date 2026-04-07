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
  styleUrl: './cadastro-tipocustos.component.css'
})
export class CadastroTipocustosComponent implements OnInit {
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
        this.toastr.error('Erro ao cadastrar o tipo de custos!');
      }
    });
  }

}
