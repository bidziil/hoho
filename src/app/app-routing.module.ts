import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './view/introduction.component';
import { ReferenceComponent } from './view/reference.component';
import { PicturesComponent } from './view/pictures.component';
import { ContactComponent } from './view/contact.component';
import { ProfilesComponent } from './view/profiles.component';
import { DownloadsComponent } from './view/downloads.component';

const routes: Routes = [
  {
    path: '**',
    component: IntroductionComponent,
    data: { title: 'Introduction' }
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: { title: 'Introduction' }
  },
  {
    path: 'reference',
    component: ReferenceComponent,
    data: { title: 'Reference' }
  },
  {
    path: 'pictures',
    component: PicturesComponent,
    data: { title: 'Pictures' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'profiles',
    component: ProfilesComponent,
    data: { title: 'Profiles' }
  },
  {
    path: 'downloads',
    component: DownloadsComponent,
    data: { title: 'downloads' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
