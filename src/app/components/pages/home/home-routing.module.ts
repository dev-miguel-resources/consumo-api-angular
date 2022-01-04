import { HomeChildren2Component } from './../home-children2/home-children2.component';
import { HomeChildren1Component } from './../home-children1/home-children1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'children1',
    component: HomeChildren1Component,
  },
  {
    path: 'children2',
    component: HomeChildren2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
