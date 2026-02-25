import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://backend-ecommerce-2-nnbi.onrender.com/api/v1/public/createUser';

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }
}
