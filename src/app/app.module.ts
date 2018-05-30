import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {CartModule} from './cart/cart.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule,
  ApiService,
 UserService,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    data: { title: 'product List' }
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    CartModule,
    rootRouting,
    SharedModule,
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
    
  ],
    providers: [
        ApiService,
        UserService
      ],
  bootstrap: [AppComponent]
})
export class AppModule {}