import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * mock示例开源API
   */
  private baseUrl = environment.apiBaseUrl;

  constructor(private $http: HttpClient) {}

  /**
   * 测试只用到了GET方法，这里简单示例商业项目对接口服务的抽象思路
   */
  get<T>(path: string): Observable<T> {
    return this.makeHttp('GET', path, null, null);
  }

  post<T>(path: string, body: Object): Observable<T> {
    return this.makeHttp('POST', path, null, body);
  }

  private makeHttp<T>(
    method: 'GET' | 'POST',
    path: string,
    headers: Object,
    body: Object
  ): Observable<T> {
    const finalHeaders = Object.assign(
      { 'Content-Type': 'application/json' },
      headers
    );

    return this.$http.request<T>(method, this.baseUrl + path, {
      body: body,
      headers: finalHeaders
    });
  }
}
