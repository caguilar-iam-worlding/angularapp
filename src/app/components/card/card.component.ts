import { Component, OnInit, Input } from '@angular/core';

import { Action } from 'src/app/models/action.model';
import { Coordinate } from 'src/app/models/coordinate.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: Action;

  constructor() { }

  ngOnInit() {
  }

}
