import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { OverlayPanel, ConfirmationService }               from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', './menu.hamburger.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  responsive: boolean = false;
  items: MenuItem[];

  @ViewChild('userOverlay', { static: false })
  userOverlay: OverlayPanel;
  @ViewChild('hamburger', { static: true })
  hamburger: ElementRef;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Bemutatkozás', icon: 'fa fa-download', routerLink: ['/introduction']},
      {label: 'Referenciák', icon: 'fa fa-download', routerLink: ['/reference'], queryParams: {'recent': 'true'}},
      {label: 'Képek', icon: 'fa fa-download', routerLink: ['/pictures']},
      {label: 'Kapcsolat', icon: 'fa fa-download', routerLink: ['/contact']},
      {label: 'Profiljaink', icon: 'fa fa-download', routerLink: ['/profiles']},
      {label: 'Letöltések', icon: 'fa fa-download', routerLink: ['/downloads']}
    ];
  }

  toggleMenu(): void {
    if ( !this.hamburger.nativeElement ) { return; }

    if (this.hamburger.nativeElement.className.indexOf('is-active') !== -1) {
      this.hamburger.nativeElement.className = 'hamburger hamburger--slider';
    } else {
      this.hamburger.nativeElement.className += ' is-active';
    }
    this.responsive = !this.responsive;
  }

  closeMenu(): void {
    if ( !this.hamburger.nativeElement ) { return; }
    this.hamburger.nativeElement.className = 'hamburger hamburger--slider';
    this.responsive = false;
  }

  private initItemClick(event: any): any {
    let item = event.item;
    if (item.disabled) {
      event.originalEvent.preventDefault();
      return;
    }

    this.closeMenu();
    return item;
  }

  itemClick(event: any): void {
    let item = this.initItemClick(event);
    if (!item) {
      return;
    }

    // if (this.utilService.isDefined(item.externalUrl)) {
    //   let url = item.externalUrl + item.manualRouterLink;
    //   if (this.dealId) {
    //     url += '?dealId=' + this.dealId;
    //   }
    //   window.location.href = url;
    // } else {
    //   this.navigateTo(item.manualRouterLink);
    // }
  }
}
