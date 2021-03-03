import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  clienteReporte="https://localhost:44338/api/eventos/reportes";

  constructor(private http:HttpClient) {}
 


  
  listar(fechaDesde:any, fechaHasta:any):Observable<any[]>
  {


    
  const   params = new HttpParams().set('fechaDesde', fechaDesde) .set('fechaHasta',fechaHasta)

   

    return this.http.get<any[]>( this.clienteReporte ,{params});
  }
}
