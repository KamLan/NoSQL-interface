import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-a',
  templateUrl: './cards-a.component.html',
  styleUrls: ['./cards-a.component.css']
})
export class CardsAComponent implements OnInit {

  mech = 1;
  albshow=0;
  alb_artist:any;
  index:any;

  @Input() private artists: any;
  @Input() private artistsV: any;

  constructor() { }

  displayMech(section:number){
    this.mech=section;
  }

  displayAlbums(i:any){
    this.alb_artist=this.artistsV[i].albums;
    this.albshow=1;
  }

  ngOnInit() {
  }

}
