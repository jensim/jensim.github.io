import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.scss']
})
export class UnknownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showPolygons();
    setInterval(() => {
      this.showPolygons();
    }, 2500);
  }

  private showPolygons() {
    for (const f of Array.from(document.getElementsByClassName('processed'))) {
      f.removeAttribute('class');
    }
    const pol = Array.from(document.getElementsByTagName('polygon'));
    for (const ind of Array.from(Array(pol.length).keys())) {
      setTimeout(() => {
        pol[ind].classList.add('processed');
      }, Math.random() * 2000);
    }
  }
}
