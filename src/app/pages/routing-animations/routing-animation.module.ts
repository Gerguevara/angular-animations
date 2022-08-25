import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingAnimationsComponent } from './routing-animations.component';
import { Test1Component } from './children/test1/test1.component';
import { Test2Component } from './children/test2/test2.component';
import { Test3Component } from './children/test3/test3.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RouterModule } from '@angular/router';
import { AppExampleRoutingModule } from './example.routes';
@NgModule({
  declarations: [
    RoutingAnimationsComponent,
    Test1Component,
    Test2Component,
    Test3Component,
  ],
  exports: [
    RoutingAnimationsComponent,
    Test1Component,
    Test2Component,
    Test3Component,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, AppExampleRoutingModule],
})
export class RoutingAnimationModule {}
