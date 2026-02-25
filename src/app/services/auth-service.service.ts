import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  isLoggedIn():Boolean{
    return !!localStorage.getItem('token');
  }

  isRoleCheck(){
    
  }
}
