import { ResolveFn } from '@angular/router';
import {PokeService, tempPokemon} from "./poke.service";
import {inject} from "@angular/core";
import {map, tap} from "rxjs";
import {StorageService} from "./storage.service";


export const ServerPokelistResolver: ResolveFn<tempPokemon[]> = (state) => {

  let storage = inject(StorageService)

  return inject(PokeService).getPokes().pipe(tap((pokemon) => {
    })
    , map((data: { [data: string]: { [data: string]: tempPokemon[] } }) => {

      storage.setPokes(data['data']['pokemon_v2_pokemon']);

      return data['data']['pokemon_v2_pokemon'];
    })
  );
};
