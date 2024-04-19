import { Star } from './star';
import { PlanetaryStock } from './planetary-stock';

export class Planet {
constructor(
    public id: number,
    public name: string,
    public star: Star,
    public productsAvailable: PlanetaryStock[]
  ) {}
}
