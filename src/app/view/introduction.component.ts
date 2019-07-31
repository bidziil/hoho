import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IntroductionComponent implements OnInit {

  images: any[];

  constructor(public route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    console.info('ngOnInit', this, this.route.snapshot);

    this.images = [];
    this.images.push({source: 'assets/images/profile.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/rapidscoper_small.png', alt: 'Description for Image 1', title: 'Title 1'});
  }

}
