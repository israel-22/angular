import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink,RouterLinkActive} from '@angular/router';
import { Pokemon } from '../../utils/pokemon';
import*as pokemonData from '../../../../public/json/pokemonData.json';
import { PokemonsService } from '../../service/pokemons/pokemons.service';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  // id: number = 0;
  pokemons?: Pokemon;
  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
this.route.paramMap.subscribe(
      (params) => {
        const id=Number(params.get("id"));
        // console.log(this.id);
        this.pokemonsService.getPokemonByID(id).subscribe(
          (pokemon) => this.pokemons = pokemon
        )
      }
    );
  //  this.pokemons =((pokemonData as any).default as Pokemon[])
  //  .find((pokemon) => pokemon.id === this.id)!;
    
}
}
