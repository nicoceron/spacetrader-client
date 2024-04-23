import { Component, OnInit } from '@angular/core';
import { MechanicService } from '../../shared/mechanic.service';
import { PlanetaryStock } from '../../model/planetary-stock';
import { Product } from '../../model/product';
import { Planet } from'../../model/planet';
import { TransactionRequest } from '../../model/transaction-request';
import { CurrentStateService } from '../../shared/current-state.service';

@Component({
selector: 'app-trade',
templateUrl: './trade.component.html',
styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
planetaryStocks: PlanetaryStock[] = [];
selectedPlanetId?: number;

constructor(
        private mechanicService: MechanicService,
        private currentStateService: CurrentStateService
    ) {}

    ngOnInit(): void {
        this.selectedPlanetId = this.currentStateService.selectedPlanetId;  // Ensure this line is error-free

        if (this.selectedPlanetId) {
            this.loadPlanetaryStock();
        }
    }
  loadPlanetaryStock(): void {
    if (this.selectedPlanetId) {
      this.mechanicService.listPlanetaryStock(this.selectedPlanetId).subscribe(
        stocks => {
          this.planetaryStocks = stocks;
        },
        error => {
          console.error('Error fetching planetary stocks', error);
        }
      );
    }
  }

  onBuy(stockId: number, quantity: number) {
    const transaction: TransactionRequest = {
      spaceshipId: 1, // this should be the actual spaceship id
      planetaryStockId: stockId,
      quantity: quantity
    };

    this.mechanicService.buyProduct(transaction).subscribe(
      response => console.log('Purchase successful', response),
      error => console.error('Error purchasing stock', error)
    );
  }

  onSell(stockId: number, quantity: number) {
    const transaction: TransactionRequest = {
      spaceshipId: 1, // this should be the actual spaceship id
      planetaryStockId: stockId,
      quantity: quantity
    };

    this.mechanicService.sellProduct(transaction).subscribe(
      response => console.log('Sale successful', response),
      error => console.error('Error selling stock', error)
    );
  }
}
