import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Star } from '../model/star';
import { Planet } from '../model/planet';
import { PlanetaryStock } from '../model/planetary-stock';
import { TransactionRequest } from '../model/transaction-request';
import { Product } from '../model/product';

@Injectable({
providedIn: 'root'
})
export class MechanicService {
private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

constructor(private http: HttpClient) { }

  getClosestStars(spaceshipId: number): Observable<Star[]> {
    return this.http.get<Star[]>(`${environment.serverUrl}/api/navigation/closest-stars/${spaceshipId}`);
  }

  travelToStar(spaceshipId: number, starId: number): Observable<any> {
    return this.http.post(`${environment.serverUrl}/api/navigation/travel-to-star/${spaceshipId}/${starId}`, {}, { headers: this.headers });
  }

  travelToPlanet(spaceshipId: number, planetId: number): Observable<any> {
    return this.http.post(`${environment.serverUrl}/api/navigation/travel-to-planet/${spaceshipId}/${planetId}`, {}, { headers: this.headers });
  }

  getPlanetsInStar(starId: number): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${environment.serverUrl}/api/navigation/planets/${starId}`);
  }

  listPlanetaryStock(planetId: number): Observable<PlanetaryStock[]> {
    return this.http.get<PlanetaryStock[]>(`${environment.serverUrl}/api/trade/planetary-stock/${planetId}`);
  }

  buyProduct(transaction: TransactionRequest): Observable<string> {
    return this.http.post<string>(`${environment.serverUrl}/api/trade/buy`, transaction, { headers: this.headers });
  }

  sellProduct(transaction: TransactionRequest): Observable<string> {
    return this.http.post<string>(`${environment.serverUrl}/api/trade/sell`, transaction, { headers: this.headers });
  }
}
