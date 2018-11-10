import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  // Number isn't instanciated
  // @input makes it so you can get the value from outside
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
