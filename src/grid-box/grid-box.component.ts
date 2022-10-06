import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Box, BoxInfo } from './../Interfaces/game-parts';

@Component({
  selector: 'app-grid-box',
  templateUrl: './grid-box.component.html',
  styleUrls: ['../app/app.component.css'],
})
export class GridBoxComponent {
  @Input() row: number = 0;
  @Input() column: number = 0;
  @Output() submit: EventEmitter<BoxInfo> = new EventEmitter<BoxInfo>();
  @Input() box: Box = {
    boxNumber: 0,
    column: 0,
    disabled: false,
    row: 0,
    value: '',
  };

  selectBox(boxNumber: number, row: number, column: number) {
    this.box.disabled = true;
    this.submit.emit({ boxNumber: boxNumber, row: row, column: column });
  }

  constructor() {
    return this;
  }
}
