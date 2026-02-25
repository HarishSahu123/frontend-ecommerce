import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'register', 
            component: CreateUserComponent,
       },
      { path: 'login', component: LoginComponent },
      { path: 'get-products', component: ProductListComponent },
     { path: 'product/:id', component: ProductDetailComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'cart', component: CartComponent }
      
];
