import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {ScrollingModule} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  standalone: true,
  imports: [MatGridListModule,ScrollingModule,MatCardModule, MatChipsModule, MatProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  // longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  // Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  // usually kept as a companion animal or for showing.`;
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihua.`;
}
