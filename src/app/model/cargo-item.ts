import { Spaceship } from './spaceship';
import { Product } from './product';

export class CargoItem {
constructor(
    public id: number,
    public spaceship: Spaceship,
    public product: Product,
    public quantity: number
  ) {}
}
