import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';

const routes: Routes = [
{ path: 'player/edit/:id', component: PlayerEditComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes,
    {
      bindToComponentInputs: true, // Para poder usar @Input en rutas https://angular.io/guide/router
      onSameUrlNavigation: 'reload' // https://stackoverflow.com/a/52512361
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
