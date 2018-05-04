import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//declare var require: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My NoSQL interface';
  private dataAlbBack: any;
  private dataAlbVBack: any;
  private dataArtBack: any;
  private dataArtVBack: any;
  private albumApiUrl="http://localhost:3000/albums";
  private artistApiUrl="http://localhost:3000/artists";
  private albumViewApiUrl="http://localhost:3000/viewalb";
  private artistViewApiUrl="http://localhost:3000/viewart";
  dataAlb: any = {};
  dataAlbV: any = {};
  dataArt: any = {};
  dataArtV: any = {};
  step = 2;
  mech = 1;

  searchText = '';

  constructor(private http: HttpClient){
    this.getAlbums();
    this.getDataAlb();
    this.getArtists();
    this.getDataArt();
    this.getAlbumsV();
    this.getDataAlbV();
    this.getArtistsV();
    this.getDataArtV();
  }

  getDataAlb(){
    return this.http.get(this.albumApiUrl);
  }

  getDataAlbV(){
    return this.http.get(this.albumViewApiUrl); 
  }

  getDataArt(){
    return this.http.get(this.artistApiUrl);
  }

  getDataArtV(){
    return this.http.get(this.artistViewApiUrl);
  }

  getAlbums(){
    this.getDataAlb().subscribe(dataAlb => {
      console.log(dataAlb);
      this.dataAlb = dataAlb
      this.dataAlbBack = dataAlb;
    })
  }

  getAlbumsV(){
    this.getDataAlbV().subscribe(dataAlbV => {
      console.log(dataAlbV);
      this.dataAlbV = dataAlbV
      this.dataAlbVBack = dataAlbV;
    })
  }

  getArtists(){
    this.getDataArt().subscribe(dataArt => {
      console.log(dataArt);
      this.dataArt = dataArt
      this.dataArtBack = dataArt;
    })
  }

  getArtistsV(){
    this.getDataArtV().subscribe(dataArtV => {
      console.log(dataArtV);
      this.dataArtV = dataArtV
      this.dataArtVBack = dataArtV;
    })
  }

  displayStep(section:number){
    this.step=section;
  }

  displayMech(section:number){
    this.mech=section;
  }

  sortAlbumName(){
    const nameAlb = this.dataAlb.slice(0);
    nameAlb.sort(function(a,b){
      const x = a.alb_nom.toLowerCase();
      const y = b.alb_nom.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    this.dataAlb = nameAlb;
  }

  sortAlbumPrice(){
    const priceAlb = this.dataAlb.slice(0);
    priceAlb.sort(function(a, b) {
      return a.alb_prix - b.alb_prix;
    });
    this.dataAlb = priceAlb;
  }

  sortAlbumYear(){
    const yearAlb = this.dataAlb.slice(0);
    yearAlb.sort(function(a, b) {
      return a.alb_year - b.alb_year;
    });
    this.dataAlb = yearAlb;
  }

  sortArtistName(){
    const nameArt = this.dataArt.slice(0);
    nameArt.sort(function(a,b){
      const x = a.art_nom.toLowerCase();
      const y = b.art_nom.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    this.dataArt = nameArt;
  }

  sortArtistGenre(){
    const genreArt = this.dataArt.slice(0);
    genreArt.sort(function(a,b){
      const x = a.art_genre.toLowerCase();
      const y = b.art_genre.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    this.dataArt = genreArt;
  }

  protected search(value: string) {
    for (const i in this.dataAlb) {
      if (this.dataAlb[i].alb_nom.toLowerCase() === value.toLowerCase() || this.dataAlb[i].art_nom.toLowerCase() === value.toLowerCase()) {
        const album = this.dataAlb[i]
        this.dataAlb = []
        this.dataAlb.push(album)
        return;
      }
    }
  }

  protected valueChange(value) {
    if (value === '') {
      this.dataAlb = this.dataAlbBack;
      return;
    }
    this.search(value);
  }


}







