import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login(login, password){
    if(login === "admin"){
      if(password === "root"){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  ngOnInit() {
  }

}
