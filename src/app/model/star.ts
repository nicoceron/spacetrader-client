import { Planet } from './planet';

export class Star {
constructor(
    public id: number,
    public name: string,
    public x: number,
    public y: number,
    public z: number,
    public inhabited: boolean,
  ) {}
}
