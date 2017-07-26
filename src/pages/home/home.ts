import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){

    this.items = [
      {title: 'Add Line Graph', description: 'test1'},
      {title: 'Add Bar Graph', description: 'test2'},
      {title: 'Send to Venkat', description: 'test3'}
    ];

  }

  addItem(){

  }

  viewItem(){

  }

}
