import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Apt',
      'At Central Park West',
      'https://media.angieslist.com/s3fs-public/styles/widescreen_large/s3/s3fs-public/brownstone%20getty%20use.jpg?YT1ZlPuIi_k3kHzwCXi.GHOlAINlMgYl&itok=u9SOu5rz',
      299
    ),
    new Place (
      'p2',
      'Holmes Farmhouse',
      'Near Berlin',
      'https://classicbookreader.files.wordpress.com/2013/10/middlefield.jpg',
      99
    ),
    new Place (
      'p3',
      'Sarenbee',
      'In the Georgia countyside',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-96JPBzUTCSA%2FWckXnEwpNtI%2FAAAAAAAAjLc%2FxlubSujplK85LlyOYWhhO5LDAJeGvqgrQCLcBGAs%2Fs1600%2Fqual-barn.jpg&f=1&nofb=1',
      199
    )
  ];

  get places() {
    return [...this._places];
  }
 
  constructor() { }
}
