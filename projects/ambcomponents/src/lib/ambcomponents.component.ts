import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-ambcomponents',
  template: `
    <p>
      ambcomponents works!
		</p>
		 <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: []
})
export class AmbcomponentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
