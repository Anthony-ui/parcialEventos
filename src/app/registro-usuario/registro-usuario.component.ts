import  Swal  from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from './../servicios/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  archivo:any;
  foto:any;
  unRegistro:any;
  ruta:any;
  input:any;
  idUsuario:number;
  
  
  
  
    usuarios = new FormGroup(
  
      {
        nombre: new FormControl('',Validators.required),
        apellido: new FormControl('',Validators.required),
        correo: new FormControl('',[Validators.required ,Validators.email]),
        direccion: new FormControl('',[Validators.required]),
        usuario: new FormControl('',Validators.required),
        clave: new FormControl('',Validators.required),
        fecha: new FormControl(''),
        imagen: new FormControl(''),
      }
    )
  
    constructor(private usuario:UsuariosService, private ActivatedRoute:ActivatedRoute, private router:Router) {
  
  
       this.idUsuario = this.ActivatedRoute.snapshot.params.id;
  
  
      if(this.idUsuario!= null)
      {
  
        this.unUsuario(this.idUsuario);
  
      }
  
     }
  
    ngOnInit(): void {
    }
  
  
    guardar(usuarios:any)
  
    {
  
    
  
  
    
  
      if(this.idUsuario==null)
      {
  
        if(this.archivo== null)
        {
          
          Swal.fire("Usuarios","Elija una imagen","warning");
          return;
        }
    
    
        if(this.usuarios.invalid)
        {
          
          Swal.fire("Usuarios","Llene Todos los Campos","warning");
          return;
        }
  
  
          
      this.usuario.subir(this.archivo).subscribe(res=>{
  
        let ruta=res;
        usuarios.imagen=ruta;
        this.usuario.guardar(usuarios).subscribe(res=>{
  
  
          Swal.fire("Usuarios","Registrado Correctamente","success");
          this.router.navigate(['menu/listarUsuario'])
  
          
        },error=> console.log(error))
  
      }, error=> console.log(error))
  
      }else
      {
  
        if(this.archivo == null)
        {
        
          usuarios.imagen=this.input;
          this.editar(usuarios);
  
        }else
        {
          this.usuario.subir(this.archivo).subscribe(res=>{
  
            let ruta=res;
            usuarios.imagen=ruta;
            this.editar(usuarios);
      
          }, error=> console.log(error))
       
        }
  
          
  
     
      }
  
      
  
    }
  
    editar(usuario:any)
    {
      this.usuario.editar(this.idUsuario,usuario).subscribe(res=>{
  
        Swal.fire("Usuarios","Editado Correctamente","success");
        this.router.navigate(['menu/listarUsuario'])
        
      });
    }
  
  
  
  
  
  
  cargar(event: any): void {
  
      if (event.target.files && event.target.files[0]) {
        this.archivo = <File>event.target.files[0];
  
        if (this.archivo.type.match('image.*')) {
          const reader = new FileReader();
          reader.onload = e =>
  
            this.foto = reader.result;
          reader.readAsDataURL(this.archivo);
  
        } else {
      
          Swal.fire("Usuarios","Error","warning");
          return;
        }
  
      }
  
  
  
  
    }
  
    unUsuario(idUsuario: any) {
  
  
      this.usuario.unRegistro(idUsuario).subscribe(res => {
  
        this.unRegistro = res;
        this.ruta = "https://localhost:44338/" + this.unRegistro.imagen
        this.input = this.unRegistro.imagen;
  
     
  
        this.usuarios.patchValue(Object.assign({
  
          nombre: this.unRegistro.nombre,
          apellido: this.unRegistro.apellido,
          correo: this.unRegistro.correo,
          direccion: this.unRegistro.direccion,
          usuario: this.unRegistro.usuario,
          clave: this.unRegistro.clave,
          imagen: ""
  
        }));
  
        console.log(this.input);
  
  
  
  
  
      }, error => {
        console.log(error);
      })
    }
  
}
