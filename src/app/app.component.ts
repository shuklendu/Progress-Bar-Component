import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  max = 500;
  val = 100;
  getLabel(): string {
    return `${this.val} of ${this.max}`;
  }
}
