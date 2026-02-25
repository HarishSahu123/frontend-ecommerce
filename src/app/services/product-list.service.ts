import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private baseUrl = 'http://localhost:8081/api/v1/public/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number, size: number): Observable<any> {

    const params = new HttpParams()
      .set('pageNumber', page)
      .set('pageSize', size)
      .set('sortBy', 'CategoryName')
      .set('sortOrder', 'desc');

    return this.http.get<any>(this.baseUrl, { params });
  }
  
  
}
