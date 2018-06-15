import { InfoService } from './service/info.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profile = {};

  constructor(private info:InfoService){
    // this.info.getUser().subscribe(profile => {
      // this.profile = profile
    // })

    this.info.getInfo().subscribe(res => {
      this.profile = res.json();
    })
  }



}
