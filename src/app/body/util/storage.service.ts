import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {tempPokemon} from "./poke.service";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  pokeSubject: BehaviorSubject<tempPokemon[]> = new BehaviorSubject<tempPokemon[]>([]);

  constructor() {

  }
  setPokes(pokes: tempPokemon[]) {
    this.pokeSubject.next(pokes);
  }
}
