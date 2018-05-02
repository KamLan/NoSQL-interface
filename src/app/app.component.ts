import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
//declare var require: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My NoSQL interface';
  private albumApiUrl="http://localhost:3000/albums";
  private artistApiUrl="http://localhost:3000/artists";
  dataAlb: any = {};
  dataArt: any = {};
  step = 2;

  searchText = '';

  constructor(private http: HttpClient){
    this.getAlbums();
    this.getDataAlb();
    this.getArtists();
    this.getDataArt();
    //this.sortAlbumName();
    //this.sortArtistsName();
  }

  getDataAlb(){
    return this.http.get(this.albumApiUrl);
  }

  getDataArt(){
    return this.http.get(this.artistApiUrl);
  }

  getAlbums(){
    this.getDataAlb().subscribe(dataAlb => {
      console.log(dataAlb);
      this.dataAlb = dataAlb
    })
  }

  getArtists(){
    this.getDataArt().subscribe(dataArt => {
      console.log(dataArt);
      this.dataArt = dataArt
    })
  }

  displayStep(section:number){
    this.step=section;
  }

  sortAlbumName(){
    this.dataAlb.sort();
  }

  sortArtistsName(){
    this.dataArt.sort();
  }

}







