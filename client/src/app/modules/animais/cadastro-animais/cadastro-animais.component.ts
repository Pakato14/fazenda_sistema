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
  styleUrl: './cadastro-animais.component.css'
})
export class CadastroAnimaisComponent implements OnInit {
  @ViewChild('formCadastroAnimal') formCadastroAnimal!: NgForm;
  animal!: Animais;

  ngOnInit(): void {
    this.animal = new Animais();
  }

  constructor(
    private animalService: OperacionalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  salvar() {
    console.log('dados', this.animal);
    this.animalService.register(this.animal).subscribe({
      next: (res) => {
        this.toastr.success('Criação cadastrada com sucesso!');
        this.formCadastroAnimal.reset();
        // this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err.error.message);
        this.toastr.error('Erro ao cadastrar o animal!');
      }
    });
  }

}
