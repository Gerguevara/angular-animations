import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsMainComponent } from './pages/animations-main/animations-main.component';
import { RoutingAnimationsComponent } from './pages/routing-animations/routing-animations.component';


const routes: Routes = [
  { path: 'main', title: 'Main Animations', component: AnimationsMainComponent},
  {
    path: 'navigation',
    component: RoutingAnimationsComponent,
    title: 'Routing navigation',
    loadChildren: () => import('./pages/routing-animations/routing-animation.module').then(m => m.RoutingAnimationModule)
  },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
