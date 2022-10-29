import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-goal',
  templateUrl: './app-goal.page.html',
  styleUrls: ['./app-goal.page.scss'],
})
export class AppGoalPage implements OnInit {
  navCtrl: any;

  constructor() { }

  ngOnInit() {
  }
back(){
  this.navCtrl.goBack(); 
}
}
