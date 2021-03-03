import { Usuarios } from './../../Clases/usuarios';
import { UsuariosService } from './../../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {


  usuariosLista:Usuarios[]=[];


  constructor(private usuarios:UsuariosService) { }

  ngOnInit(): void {
    this.listar();
  }


  listar()
  {
    this.usuarios.listar().subscribe(res=>{
   

          this.usuariosLista=res;
      
    },error=> console.log(error))
  }

  
  eliminar(idUsuario:any)
  {

       


 


    

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


        this.usuarios.eliminar(idUsuario).subscribe(res=>{

     
          this.listar();
    
    
          Swal.fire("Usuarios","Eliminado Correctamente","success");
    
        },error=> console.log(error))
  
  
  
  

  
  
      }
    })



  }





}
