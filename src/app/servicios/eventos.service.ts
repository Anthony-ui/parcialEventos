import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eventos } from '../Clases/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  clienteEvento = 'https://localhost:44338/api/eventos/';

  guardar(imagen: any) {

    new Response(imagen).text().then(console.log)
    return this.http.post(this.clienteEvento, imagen);

  }


  inicio(usuario: any, contrasena:any) {

  const   params = new HttpParams().set('usuario', usuario) .set('clave',contrasena)



   return  this.http.get(this.clienteEvento+"inicio",{params});

  }

  listar():Observable<any[]>
  {

   

    return this.http.get<any[]>(this.clienteEvento);
  }


  
  unRegistro(idEvento: number): Observable<Eventos> {

    return this.http.get<Eventos>(this.clienteEvento + idEvento);
  }


  editar(idEvento: number, Eventos: Eventos): Observable<Eventos[]> {


    return this.http.put<Eventos[]>(this.clienteEvento + idEvento, Eventos);

  }

  eliminar(idEvento: any) {

    return this.http.delete<Eventos[]>(this.clienteEvento + idEvento);
  }

  


}
