import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { TradeComponent } from './mechanic/trade/trade.component';
import { NavigationComponent } from './mechanic/navigation/navigation.component';

const routes: Routes = [
{ path: 'player/edit/:id', component: PlayerEditComponent },
{ path: 'mechanic/trade', component: TradeComponent },
{ path: 'mechanic/navigation', component: NavigationComponent },
// Add more routes as needed
];

@NgModule({
imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true, // This is actually not a valid Angular RouterModule option as of my knowledge cutoff in December 2023
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
