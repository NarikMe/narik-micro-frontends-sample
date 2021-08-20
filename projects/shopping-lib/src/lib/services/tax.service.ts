import { Product } from './../model/product';

export abstract class TaxService {
  abstract calculateTax(
    items: { product: Product; count: number }[]
  ): Promise<number>;
}
