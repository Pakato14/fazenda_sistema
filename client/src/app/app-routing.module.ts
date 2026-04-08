import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './modules/usuarios/usuarios/usuarios.component';
import { UsuarioFormComponent } from './modules/usuarios/usuario-form/usuario-form.component';
import { EmpresaFormComponent } from './modules/empresa/empresa-form/empresa-form.component';
import { LoginComponent } from './modules/usuarios/login/login.component';
import { ResetSenhaComponent } from './modules/usuarios/reset-senha/reset-senha.component';
import { EmpresasComponent } from './modules/empresa/empresas/empresas.component';
import { CadastroAnimaisComponent } from './modules/animais/cadastro-animais/cadastro-animais.component';
import { DashboardComponent } from './modules/dataview/dashboard/dashboard.component';
import { CadastroCustosComponent } from './modules/animais/cadastro-custos/cadastro-custos.component';
import { CadastroTipocustosComponent } from './modules/animais/cadastro-tipocustos/cadastro-tipocustos.component';
import { CadastroVacinaComponent } from './modules/animais/cadastro-vacina/cadastro-vacina.component';
import { CadastroRacaoComponent } from './modules/animais/cadastro-racao/cadastro-racao.component';
import { ConsumoRacaoComponent } from './modules/operacional/consumo-racao/consumo-racao.component';
import { AplicacaoVacinaComponent } from './modules/operacional/aplicacao-vacina/aplicacao-vacina.component';
import { CadastroLoteComponent } from './modules/animais/cadastro-lote/cadastro-lote.component';
import { MovimentacaoComponent } from './modules/operacional/movimentacao/movimentacao.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetSenhaComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'newuser', component: UsuarioFormComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'newcompany', component: EmpresaFormComponent },
  { path: 'animais', component: CadastroAnimaisComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tipocusto', component: CadastroTipocustosComponent },
  { path: 'vacina', component: CadastroVacinaComponent },
  { path: 'racao', component: CadastroRacaoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'cadastrolotes', component: CadastroLoteComponent },
  { path: 'movimentacao', component: MovimentacaoComponent },
  { path: 'consumoracao', component: ConsumoRacaoComponent },
  { path: 'aplicacaovacina', component: AplicacaoVacinaComponent },
  { path: 'custos', component: CadastroCustosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
