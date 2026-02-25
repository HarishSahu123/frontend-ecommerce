import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private baseUrl = 'http://localhost:8081/api/v1/carts';

  constructor(private http: HttpClient) {}

  // ✅ Add To Cart
  addToCart(productId: number, quantity: number): Observable<any> {

    const headers = this.getAuthHeaders();

    return this.http.post(
      `${this.baseUrl}/products/${productId}/quantity/${quantity}`,
      {},
      { headers }
    );
  }

  // ✅ Get User Cart
  getUserCart(): Observable<any> {

    const headers = this.getAuthHeaders();

    return this.http.get(
      `${this.baseUrl}/user/cart`,
      { headers }
    );
  }

  // ✅ Update Quantity
 updateCartQuantity(productId: number, operation: 'add' | 'delete') {

  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  return this.http.put(
    `http://localhost:8081/api/v1/cart/product/${productId}/quantity/${operation}`,
    {},
    { headers }
  );
}

  // ✅ Common Header Method (Best Practice)
  private getAuthHeaders(): HttpHeaders {

    const token = localStorage.getItem('token') || '';

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

  }

}