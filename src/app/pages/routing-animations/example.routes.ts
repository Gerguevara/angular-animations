import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Test1Component } from './children/test1/test1.component';
import { Test2Component } from './children/test2/test2.component';
import { Test3Component } from './children/test3/test3.component';
import { RoutingAnimationsComponent } from './routing-animations.component';

const exampleRoutes: Routes = [
  // { path: '', component: RoutingAnimationsComponent},
  { path: 'test1', title: 'Main Animations 1', component: Test1Component},
  { path: 'test2', title: 'Main Animations 2', component: Test2Component},
  { path: 'test3', title: 'Main Animations 3', component: Test3Component},
  { path: '',   redirectTo: '/navigation/test1', pathMatch: 'full' }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(exampleRoutes)],
  exports: [RouterModule]
})
export class AppExampleRoutingModule { }
