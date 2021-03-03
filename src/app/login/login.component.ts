import { UsuariosService } from './../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sesion:any=[];

  login = new FormGroup(

    {
      usuario: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required)
    }
  )

  constructor(

  


    private router :Router,
    private usuarios:UsuariosService
    

    ) {

if(localStorage.getItem('nombres')!=undefined)
{
  localStorage.clear();
}

     }

  ngOnInit(): void {
  }

  ingresar(cliente:any)
{
let usuario =cliente["usuario"];
let contrasena =cliente["contrasena"];

  this.usuarios.inicio(usuario, contrasena).subscribe((res)=>{


    this.sesion=res;

    if(res==false)
    {

           Swal.fire("Login","Usuario o contraseña Incorrectos","error");

    }else{

      this.router.navigate(['/menu']);

     let nombres= this.sesion[0]["nombre"] +" "+ this.sesion[0]["apellido"];
     let idUsuario= this.sesion[0]["idUsuario"];
     let imagen= this.sesion[0]["imagen"];
     localStorage.setItem('idUsuario',idUsuario);
     localStorage.setItem('nombres',nombres);
     localStorage.setItem('imagen',imagen);
    
  

      
    }

        
      
  })

 
}
}
