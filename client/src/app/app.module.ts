import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    UsuariosComponent,
    UsuarioFormComponent,
    EmpresasComponent,
    EmpresaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
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
