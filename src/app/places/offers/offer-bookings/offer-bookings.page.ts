import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabes/offers');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/offers');
  }

}
