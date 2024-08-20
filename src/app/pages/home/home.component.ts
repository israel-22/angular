import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../utils/pokemon';
import*as pokemonData from '../../../../public/json/pokemonData.json';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export  class HomeComponent {
pokemons: Pokemon[] = (pokemonData as any).default;
  
constructor() {}
ngOnInit(): void {
  console.log(pokemonData);
}

}
