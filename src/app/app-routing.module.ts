import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ListarReporteComponent } from './reportes/listar-reporte/listar-reporte.component';
import { SesionGuard } from './guards/sesion.guard';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento.component';
import { ListarUsuarioComponent } from './usuarios/listar-usuario/listar-usuario.component';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ListarEventoComponent } from './eventos/listar-evento/listar-evento.component';

const routes: Routes = [

{path:'login', component:LoginComponent},
{path:'registro', component:RegistroUsuarioComponent},
{path:'menu', component:MenuComponent,canActivate:[SesionGuard],children:[
{path:'crearUsuario', component:CrearUsuarioComponent},
{path:'editarUsuario/:id', component:CrearUsuarioComponent},
{path:'listarUsuario', component:ListarUsuarioComponent},
{path:'crearEvento', component:CrearEventoComponent},
{path:'editarEvento/:id', component:CrearEventoComponent},
{path:'listarEvento', component:ListarEventoComponent},
{path:'listarReporte', component:ListarReporteComponent},
] 
},

{path:'', pathMatch:'full', redirectTo:'login'},  
{path:'**', pathMatch:'full', redirectTo:'login'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
