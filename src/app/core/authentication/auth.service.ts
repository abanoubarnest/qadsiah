// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Services
import { HttpService } from './../http/http.service';

@Injectable()
export class AuthService extends HttpService {
  isDomain: boolean = false;
  constructor(private httpClient: HttpClient, private router: Router) {
    super(httpClient);
    const profile: string | null = localStorage.getItem('profile');
  }

  /**
   * Check if user authenticated
   * @returns boolean
   */
  isAuthenticated(): boolean {
    const profile: string | null = localStorage.getItem('profile');
    return profile ? true : false;
  }

  /**
   * logout dashboard by removing local storage
   * in development mode and invalidating cookies
   * in production
   */
  logout() {

  }


}
