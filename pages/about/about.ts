import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'],

})
export class AboutPage {
  tuitionValue: number;
  paymentTerm: number;
  totalpayableValue1: number;
  totalamountValue1: number;
  monthlyValue1: number;

  constructor(public navCtrl: NavController) {

  }
  compute () {
    this.totalpayableValue1 = ((this.tuitionValue * 0.75 / 100) * this.paymentTerm);
    this.totalamountValue1 = (this.tuitionValue*1 + this.totalpayableValue1*1);
    this.monthlyValue1 = this.totalamountValue1 / this.paymentTerm;
  }

}
