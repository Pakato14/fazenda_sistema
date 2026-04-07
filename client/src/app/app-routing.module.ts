import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './modules/usuarios/usuarios/usuarios.component';
import { UsuarioFormComponent } from './modules/usuarios/usuario-form/usuario-form.component';
import { EmpresaFormComponent } from './modules/empresa/empresa-form/empresa-form.component';
import { LoginComponent } from './modules/usuarios/login/login.component';
import { ResetSenhaComponent } from './modules/usuarios/reset-senha/reset-senha.component';
import { EmpresasComponent } from './modules/empresa/empresas/empresas.component';
import { CadastroAnimaisComponent } from './modules/animiais/cadastro-animais/cadastro-animais.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetSenhaComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'newuser', component: UsuarioFormComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'newcompany', component: EmpresaFormComponent },
  { path: 'animais', component: CadastroAnimaisComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
