import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

constructor(
    private http: HttpClient
  ) {
  }
 private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
)

listPlayers(): Observable <Player[]> {
return this.http.get<Player[]>(`${environment.serverUrl}/api/player/list`)
}

searchPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${environment.serverUrl}/api/player/${id}`)
  }

createPlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${environment.serverUrl}/api/player`, player, { headers: this.headers });
  }
}
