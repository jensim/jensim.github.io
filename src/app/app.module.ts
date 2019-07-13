import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './modules/material-module/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JavaComponent} from './pages/java/java.component';
import {UnknownComponent} from './pages/unknown/unknown.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JavaComponent,
    UnknownComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
