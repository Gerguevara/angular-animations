import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsMainComponent } from './pages/animations-main/animations-main.component';

import { MaterialModule } from './material/material/material.module';
import { FakeTextComponent } from './pages/animations-main/fake-text/fake-text.component';
import { OpenCloseComponent } from './pages/animations-main/open-close/open-close.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimationsMainComponent,
    FakeTextComponent,
    OpenCloseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
