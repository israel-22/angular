import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../utils/pokemon';
import*as pokemonData from '../../../../public/json/pokemonData.json';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  id: number = 0;
  pokemons?: Pokemon;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
this.route.paramMap.subscribe(
      (params) => {
        this.id=Number(params.get('id'));
        console.log(this.id);
      }
    );
   this.pokemons =((pokemonData as any).default as Pokemon[])
   .find((pokemon) => pokemon.id === this.id)
    
}
}
