import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { UsuariosComponent } from './modules/usuarios/usuarios/usuarios.component';
import { UsuarioFormComponent } from './modules/usuarios/usuario-form/usuario-form.component';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from './service/interceptor/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { EmpresasComponent } from './modules/empresa/empresas/empresas.component';
import { EmpresaFormComponent } from './modules/empresa/empresa-form/empresa-form.component';
import { LoginComponent } from './modules/usuarios/login/login.component';
import { ResetSenhaComponent } from './modules/usuarios/reset-senha/reset-senha.component';
import { CadastroAnimaisComponent } from './modules/animais/cadastro-animais/cadastro-animais.component';
import { RacaoComponent } from './modules/animais/racao/racao.component';
import { ControleAnimaisComponent } from './modules/animais/controle-animais/controle-animais.component';
import { CadastroLoteComponent } from './modules/animais/cadastro-lote/cadastro-lote.component';
import { NgxMaskModule } from 'ngx-mask';
import { CadastroVacinaComponent } from './modules/animais/cadastro-vacina/cadastro-vacina.component';
import { CadastroRacaoComponent } from './modules/animais/cadastro-racao/cadastro-racao.component';
import { CadastroCustosComponent } from './modules/animais/cadastro-custos/cadastro-custos.component';
import { DashboardComponent } from './modules/dataview/dashboard/dashboard.component';
import { CadastroTipocustosComponent } from './modules/animais/cadastro-tipocustos/cadastro-tipocustos.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { CadastroCustoComponent } from './modules/operacional/cadastro-custo/cadastro-custo.component';
import { MovimentacaoComponent } from './modules/operacional/movimentacao/movimentacao.component';
import { ConsumoRacaoComponent } from './modules/operacional/consumo-racao/consumo-racao.component';
import { AplicacaoVacinaComponent } from './modules/operacional/aplicacao-vacina/aplicacao-vacina.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    UsuariosComponent,
    UsuarioFormComponent,
    EmpresasComponent,
    EmpresaFormComponent,
    LoginComponent,
    ResetSenhaComponent,
    CadastroAnimaisComponent,
    RacaoComponent,
    ControleAnimaisComponent,
    CadastroLoteComponent,
    CadastroVacinaComponent,
    CadastroRacaoComponent,
    CadastroCustosComponent,
    DashboardComponent,
    CadastroTipocustosComponent,
    CadastroCustoComponent,
    MovimentacaoComponent,
    ConsumoRacaoComponent,
    AplicacaoVacinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxApexchartsModule
  ],
  providers: [
    provideClientHydration(),
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
