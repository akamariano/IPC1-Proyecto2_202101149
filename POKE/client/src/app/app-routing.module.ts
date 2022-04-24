import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { CardsComponent } from './components/cards/cards.component';
import { Cards2Component } from './components/cards2/cards2.component';
import { Home2Component } from './components/home2/home2.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path:'', 
    redirectTo: 'login', 
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
{
  path:"buscar",
  component: Home2Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
