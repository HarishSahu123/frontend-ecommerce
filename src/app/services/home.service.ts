import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  getPosts(userId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/posts?userId=${userId}`);
  }

  getComments(postId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/comments?postId=${postId}`);
  }
}
