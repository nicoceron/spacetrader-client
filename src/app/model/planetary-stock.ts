import { Product } from './product';
import { Planet } from './planet';

export class PlanetaryStock {
  constructor(
    public id: number,
    public planet: Planet,
    public product: Product,
    public stock: number,
    public demandFactor: number,
    public supplyFactor: number,
    public sellingPrice: number,
    public buyingPrice: number
  ) {}
}
