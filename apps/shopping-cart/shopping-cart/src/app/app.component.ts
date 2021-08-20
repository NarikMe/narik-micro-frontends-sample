import { Component, OnDestroy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MicroFrontendsService } from '@narik/micro-frontends-infrastructure';
import { Subscription } from 'rxjs';
import { Product, ShoppingCart, TaxService } from 'shopping-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .payment-container {
        margin-left: 20px;
      }
    `,
  ],
})
export class AppComponent implements OnDestroy {
  private subscription?: Subscription;
  selectedPaymentType?: string;
  shoppingCart: ShoppingCart;
  taxService: TaxService;
  taxAmount: number = 0;
  paymentTypes: { key: string; title: string }[] = [];
  constructor(microFrontendsService: MicroFrontendsService) {
    this.shoppingCart = microFrontendsService.injector.get(ShoppingCart);
    this.taxService = microFrontendsService.injector.get(
      TaxService,
      new ZeroTaxService()
    );
    this.subscription = this.shoppingCart.items$.subscribe((items) => {
      this.taxService.calculateTax(items).then((tax: number) => {
        this.taxAmount = tax;
      });
    });

    this.paymentTypes = microFrontendsService
      .getExtensionPoints('payment-type')
      .map((x) => ({
        title: x.title ?? 'Unknown',
        key: x.app,
      }));
  }

  checkout() {
    alert('checkout');
  }

  remove(product: Product) {
    this.shoppingCart.removeProduct(product);
  }

  paymentTypeChange(value: MatSelectChange) {
    this.selectedPaymentType = value.value;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

export class ZeroTaxService extends TaxService {
  calculateTax(items: { product: Product; count: number }[]): Promise<number> {
    return Promise.resolve(0);
  }
}
