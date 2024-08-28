import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonsService } from '../../service/pokemons/pokemons.service'; 
import { Pokemon, PokemonResponse } from '../../utils/pokemon';
import*as pokemonData from '../../../../public/json/pokemonData.json';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  //pokemons: Pokemon[] = (pokemonData as any).default; //carga desde el json
  pokemons: Pokemon[] = [];
  paginas: number[]=[];
  pokemonsPorPagina: number = 20;
  // pokemonResponse?: PokemonResponse;

  constructor(private router: Router, private pokemonsService: PokemonsService) {}
  ngOnInit(): void {
this.getPokemons();
  }

getPokemons(pagina: number = 0): void {
  this.pokemons =[];
  this.pokemonsService.getPokemons(pagina*this.pokemonsPorPagina, this.pokemonsPorPagina)
  .subscribe((pokemonResponse) => {
   this.paginas
   =Array(Math.ceil(  pokemonResponse.count/this.pokemonsPorPagina))
   .fill(0).map((_, index) => index +1);
for(const pokemonResult of pokemonResponse.results){
  this.pokemonsService.getPokemon(pokemonResult.name).subscribe((pokemon) => {
    this.pokemons.push(pokemon);});
}
  });
}

  onClickButton(): void {
    console.log(this.pokemons);
}
 onClickPokemon(pokemon: Pokemon): void {
  this.router.navigate(['/pokemon', pokemon.id]);
}
}
