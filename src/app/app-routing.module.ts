import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ServerPokelistResolver} from "./body/util/server-pokelist.resolver";

const routes: Routes = [{
  path: '',component: AppComponent,resolve:{
    server:ServerPokelistResolver,
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
