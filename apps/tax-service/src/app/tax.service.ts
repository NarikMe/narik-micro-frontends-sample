import { Product, TaxService } from 'shopping-lib';

export class TaxServiceImpl extends TaxService {
  calculateTax(items: { product: Product; count: number }[]): Promise<number> {
    return Promise.resolve(
      (items.reduce(
        (price, curr) => price + curr.count * curr.product.price,
        0
      ) *
        9) /
        100
    );
  }
}

export const providers = [
  {
    provide: TaxService,
    useClass: TaxServiceImpl,
  },
];
