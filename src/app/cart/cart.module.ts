import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { SharedModule } from '../shared'; 

const  CartRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'cart',
    component: CartComponent
  }
]);

@NgModule({
  imports: [
    CartRouting,
    SharedModule
  ],
  declarations: [
    CartComponent
  ],
  providers: []
})
export class CartModule {}