// shared/current-state.service.ts
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class CurrentStateService {
private _selectedPlanetId?: number;

get selectedPlanetId(): number | undefined {
  return this._selectedPlanetId;
}

set selectedPlanetId(value: number | undefined) {
  this._selectedPlanetId = value;
}

}
