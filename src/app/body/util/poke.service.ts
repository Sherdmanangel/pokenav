import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const query = '{"query":"{\\n  pokemon_v2_pokemon(order_by: {id: asc}) {\\n    id\\n    name\\n    pokemon_v2_pokemontypes {\\n      pokemon_v2_type {\\n        id\\n      }\\n    }\\n  }\\n}","variables":null}'

export interface tempPokemon {
  "id": number,
  "name": string,
  "pokemon_v2_pokemontypes": [
    {
      "pokemon_v2_type": {
        "id": number,
      }
    },
    {
      "pokemon_v2_type": {
        "id": number,
      }
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) {

  }
  getPokes(): Observable<any> {
    return this.http.post("https://beta.pokeapi.co/graphql/v1beta",query).pipe();
  }
}


