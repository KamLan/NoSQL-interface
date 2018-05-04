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
  private dataAlbBack: any;
  private dataArtBack: any;
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
      this.dataAlbBack = dataAlb;
    })
  }

  getArtists(){
    this.getDataArt().subscribe(dataArt => {
      console.log(dataArt);
      this.dataArt = dataArt
      this.dataArtBack = dataArt;
    })
  }

  displayStep(section:number){
    this.step=section;
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







