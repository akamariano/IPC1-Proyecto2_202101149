import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonInterface } from 'src/app/Models/PokemonInterface';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

 title = 'client';
  constructor(public pokemonService : PokemonService){}
  //aRREGLO 
  datosPoke: PokemonInterface[]=[];
  ngOnInit(): void{
this.ObtenerPoke();
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

}
