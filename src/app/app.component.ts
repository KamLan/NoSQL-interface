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
  protected searchValue: string;
  protected displayAlbums: Number = 1;
  private dataAlbBack: any;
  private dataAlbVBack: any;
  private dataArtBack: any;
  private dataArtVBack: any;
  private albumApiUrl="http://localhost:3000/albums";
  private artistApiUrl="http://localhost:3000/artists";
  //private albumViewApiUrl="http://localhost:3000/viewalb";
  //private artistViewApiUrl="http://localhost:3000/viewart";
  private artistViewApiUrl="http://localhost:3000/viewartimbri";
  private albumViewApiUrl="http://localhost:3000/viewalbimbri";
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
      this.dataAlb = dataAlb
      this.dataAlbBack = dataAlb;
    })
  }

  getAlbumsV(){
    this.getDataAlbV().subscribe(dataAlbV => {
      this.dataAlbV = dataAlbV
      this.dataAlbVBack = dataAlbV;
    })
  }

  getArtists(){
    this.getDataArt().subscribe(dataArt => {
      this.dataArt = dataArt
      this.dataArtBack = dataArt;
    })
  }

  getArtistsV(){
    this.getDataArtV().subscribe(dataArtV => {
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

    const nameAlbV = this.dataAlbV.slice(0);
    nameAlbV.sort(function(a,b){
      const x = a.alb_nom.toLowerCase();
      const y = b.alb_nom.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    this.dataAlbV = nameAlbV;
  }

  sortAlbumPrice(){
    const priceAlb = this.dataAlb.slice(0);
    priceAlb.sort(function(a, b) {
      return a.alb_prix - b.alb_prix;
    });
    this.dataAlb = priceAlb;

    const priceAlbV = this.dataAlbV.slice(0);
    priceAlbV.sort(function(a, b) {
      return a.alb_prix - b.alb_prix;
    });
    this.dataAlbV = priceAlbV;
  }

  sortAlbumYear(){
    const yearAlb = this.dataAlb.slice(0);
    yearAlb.sort(function(a, b) {
      console.log(a);
      return a.alb_annee - b.alb_annee;
    });
    this.dataAlb = yearAlb;

    const yearAlbV = this.dataAlbV.slice(0);
    yearAlbV.sort(function(a, b) {
      console.log(a);
      return a.alb_annee - b.alb_annee;
    });
    this.dataAlbV = yearAlbV;
  }

  sortArtistName(){
    const nameArt = this.dataArt.slice(0);
    nameArt.sort(function(a,b){
      const x = a.art_nom.toLowerCase();
      const y = b.art_nom.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    this.dataArt = nameArt;

    const nameArtV = this.dataArtV.slice(0);
    nameArtV.sort(function(a,b){
      const x = a.art_nom.toLowerCase();
      const y = b.art_nom.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    this.dataArtV = nameArtV;
  }

  sortArtistGenre(){
    const genreArt = this.dataArt.slice(0);
    genreArt.sort(function(a,b){
      const x = a.art_genre.toLowerCase();
      const y = b.art_genre.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    this.dataArt = genreArt;

    const genreArtV = this.dataArtV.slice(0);
    genreArtV.sort(function(a,b){
      const x = a.art_genre.toLowerCase();
      const y = b.art_genre.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    this.dataArtV = genreArtV;
  }

  protected search(value: string) {
    for (const i in this.dataAlb) {
      if (this.dataAlb[i].alb_nom.toLowerCase() === value.toLowerCase()) {
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

  protected toggleCards(val) {
    this.displayAlbums = val;
  }

}







