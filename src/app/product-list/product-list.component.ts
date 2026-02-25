import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListService } from '../services/product-list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  currentPage = 1;
  totalPages = 0;
  pageSize = 10;

  loading = false;
  errorMessage = '';

  constructor(private productService: ProductListService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {

    this.loading = true;
    this.errorMessage = '';

    this.productService
      .getProducts(this.currentPage, this.pageSize)
      .subscribe(
        (response: any) => {

          console.log("SUCCESS RESPONSE:", response);

          this.products = response?.content || [];
          this.totalPages = response?.totalPages || 0;

          this.loading = false;
        },
        (error) => {

          console.error("REAL ERROR:", error);

          this.errorMessage = 'Failed to load products.';
          this.loading = false;
        }
      );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchProducts();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchProducts();
    }
  }
}
