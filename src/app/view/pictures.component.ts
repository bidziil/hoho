import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PicturesComponent implements OnInit {

  images: any[];

  constructor( public route: ActivatedRoute,
               public router: Router) { }

  ngOnInit(): void {
    console.info('ngOnInit', this, this.route.snapshot);

    this.initImages();
  }

  initImages() {
    if ( this.images && this.images.length > 0 ) { return; }

    this.images = [];
    this.images.push({source: 'assets/images/wall-paint-01.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/wall-paint-02.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/wall-paint-03.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/wall-paint-04.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/wall-paint-05.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/wall-paint-06.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/wall-paint-07.jpg', alt: 'Description for Image 1', title: 'Title 1'});
  }

  onImageClicked(event: any): void {
    console.info('onImageClicked', event);
  }

  onImageChange(event: any): void {
    console.info('onImageChange', event);
  }

}
