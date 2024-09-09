import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatRipple} from "@angular/material/core";
import {NgStyle, TitleCasePipe} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";
import {ActivatedRoute} from "@angular/router";
import {tempPokemon} from "./util/poke.service";
import {StorageService} from "./util/storage.service";
import {cardButton, cardTheme} from "./util/card-aspect";
import {pokeTypes} from "./util/poketypes";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  standalone: true,
  imports: [MatGridListModule, ScrollingModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatRipple, NgStyle, MatButton, MatAnchor, TitleCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihua.`;

  pokeList: tempPokemon[] = [];

  constructor(private activatedRoute: ActivatedRoute, private storageService: StorageService,) {

  }

  ngOnInit() {
    this.storageService.pokeSubject.subscribe(poke => {
      this.pokeList = poke;
      console.log("Hola 1");
      console.log(this.pokeList);
    })
  }

  getRoute(id: number) {
    if (id<10){
      return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/00${id}.png`;
    }else if (id<100){
      return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/0${id}.png`;
    }  else {
      return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${id}.png`;
    }
  }
  getId(id: number) {
    if (id<10){
      return `00${id}`;
    }else if (id<100){
      return `0${id}`;
    }  else {
      return id;
    }
  }

  protected readonly cardTheme = cardTheme;
  protected readonly pokeTypes = pokeTypes;

  getStyle(pokemon:tempPokemon) {
    let tipoPrincipal= pokemon.pokemon_v2_pokemontypes;
    const primerId = tipoPrincipal[0].pokemon_v2_type.id;
    // @ts-ignore
    let tipo:any = pokeTypes[primerId];
    // @ts-ignore
    return cardTheme[tipo];
  }
  getStyleButton(pokemon:tempPokemon) {
    let tipoPrincipal= pokemon.pokemon_v2_pokemontypes;
    const primerId = tipoPrincipal[0].pokemon_v2_type.id;
    // @ts-ignore
    let tipo:any = pokeTypes[primerId];
    // @ts-ignore
    return cardButton[tipo];
  }
  getTypeName(pokemon:tempPokemon) {
    let tipoPrincipal= pokemon.pokemon_v2_pokemontypes;
    let tipos = [];
    // @ts-ignore
    tipos.push(pokeTypes[tipoPrincipal[0].pokemon_v2_type.id]);
    if(tipoPrincipal.length > 1){
      // @ts-ignore
      tipos.push(pokeTypes[tipoPrincipal[1].pokemon_v2_type.id]);
    }
    return tipos;
  }
}
