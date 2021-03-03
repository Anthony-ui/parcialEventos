import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReporteService } from 'src/app/servicios/reporte.service';

@Component({
  selector: 'app-listar-reporte',
  templateUrl: './listar-reporte.component.html',
  styleUrls: ['./listar-reporte.component.css']
})
export class ListarReporteComponent implements OnInit {

  reporteListas:any[]=[];


  reporte = new FormGroup({


    fechaDesde: new FormControl('', Validators.required),
    fechaHasta: new FormControl('', Validators.required),



  });

  constructor(
  private reportes:ReporteService

  ) { }

  ngOnInit(): void {
  }

  guardar(reporte:any)
  {

if(this.reporte.get('fechaDesde')?.value == "" ||  this.reporte.get('fechaHasta')?.value == "")
{
  Swal.fire("Reportes","Los campos no pueden estar vacios","warning");
        return;

}



if( reporte.fechaDesde > reporte.fechaHasta)
{
  Swal.fire("Reportes","Fechas fuera de Rango","warning");
  this.reporteListas=[];
  return
}



  this.reportes.listar(reporte.fechaDesde,reporte.fechaHasta).subscribe(res=>{


    if(res.length == 0)
    {
      Swal.fire("Reportes","No existen registros en el rango de Fechas","warning");
     this.reporteListas=[];
   
      return;
    }else{
      this.reporteListas=res;
    }
    


    

  },error=>console.log(error))
  }

}
