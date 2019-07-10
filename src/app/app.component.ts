import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(-355deg)'})),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in')),
    ]),
  ],
})
export class AppComponent {
  opened = true;
  page: string = null;

  constructor(route: ActivatedRoute) {
    route.fragment.subscribe((f) => {
      if (f != null) {
        this.page = f.toLowerCase();
      }
    });
  }
}
