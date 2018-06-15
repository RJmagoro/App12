import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor( private http: Http) { }

  getUser(){ //getting the info
    return this.http.get('http://conduit.productionready.io/api/profiles/eric').pipe(map (res => { 
      return res.json()}));
  }
  getInfo(){
    return this.http.get('http://conduit.productionready.io/api/profiles/eric');
  }
  }

