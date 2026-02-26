import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

   private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getProducts(page: number, size: number): Observable<any> {

    const params = new HttpParams()
      .set('pageNumber', page)
      .set('pageSize', size)
      .set('sortBy', 'CategoryName')
      .set('sortOrder', 'desc');

    return this.http.get<any>(`${this.baseUrl}${environment.endpoints.productlists}`, { params });
  }
  
  
}
