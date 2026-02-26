import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
    private baseUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  gtproductDetail(product_id:number):Observable <any>{
        return this.http.get<any>(`${this.baseUrl}${environment.endpoints.productdetail}${product_id}`);
  }
  



  

}
