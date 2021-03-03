import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nombres:any;
  id:any;
  perfil:any;

  constructor() { 

   this.nombres= localStorage.getItem('nombres')
   this.id=localStorage.getItem('idUsuario');
   this.perfil= "https://localhost:44338/" + localStorage.getItem('imagen');
   console.log(this.perfil);

  }

  ngOnInit(): void {
  }




  salir()
  {

    localStorage.clear();
    location.reload();
  }

}
