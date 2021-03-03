import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './usuarios/listar-usuario/listar-usuario.component';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento.component';
import { ListarEventoComponent } from './eventos/listar-evento/listar-evento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ListarReporteComponent } from './reportes/listar-reporte/listar-reporte.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    CrearEventoComponent,
    ListarEventoComponent,
    ListarReporteComponent,
    RegistroUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
