import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShoppingLibModule } from 'shopping-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ShoppingLibModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: ProductService,
      useClass: ProductService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
