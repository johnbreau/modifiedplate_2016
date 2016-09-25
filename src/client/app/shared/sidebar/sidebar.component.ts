import { Component, OnInit } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'mp-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})

export class SideBarComponent {
  imgAr: any;
  num: Number;
  imgStr: any;
  randomImage: String;

ngOnInit(){
  this.num = Math.floor( Math.random() * 48 );
  this.randomImage = '../assets/images/figimages/fig'+ this.num + '.png';
}

}
