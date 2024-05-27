import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Star } from '../model/star';
import { Planet } from '../model/planet';
import { PlanetaryStock } from '../model/planetary-stock';
import { TransactionRequest } from '../model/transaction-request';
import { catchError } from 'rxjs/operators';
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
        return this.http.post<string>(`${environment.serverUrl}/api/trade/buy`, transaction, { headers: this.headers })
    }

    sellProduct(transaction: TransactionRequest): Observable<string> {
        return this.http.post<string>(`${environment.serverUrl}/api/trade/sell`, transaction, { headers: this.headers })
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${error.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            switch (error.status) {
                case 400:
                    errorMessage = 'Bad Request. Please check the input data.';
                    break;
                case 402:
                    errorMessage = 'Insufficient credits to make the purchase.';
                    break;
                case 404:
                    errorMessage = 'The requested resource was not found.';
                    break;
                case 500:
                    errorMessage = 'Internal Server Error. Please try again later.';
                    break;
                default:
                    errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
            }
        }
        return throwError(errorMessage);
    }
}
