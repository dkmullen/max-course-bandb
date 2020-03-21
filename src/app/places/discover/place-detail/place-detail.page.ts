import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBookPlace() {
    // use ionic navigator rather than ng router because ionic can know which direction
    // we are going and therefore which animation to play
    this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop() removes the top page, but should only be used if you know there are other pages on the stack
    // ie, if the user refreshes the page, the stack would be empty and there would be no page to reveal
  }
}
