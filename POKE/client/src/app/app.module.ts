import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Home2Component } from './components/home2/home2.component';
import { Cards2Component } from './components/cards2/cards2.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    NavigateComponent,
    CardsComponent,
    Home2Component,
    Cards2Component,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
