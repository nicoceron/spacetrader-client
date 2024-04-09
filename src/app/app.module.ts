import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerViewComponent } from './player/player-view/player-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerEditComponent,
    PlayerListComponent,
    PlayerViewComponent
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
