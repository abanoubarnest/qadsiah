// Angular
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// env
import { environment } from '@env';

// models
import { QueryParam } from '@shared/models/query-param.model';

export class HttpService {
  private _baseUrl: string;

  /**
   * Create http service instance
   * @param httpClientInst Angular HTTP client instance
   * @param baseUrl Backend APIs base url, @default set to the url in environment files.
   */
  constructor(public httpClientInst: HttpClient, baseUrl?: string) {
    this._baseUrl = baseUrl || environment.baseUrl;
  }

  protected get<T, U = Partial<QueryParam>>(path: string, params?: Partial<QueryParam>): Observable<T> {
    let httpParams = new HttpParams();
    return this.httpClientInst
      .get<T>(`${this._baseUrl}/${path}`, { params: httpParams })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected post<T, U = QueryParam>(path: string, payload: unknown, params?: U): Observable<T> {
    return this.httpClientInst
      .post<T>(`${this._baseUrl}/${path}`, payload, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected put<T, U = QueryParam>(path: string, payload?: unknown, params?: U): Observable<T> {
    return this.httpClientInst
      .put<T>(`${this._baseUrl}/${path}`, payload, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected patch<T, U = QueryParam>(path: string, payload: unknown, params?: U): Observable<T> {
    return this.httpClientInst
      .patch<T>(`${this._baseUrl}/${path}`, payload, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected update<T, U = QueryParam>(path: string, payload: unknown, params?: U): Observable<T> {
    return this.httpClientInst
      .put<T>(`${this._baseUrl}/${path}`, payload, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected delete<T, U = QueryParam>(path: string, params?: U): Observable<T> {
    return this.httpClientInst
      .delete<T>(`${this._baseUrl}/${path}`, { params: params as any })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected download<T, U = QueryParam>(
    method: 'get' | 'post',
    path: string,
    responseType: any,
    params?: U
  ): Observable<T> {
    return this.httpClientInst[method](`${this._baseUrl}/${path}`, {
      responseType,
      params: params as any,
    }) as Observable<T>;
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Something went wrong, try again later!`;
    }

    return throwError(
      err.error && err.error.data
        ? err.error.data.message
          ? { error: err.error.data.message }
          : err.error.data
        : err.error.errors
        ? { error: err.error.errors, message: err.error.message }
        : err.error
        ? { error: err.error }
        : { error: errorMessage }
    );
  }
}
