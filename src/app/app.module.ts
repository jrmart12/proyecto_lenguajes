import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {CartModule} from './cart/cart.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../routerConfig';
import { ProductService } from '../../product.service';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

import {
  FooterComponent,
  HeaderComponent,
  SharedModule,
  ApiService,
 UserService,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    
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
  RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule
    
  ],
    providers: [
        ProductService,UserService,ApiService
      ],
  bootstrap: [AppComponent]
})
export class AppModule {}

