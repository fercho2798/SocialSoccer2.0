import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
/* import { isNullOrUndefined } from 'util';
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private URL = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user: any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user: {}) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

/*   getCurrentUser(): string {
    const user = localStorage.getItem('User');
    if (!isNullOrUndefined(user)) {
      return user;
    } else {
      return null;
    }
  } */

}
