import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' //importing the client module HTTP
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { DadjokeComponent } from './dadjoke/dadjoke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    DadjokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
