import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, ShoppingCart } from 'shopping-lib';

@Injectable()
export class ShoppingCartService extends ShoppingCart {
  items: { product: Product; count: number }[] = [];
  itemsSubject: BehaviorSubject<{ product: Product; count: number }[]> =
    new BehaviorSubject<{ product: Product; count: number }[]>(this.items);

  constructor() {
    super();

    const storeItems = localStorage.getItem('shopping-cart');
    if (storeItems) {
      this.items = JSON.parse(storeItems);
      this.onChange();
    }
  }

  get count$(): Observable<number> {
    return this.itemsSubject.pipe(
      map((items) => items.reduce((count, curr) => count + curr.count, 0))
    );
  }
  get price$(): Observable<number> {
    return this.itemsSubject.pipe(
      map((items) =>
        items.reduce(
          (price, curr) => price + curr.count * curr.product.price,
          0
        )
      )
    );
  }
  get items$(): Observable<{ product: Product; count: number }[]> {
    return this.itemsSubject.asObservable();
  }

  addProduct(product: Product): void {
    const index = this.findProductIndex(product);
    if (index >= 0) {
      this.items[index].count++;
    } else {
      this.items.push({
        product: product,
        count: 1,
      });
    }
    this.onChange();
  }
  removeProduct(product: Product): void {
    const index = this.findProductIndex(product);
    if (index >= 0) {
      if (this.items[index].count <= 1) {
        this.items.splice(index, 1);
      } else this.items[index].count--;
      this.onChange();
    }
  }

  private findProductIndex(product: Product): number {
    return this.items.findIndex((i) => i.product.id === product.id);
  }

  private onChange() {
    this.itemsSubject.next(this.items);
    localStorage.setItem('shopping-cart', JSON.stringify(this.items));
  }
}

export const providers = [
  {
    provide: ShoppingCart,
    useClass: ShoppingCartService,
  },
];
