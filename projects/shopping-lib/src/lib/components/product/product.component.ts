import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './../../model/product';

@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styles: [
    `
      mat-card-title {
        height: 60px;
      }
      img.mat-card-image {
        height: 380px;
      }

      .price {
        color: #252525;
        font-weight: 700;
      }
    `,
  ],
})
export class ProductComponent implements OnInit {
  @Input()
  product?: Product;

  @Output()
  addToShoppingCartRequest: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  add() {
    this.addToShoppingCartRequest.emit(this.product);
  }
}
