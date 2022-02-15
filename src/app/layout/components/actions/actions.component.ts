import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input() layout: string;

  constructor() {
    this.layout = 'vertical';
  }

  ngOnInit() { }
}
