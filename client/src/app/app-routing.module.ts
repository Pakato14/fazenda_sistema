import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './modules/usuarios/usuarios/usuarios.component';
import { UsuarioFormComponent } from './modules/usuarios/usuario-form/usuario-form.component';
import { EmpresaFormComponent } from './modules/empresa/empresa-form/empresa-form.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'newuser', component: UsuarioFormComponent },
  { path: 'empresas', component: EmpresaFormComponent },
  { path: 'newcompany', component: EmpresaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
