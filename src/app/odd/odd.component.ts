import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // Number isn't instanciated
  // @input makes it so you can get the value from outside
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
