import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardListComponent} from './components/card/card-list/card-list.component';
import {CreateCardComponent} from './components/card/create-card/create-card.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {GroupComponent} from './components/group/group/group.component';
import {CreateGroupComponent} from './components/group/create-group/create-group.component';
import {GroupListComponent} from './components/group/group-list/group-list.component';
import {CreateCardInGroupComponent} from './components/group/create-card-in-group/create-card-in-group.component';
import {CardInGroupListComponent} from './components/group/card-in-group-list/card-in-group-list.component';
import {CardComponent} from './components/card/card/card.component';
import {SuggestionListComponent} from './components/card/suggestion-list/suggestion-list.component';

const routes: Routes = [
  { path: 'land' , component: LandingPageComponent},
  {path: '', redirectTo: 'land', pathMatch: 'full'},
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'cards', pathMatch: 'full'},
      { path: 'card', component: CardComponent,
        children: [
          {path: '', component: CardListComponent},
          {path: 'addCard', component: CreateCardComponent},
          {path: 'listCards', component: CardListComponent},
          {path: 'listSuggestion', component: SuggestionListComponent}
        ]},
      { path: 'group', component: GroupComponent,
      children: [
        {path: '', component: GroupListComponent },
        { path: 'addGroup', component: CreateGroupComponent},
        { path: 'listGroup', component: GroupListComponent},
        { path: 'listCardsInGroup', component:  CardInGroupListComponent},
        { path: 'addCardToGroup', component: CreateCardInGroupComponent}
      ]},
      { path: 'cards/addCard', component: CreateCardComponent},
      {path: 'group/createGroup', component: CreateGroupComponent}
    ]
  },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
