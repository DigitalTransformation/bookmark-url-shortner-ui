import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardListComponent} from './components/card/card-list/card-list.component';
import {CreateCardComponent} from './components/card/create-card/create-card.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {GroupComponent} from './components/group/group/group.component';

const routes: Routes = [
  { path: 'cards', component: CardListComponent },
  { path: 'addCard', component: CreateCardComponent},
  { path: 'land' , component: LandingPageComponent},
  {path: '', redirectTo: 'land', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'cards', pathMatch: 'full'},
      { path: 'cards', component: CardListComponent},
      { path: 'group', component: GroupComponent}
    ]
  },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
