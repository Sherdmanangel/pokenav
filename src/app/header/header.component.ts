import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {DomSanitizer} from "@angular/platform-browser";


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [MatFormFieldModule,  MatToolbarModule, MatButtonModule, MatIconModule ,MatSelectModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  value = 'Clear me';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor() {
    }

}

