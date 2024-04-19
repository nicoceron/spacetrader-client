export class TransactionRequest {
  constructor(
    public spaceshipId: number,
    public planetaryStockId: number,
    public quantity: number
  ) {}
}
