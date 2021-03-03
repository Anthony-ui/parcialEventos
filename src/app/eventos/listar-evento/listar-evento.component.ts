import  Swal  from 'sweetalert2';
import { EventosService } from './../../servicios/eventos.service';
import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/Clases/eventos';
Swal

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {


  eventos: any = [];

  filtroPost: any = "";

  buscador = "";

  constructor(private evento:EventosService) { }

  ngOnInit(): void {

    this.listareventos();
  }




  listareventos() {

    
    
      this.evento.listar().subscribe(res => {
      this.eventos = res;
      
      console.log(this.eventos);
      // console.log(this.eventos[0].evento);



    }, error => {


    })

  }
  eliminar(idevento: number) {




    Swal.fire({
      title: '¿Seguro que desea eliminar?',
      text: " este registro se eliminará permanentemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {






        this.evento.eliminar(idevento).subscribe(res => {

          this.listareventos();

        }, error => {
          console.log(error);
        });



        Swal.fire(
          'eventos!',
          'Registro eliminado exitosamente',
          'success'
        )
      }
    })





  }


  // buscar(busqueda: any) {
  //   var cadena = busqueda.target.value;
  //   this.evento.busqueda().subscribe(res => {

  //     if (res.length == 0) {

  //       this.listareventos();

  //     } else {

  //       this.eventos = res;

  //     }





  //   }, error => {

  //     console.log(error);

  //   });

  // }

}
