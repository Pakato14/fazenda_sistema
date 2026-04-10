import { Component, OnInit, ViewChild } from '@angular/core';
import { OperacionalService } from '../../../service/operacional.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Lote } from '../../../models/lotes.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-lote',
  standalone: false,
  templateUrl: './cadastro-lote.component.html',
  styleUrl: './cadastro-lote.component.css'
})
export class CadastroLoteComponent implements OnInit {
  @ViewChild('formCadastroLotes') formCadastroLotes!: NgForm;
  lote!: Lote;
  listaAnimais: any[] = [];

  ngOnInit(): void {
    this.lote = new Lote();
    this.getAnimais();
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  getAnimais() {
    this.operacionalService.getOperacional('getAnimais').subscribe({
      next: (res) => {
        this.listaAnimais = res;
        console.log('animais', res);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao carregar os animais!');
      }
    });
  }

  salvar() {
    console.log('dados', this.lote);
    this.operacionalService.registerLote(this.lote).subscribe({
      next: (res) => {
        this.toastr.success('Lote cadastrado com sucesso!');
        this.formCadastroLotes.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao cadastrar o lote!');
      }
    });
  }

}
