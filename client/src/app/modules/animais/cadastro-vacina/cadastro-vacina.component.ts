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

  ngOnInit(): void {
    this.vacina = new TipoVacina();
  }

  constructor(
    private operacionalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  salvar() {
    console.log('dados', this.vacina);
    this.operacionalService.registerTipoVacina(this.vacina).subscribe({
      next: (res) => {
        this.toastr.success('Tipo de vacina cadastrada com sucesso!');
        this.formCadastroVacina.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao cadastrar o tipode vacina!');
      }
    });
  }

}
