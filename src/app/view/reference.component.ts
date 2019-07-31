import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReferenceComponent implements OnInit {

  constructor( public route: ActivatedRoute,
               public router: Router) { }

  ngOnInit(): void {
    console.info('ngOnInit', this, this.route.snapshot);
  }

}
