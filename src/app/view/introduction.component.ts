import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IntroductionComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({source:'assets/images/profile.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/images/rapidscoper_small.png', alt:'Description for Image 1', title:'Title 1'});
  }

}
