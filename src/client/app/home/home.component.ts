import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../shared/sidebar/sidebar.component';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  constructor() {}


  ngOnInit() {
    this.getNames();
  }


  getNames() {

  }

}
