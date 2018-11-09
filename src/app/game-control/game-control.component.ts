import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameState = new EventEmitter<{ gameStart: boolean, gameStop: boolean }>();

  constructor() { }

  ngOnInit() {
  }

  onStateChange() {

  }
}
