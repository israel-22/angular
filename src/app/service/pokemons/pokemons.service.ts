import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../../utils/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }
}
