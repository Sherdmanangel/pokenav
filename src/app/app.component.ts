import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HeaderComponent],
})
export class AppComponent {
  title = 'pokenav';
}
