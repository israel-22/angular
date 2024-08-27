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
  pokemonResponse?: PokemonResponse;

  constructor(private router: Router, private pokemonsService: PokemonsService) {}
  ngOnInit(): void {
this.getPokemons();
  }
getPokemons(): void {
  this.pokemonsService.getPokemons().subscribe((pokemonResponse) => {
    this.pokemonResponse = pokemonResponse;
for(const pokemonResult of this.pokemonResponse.results){
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
