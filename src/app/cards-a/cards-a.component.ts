import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-a',
  templateUrl: './cards-a.component.html',
  styleUrls: ['./cards-a.component.css']
})
export class CardsAComponent implements OnInit {

  mech = 1;

  @Input() private artists: any;
  @Input() private artistsV: any;

  constructor() { }

  displayMech(section:number){
    this.mech=section;
  }

  ngOnInit() {
  }

}
