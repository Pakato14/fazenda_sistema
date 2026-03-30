import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../service/empresa.service';

@Component({
  selector: 'app-empresas',
  standalone: false,
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css',
})
export class EmpresasComponent implements OnInit {
  empresas: any[] = [];
  lista_filtrada: any[] = [];

  constructor(private companyService: EmpresaService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.companyService.getCompanies('allCompanies').subscribe(
      (companies: any[]) => {
        this.empresas = companies;
        this.lista_filtrada = companies; // inicia filtrada
        // console.log('lista_companies', this.lista_companies)
      },
      (erro: any) => console.error(erro),
    );
  }
}
