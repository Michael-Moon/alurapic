import { Injectable } from '@angular/core';

const Key = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {

  hasToken(){
    return !!this.getToken();
  }
  setToken(token: string){
    window.localStorage.setItem(Key, token);
  }
  getToken(){
    return window.localStorage.getItem(Key);
  }
  removeToken(){
    window.localStorage.removeItem(Key);
  }

}
