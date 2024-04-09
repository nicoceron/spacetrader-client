import { Component, Input } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../shared/player.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-player-edit',
templateUrl: './player-edit.component.html',
styleUrl: './player-edit.component.css'
})
export class PlayerEditComponent {
constructor(
    private playerService: PlayerService,
    private router: Router
  ) {

  }

  @Input()
  set id(id: number) {
    console.log("id", id)
    this.playerService.searchPlayer(id).subscribe(participant => this.player = participant);
  }

  player: Player = new Player(0, "", "", "")

  createPlayer() {
    this.playerService.createPlayer(this.player).subscribe(player => console.log(player));
    this.router.navigate(['/player/list'])
  }
}
