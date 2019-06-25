import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './view/introduction.component';
import { ReferenceComponent } from './view/reference.component';

const routes: Routes = [
  // {
  //   path: '**',
  //   component: IntroductionComponent,
  //   data: { title: 'Introduction' }
  // },
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: { title: 'Introduction' }
  },
  {
    path: 'reference',
    component: ReferenceComponent,
    data: { title: 'Reference' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
