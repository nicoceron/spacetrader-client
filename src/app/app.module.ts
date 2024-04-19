import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerViewComponent } from './player/player-view/player-view.component';
import { TradeComponent } from './mechanic/trade/trade.component';
import { NavigationComponent } from './mechanic/navigation/navigation.component';

@NgModule({
declarations: [
AppComponent,
PlayerEditComponent,
PlayerListComponent,
PlayerViewComponent,
TradeComponent,
NavigationComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
