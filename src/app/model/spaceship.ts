import { Model } from './model';
import { Star } from './star';
import { Planet } from './planet';
import { Player } from './player';
import { CargoItem } from './cargo-item';

export class Spaceship {
constructor(
    public id: number,
    public name: string,
    public model: Model,
    public credit: number,
    public currentStar: Star,
    public currentPlanet: Planet,
    public crew: Player[],
    public cargo: CargoItem[]
  ) {}
}
