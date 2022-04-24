import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PokemonInterface2 } from 'src/app/Models/PokemonInterface2';
@Component({
  selector: 'app-cards2',
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.css']
})
export class Cards2Component implements OnInit {

  constructor() { }
  //Recibe Datos del Componente Padre
@Input () datoPokemon: PokemonInterface2;

  ngOnInit(): void {
    console.log("------------")
    console.log(this.datoPokemon);
    console.log("------------")
  }

}
