import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatRipple} from "@angular/material/core";
import {NgStyle} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  standalone: true,
  imports: [MatGridListModule, ScrollingModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatRipple, NgStyle, MatButton, MatAnchor],
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
