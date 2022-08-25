import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'red'
      })),
      transition('* => *', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit {


  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
