import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

/**
 * 常规项目里models一般放置在单独目录，这里仅作示例。
 */
export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;

  expand?: boolean;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private api: ApiService) {}

  getEmployees() {
    return this.api.get<Employee[]>('users');
  }
}
