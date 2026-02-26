import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.baseUrl}${environment.endpoints.login}`, credentials);
  }
}
