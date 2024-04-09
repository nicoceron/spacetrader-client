import { Component } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../shared/player.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {

  players: Player[] = [];
  constructor (
  private playerService: PlayerService,)
{}

ngOnInit(): void {
    this.playerService.listPlayers().subscribe(participants => this.players = participants)
  }
)

}
