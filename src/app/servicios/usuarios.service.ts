import { Usuarios } from './../Clases/usuarios';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  clienteApi = 'https://localhost:44338/api/usuarios/';

  guardar(imagen: any) {

    new Response(imagen).text().then(console.log)
    return this.http.post(this.clienteApi, imagen);

  }





  inicio(usuario: any, contrasena:any) {

  const   params = new HttpParams().set('usuario', usuario) .set('clave',contrasena)



   return  this.http.get(this.clienteApi+"inicio",{params});

  }

  listar():Observable<Usuarios[]>
  {
    return this.http.get<Usuarios[]>(this.clienteApi);
  }


  
  unRegistro(idUsuario: number): Observable<Usuarios> {

    return this.http.get<Usuarios>(this.clienteApi + idUsuario);
  }


  editar(idUsuario: number, Usuarios: Usuarios): Observable<Usuarios[]> {


    return this.http.put<Usuarios[]>(this.clienteApi + idUsuario, Usuarios);

  }

  eliminar(idUsuario: any) {

    return this.http.delete<Usuarios[]>(this.clienteApi + idUsuario);
  }

  subir(imagen: File) {


    let HTTPOptions: Object = {



      headers: new HttpHeaders({

      }),
      responseType: 'text'
    }


    const formData = new FormData();
    formData.append('imagen', imagen, imagen.name);

    return this.http.post(this.clienteApi + 'guardar', formData, HTTPOptions).pipe();
  }




  
}
