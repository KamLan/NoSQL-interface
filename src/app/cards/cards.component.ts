import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  mech = 1;

  @Input() private albums: any;
  @Input() private albumsV: any;

  constructor() { }

  displayMech(section:number){
    this.mech=section;
  }

  ngOnInit() {
  }

}
