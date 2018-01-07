import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title : string = 'TaxiGroupFareChange';
  return : number = 0;
  fare : number = 0;
  people : number = 0;
  total : number = 0;

  constructor(public navCtrl: NavController) {    
  }

  calculate(){
    this.return = this.total - (this.fare * this.people);
  }

}
