import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // Make event listenable from outside component
  @Output() intervalFired = new EventEmitter<number>();
  // Instanciate timer
  interval;
  // Showing incremental
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  // Method to "start" the game
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  // Method to "stop" the game
  // Doesn't clear the timer, just stops execution
  onStopGame() {
    clearInterval(this.interval);
  }
}
