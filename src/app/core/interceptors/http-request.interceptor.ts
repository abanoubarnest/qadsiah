import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpXsrfTokenExtractor } from '@angular/common/http';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const Authorization = token ? `Bearer ${token}` : null;
    const XSRF_token = this.tokenExtractor.getToken() || null;

    request = request.clone({
      withCredentials: true,
      setHeaders: {
        // Add token or cookie if exists
        ...(Authorization && { Authorization }),
        ...(XSRF_token && { 'X-XSRF-TOKEN': XSRF_token }),
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    return next.handle(request);
  }
}
