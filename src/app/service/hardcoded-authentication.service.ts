import { Injectable } from '@angular/core';

@Injectable({ //make this componenet avalble for the dependency injection
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {}

  authenticate(username: any, password: any) {
    // console.log('before '+ this.isUserLoggedIn());

    if (username === "imen" && password === '4444') {
      sessionStorage.setItem('authenticaterUser', username);
      // console.log('after '+this.isUserLoggedIn());

      return true
    }
    return false
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
