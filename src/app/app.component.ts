import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividadAA8';
  tabla= [
    { codigo: 25463 , nombre: "Luis" , apellido: "Gomez" , edad: 12 , difedad: "Luis es menor de edad"},
    { codigo: 25412 , nombre: "Luan" , apellido: "Muñoz" , edad: 15 , difedad: "Luan es menor de edad"},
    { codigo: 29456 , nombre: "Andy" , apellido: "Lopez" , edad: 35 , difedad: "Andy es mayor de edad"},
  ];
  data = Object.values(this.tabla);


  edad_menor:string =" es menor de edad";
  edad_mayor:string= " es mayor de edad";


  codigo!:number;
  usuario!:string;
  apellido!:string;
  edad!:number;


  show = false;
  
  user = "";
mostrartabla(){
    if(this.codigo === 0 || this.usuario === "" || this.apellido === "" || this.edad === 0){
      alert("sdas")
  }else{
   if(this.edad >= 18){
    this.tabla.push({ codigo: this.codigo , nombre: this.usuario , apellido: this.apellido , edad: this.edad , difedad: this.usuario+this.edad_mayor});
    this.data = Object.values(this.tabla);
       this.show = true;
   }else{
    this.tabla.push({ codigo: this.codigo , nombre: this.usuario , apellido: this.apellido , edad: this.edad , difedad: this.usuario+this.edad_menor});
    this.data = Object.values(this.tabla);
      this.show = false;
   }
  }

  for (let i = 0; i < this.tabla.length; i++) {
    this.user = this.tabla[i].nombre 
    
  }

  }
}
