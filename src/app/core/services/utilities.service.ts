import { HttpClient } from '@angular/common/http';
import { HttpService } from '@core/http/http.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UtilitiesService extends HttpService {
  constructor(private http: HttpClient) {
    super(http);
  }

  extractURLQueryParams(url: string): string | void {
    if (!url) return;
    return url.indexOf('?') !== -1 ? url.substring(url.indexOf('?')) : url;
  }

  removeURLQueryParams(url: string): string | void {
    if (!url) return;
    return url.indexOf('?') !== -1 ? url.substring(0, url.indexOf('?')) : url;
  }

  extractURLExtension(url: string): string | undefined {
    return this.removeURLQueryParams(url)?.split('.').pop();
  }


  extractFileNameFromURL(url: string): string | void {
    if (!url) return;
    return url?.split('/')?.pop()!.split('#')[0].split('?')[0];
  }

  /**
   * Generate image background URL, space free using encodeURI API
   * @param url plain image url
   * @returns background image property
   */
  getImageBackgroundURL(url: string): string | void {
    if (!url) return;
    return `url("${encodeURI(this.removeURLQueryParams(url)!)}")`;
  }
  hexToRgb(hex: string) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
}
