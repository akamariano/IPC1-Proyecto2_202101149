import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonInterface2 } from 'src/app/Models/PokemonInterface2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',

  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  value:any;
 title = 'client';
 constructor(public pokemonService : PokemonService, private http:HttpClient){}
 //aRREGLO 
 datosPoke: PokemonInterface2[]=[];
 ngOnInit(): void{
this.ObtenerPoke()
 }
 Obtener(){
  let id1 = this.value;
 
  console.log("el id es: "+id1)


  this.http.get<any>(`http://localhost:3000/${this.value}`).subscribe(async (res) => 
  {
   let valores: any = res;
    this.datosPoke = valores;
    console.log("LISTA DE DATOS");
    console.log(this.datosPoke);

   

  },
  err => console.log(err));
}
 ObtenerPoke(){
   this.pokemonService.CargarDatos().subscribe(async (res) =>
   {
     let valores: any = res;
     this.datosPoke = valores;
     console.log("LISTA DE DATOS");
     console.log(this.datosPoke);
   },
   err => console.log(err));
 }

 ObtenerPokemonsFuego(){
  let id1 = this.value;
 
  console.log("el id es: "+id1)


  this.http.get<any>(`http://localhost:3000/fuego`).subscribe(async (res) => 
  {
   let valores: any = res;
    this.datosPoke = valores;
    console.log("LISTA DE DATOS");
    console.log(this.datosPoke);

   

  },
  err => console.log(err));
}
 ObtenerPokemonsAgua(){
  let id1 = this.value;
 
  console.log("el id es: "+id1)


  this.http.get<any>(`http://localhost:3000/agua`).subscribe(async (res) => 
  {
   let valores: any = res;
    this.datosPoke = valores;
    console.log("LISTA DE DATOS");
    console.log(this.datosPoke);

   

  },
  err => console.log(err));
}
 ObtenerPokemonsHierba(){
  let id1 = this.value;
 
  console.log("el id es: "+id1)


  this.http.get<any>(`http://localhost:3000/hierba`).subscribe(async (res) => 
  {
   let valores: any = res;
    this.datosPoke = valores;
    console.log("LISTA DE DATOS");
    console.log(this.datosPoke);

   

  },
  err => console.log(err));
}
}
