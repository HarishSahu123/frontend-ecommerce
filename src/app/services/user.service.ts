import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post(`${this.baseUrl}${environment.endpoints.register}`, user);
  }
}
