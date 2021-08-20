import { Observable } from 'rxjs';
import { Product } from '../model/product';

export abstract class ShoppingCart {
  abstract get count$(): Observable<number>;
  abstract get price$(): Observable<number>;
  abstract get items$(): Observable<{ product: Product; count: number }[]>;
  abstract addProduct(product: Product): void;
  abstract removeProduct(product: Product): void;
}
