// spaceship.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spaceship } from '../model/spaceship';

@Injectable({
providedIn: 'root'
})
export class SpaceshipService {
constructor(private http: HttpClient) {}

  getSpaceship(spaceshipId: number): Observable<Spaceship> {
    return this.http.get<Spaceship>(`/api/spaceships/${spaceshipId}`);
  }
}
