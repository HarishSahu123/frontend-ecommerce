import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { ProductDetailsService } from '../services/product-details.service';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../services/auth-service.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule ,RouterModule  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
   product: any;
   loading = true;
   errorMessage = '';
   showLoginModal = false;
   addToCartMessage = '';


   constructor( private route:ActivatedRoute ,
    private productService:ProductDetailsService,
     public router: Router,
     private authService:AuthServiceService,
     private cartService:CartServiceService
   ){
   }

 ngOnInit() {

  console.log("DETAIL COMPONENT LOADED");

  const id = this.route.snapshot.paramMap.get('id');
  console.log("ROUTE ID:", id);

  if (!id) return;

  this.productService.gtproductDetail(+id)
    .subscribe({
      next: (res) => {
        console.log("API RESPONSE:", res);
        this.product = res.data;
      },
      error: (err) => {
        console.error("API ERROR:", err);
      }
    });
  }
showLoginPopup() {
  this.showLoginModal = true;
}

handleAddToCart() {

  this.addToCartMessage = '';

  this.cartService
    .addToCart(this.product.product_id, 1)
    .subscribe({
      next: () => {
        this.addToCartMessage = "Product added successfully ✅";
      },
      error: (err) => {
        this.addToCartMessage =
          err?.error?.message || "Something went wrong!";
      }
    });
}

}



