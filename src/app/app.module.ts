import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AbcService } from './abc.service';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [HttpClientModule, AbcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
