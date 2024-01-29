import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroAddFormComponent } from './hero-add-form/hero-add-form.component';
import { HeroViewComponent } from './hero-view/hero-view.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  { path: 'hero', component: HeroListComponent },
  { path: 'hero/add', component: HeroAddFormComponent},
  { path: 'hero/:name', component: HeroViewComponent},
  { path: '', redirectTo: '/hero', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
