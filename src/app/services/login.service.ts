import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private baseUrl = 'https://backend-ecommerce-2-nnbi.onrender.com/api/v1/public/login';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(this.baseUrl, credentials);
  }
}
