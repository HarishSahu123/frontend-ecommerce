import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [RouterModule ,FormsModule ,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
   cart: any;
  products: any[] = [];
  loading = true;
  errorMessage = '';

  imageBaseUrl = 'http://localhost:8081/api/v1/public/products/image/';

  constructor(
    private cartService: CartServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {

    // 🔐 Check if user logged in
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: '/cart' }
      });
      return;
    }

    this.loadCart();
  }

  loadCart() {

    this.cartService.getUserCart()
      .subscribe({
        next: (res: any) => {
          console.log("CART RESPONSE:", res);

          this.cart = res;
          this.products = res.product || [];
          this.loading = false;
        },
        error: (err) => {
          console.error("Cart error:", err);
          this.errorMessage = "Failed to load cart";
          this.loading = false;
        }
      });
  }

  getTotal(): number {
    return this.cart?.total_Price || 0;
  }

increaseQty(item: any) {

  this.cartService
    .updateCartQuantity(item.product_id, 'add')
    .subscribe({
      next: () => this.loadCart()
    });

}

decreaseQty(item: any) {

  if (item.quality > 1) {

    this.cartService
      .updateCartQuantity(item.product_id, 'delete')
      .subscribe({
        next: () => this.loadCart()
      });

  }

}
updateQuantity(item: any) {

  this.cartService
    .updateCartQuantity(item.product_id, item.quality)
    .subscribe({
      next: () => {
        console.log('Quantity updated');
      },
      error: (err) => {
        console.error(err);
      }
    });

}

}
