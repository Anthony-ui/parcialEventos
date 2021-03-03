import Swal from 'sweetalert2';
import { EventosService } from './../../servicios/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Eventos } from 'src/app/Clases/eventos';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  idEvento: any;
  eventos: Eventos[] = [];





  evento = new FormGroup({


    fecha: new FormControl('', Validators.required),
    evento: new FormControl('', Validators.required),
    lugar: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required),
    idUsuario: new FormControl('')



  });


  constructor(
    private router: Router,
    private eventoService: EventosService,
    private ActivatedRoute: ActivatedRoute,



  ) {

    this.idEvento = this.ActivatedRoute.snapshot.params.id;





    if (this.idEvento != undefined) {


      this.unEventos(this.idEvento);




    }







  }

  ngOnInit(): void {





  }


  guardar(EventosObj: Eventos) {


  

  
    console.log(EventosObj);

   



    if (this.evento.invalid) {

      Swal.fire("eventoService", "Todos los campos son requeridos", "warning");
      return;

    }



    if (this.idEvento == undefined) {





      // this.eventoService.repetido(this.evento.get('nombre')?.value).subscribe( res=> {

      // if(res==true)
      // {
      //   Swal.fire("eventoService", "Esta Eventos ya existe", "warning");
      // }
      // else
      // {

       EventosObj.idUsuario= JSON.parse ( JSON.stringify (localStorage.getItem('idUsuario')));
      this.eventoService.guardar(EventosObj).subscribe(res => {
        // this.toastr.success("Registro exitoso");
        this.router.navigate(['/menu/listarEvento']);

      }, error => {


      });


      // }

      // },error=>{
      //   console.log(error);
      // });






    } else {
      //proceso de editar

      this.editar(this.idEvento, EventosObj);


    }




  }


  editar(idEvento: any, sucursaObj: any) {

    sucursaObj.idEvento = this.idEvento;
    this.eventoService.editar(idEvento, sucursaObj).subscribe(res => {

      // this.toastr.success("Editado Correctamente");
      this.router.navigate(['/menu/listarEvento']);

    }, error => {

      // this.toastr.error("Error al editar");

    });


  }










  navegar() {
    this.router.navigate(['menuPrincipal/listareventoService']);

  }





  unEventos(id: any) {
    this.eventoService.unRegistro(id).subscribe(res => {


      //primero se llena el combo y luego se asigna el objeto 
      // this.listarEventos();
      this.evento.patchValue(Object.assign({}, res));
    });

  }











}
