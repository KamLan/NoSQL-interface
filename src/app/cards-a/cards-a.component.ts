import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-a',
  templateUrl: './cards-a.component.html',
  styleUrls: ['./cards-a.component.css']
})
export class CardsAComponent implements OnInit {

  @Input() private artists: any;

  constructor() { }

  ngOnInit() {
  }

}
