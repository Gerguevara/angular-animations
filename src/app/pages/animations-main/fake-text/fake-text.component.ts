import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'fake-text',
  templateUrl: './fake-text.component.html',
  styleUrls: ['./fake-text.component.scss'],
  animations:[ trigger('popOverState', [
    state('hide', style({ opacity: 0})),
    state('show', style({ opacity: 1})),
    transition('show => hide', animate('600ms ease-out')),
    transition('hide => show', animate('1000ms ease-in')),
  ])]
})
export class FakeTextComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit(): void {}

  get stateName(): string {
    return this.show ? 'show' : 'hide';
  }

  toogle() {
    this.show = !this.show;
  }
}
